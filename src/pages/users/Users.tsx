import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

export const Success = ({ count, changeSuccess }: { count: number, changeSuccess: () => void; }) => {
	return (
		<div>
			<h3 className="text-2xl">Успешно!</h3>
			<p>Всем {count} пользователям отправлено приглашение.</p>
			<button onClick={changeSuccess} className="px-5 py-2 rounded bg-blue-500 w-full mt-5 text-white">Назад</button>
		</div>
	);
};

export interface IUser {
	avatar: string;
	email: string;
	first_name: string;
	id: number;
	last_name: string;
}

export interface IUsersListProps {
	users: IUser[];
	addInvites: (id: number) => void;
	changeSuccess: () => void;
	invites: number[];
}

export const UsersList = ({ users, addInvites, invites, changeSuccess }: IUsersListProps) => {
	const [search, setSearch] = useState('');

	return (
		<div>
			<div className="search mb-5">
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
				</svg>
				<input onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} type="text"
				       placeholder="Найти пользователя..."/>
			</div>
			<li>
				{
					users.filter(user => {
						return !search
							|| user.last_name.toLowerCase().includes(search)
							|| user.first_name.toLowerCase().includes(search)
							|| user.email.toLowerCase().includes(search);

					}).map(user => {
						return (
							<div key={user.id} className="flex justify-between items-center gap-5 mb-5">
								<div className="flex items-center gap-5">
									<img className="h-[50px] rounded-full" src={user.avatar} alt="User"/>
									<div>
										<h3>{user.first_name + ' ' + user.last_name}</h3>
										<p className="text-gray-400">
											{user.email}
										</p>
									</div>
								</div>
								<span onClick={() => addInvites(user.id)}
								      className="transition hover:text-black text-gray-400 text-4xl cursor-pointer">
										{invites.find(x => x === user.id) ? '-' : '+'}
									</span>
							</div>
						)
					})
				}
			</li>
			<button onClick={invites.length ? changeSuccess : () => null} className="px-5 py-2 rounded bg-blue-500 w-full mt-5 text-white">Отправить приглашение</button>

		</div>


	)
}

export const Users = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [success, setSuccess] = useState(false);
	const [invites, setInvites] = useState<number[]>([]);
	const handleAddOrDeleteInvites = (id: number) => {
		setInvites(prev => {
			if (prev.includes(id)) {
				return prev.filter(x => x !== id);
			}
			return [...prev, id];
		})
	}
	useEffect(() => {
		axios.get('https://reqres.in/api/users')
			.then(x => setUsers(x.data.data))
			.catch(error => console.error(error))
	}, [])
	// console.log(users)
	return (
		<div className="h-screen bg-purple-200 flex items-center justify-center">
			<div className="p-10 bg-white rounded-2xl ">
				{!success ?
					<UsersList changeSuccess={() => setSuccess(true)} invites={invites} addInvites={handleAddOrDeleteInvites} users={users}></UsersList>
					: <Success changeSuccess={() => setSuccess(false)} count={invites.length}/>
				}
			</div>
		</div>
	)
}
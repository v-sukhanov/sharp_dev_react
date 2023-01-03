import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

export interface ICreateProductProps {
	onCreate: () => void
}

export const CreateProduct = ({onCreate}: ICreateProductProps) => {
	const [value, setValue] = useState('');

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		onCreate();
	}

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title..."
				value={value}
				onChange={changeHandler}
			/>
			<button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">
				Create
			</button>
		</form>
	)
}
import { Link } from 'react-router-dom';


export const Navigations = () => {
	return (
		<nav className="h-[50px] flex justify-between items-center px-10 bg-gray-500 text-white">
			<span className="font-bold"> React</span>
			<span>
				<Link to="/" className="mr-4">Products</Link>
				<Link to="/redux-ex" className="mr-4">Redux ex</Link>
				<Link to="/about" className="mr-4">About</Link>
				<Link to="/counter" className="mr-4">Counter</Link>
				<Link to="/users" className="mr-4">Users</Link>
				<Link to="/currency-convertor" className="mr-4">Currency convertor</Link>
				<Link to="/quiz">Quiz</Link>
			</span>
		</nav>
	)
}
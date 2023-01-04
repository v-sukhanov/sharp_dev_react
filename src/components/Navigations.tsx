import { Link } from 'react-router-dom';


export const Navigations = () => {
	return (
		<nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
			<span className="font-bold"> React</span>
			<span>
				<Link to="/" className="mr-2">Products</Link>
				<Link to="/about" className="mr-2">About</Link>
				<Link to="/counter">Counter</Link>
			</span>
		</nav>
	)
}
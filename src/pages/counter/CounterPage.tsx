import { useState } from 'react';

export const CounterPage = () => {
	const [counter, setCounter] = useState(0);
	const increase = () => {
		setCounter((prev) => {
			return prev + 1;
		})
	}
	const decrease = () => {
		setCounter((prev) => {
			return prev - 1;
		})
	}
	return (
		<div className="flex justify-center items-center">
			<div className="mt-10 text-center">
				<h2>Счетчик:</h2>
				<h1 className="text-2xl my-5">{counter}</h1>
				<button onClick={decrease} className="rounded p-4 text-white bg-red-600 mr-2">- Минус</button>
				<button onClick={increase} className="rounded p-4 text-white bg-green-600">Плюс +</button>
			</div>
		</div>
	)
}
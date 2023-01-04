import { useState } from 'react';

export interface Quiz {
	title: string;
	variants: string[]
	correct: number;
}

const questions: Quiz[] = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
];

export interface IResultProps {
	correct: number;
	onClickRetry: () => void;
}

export const Result = ({ correct, onClickRetry }: IResultProps) => {
	return (
		<div className="flex flex-col gap-5 justify-center items-center">
			<img className="mt-10 h-[100px]" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
			<h2>Вы отгадали {correct} ответа из {questions.length}</h2>
			<button onClick={onClickRetry} className="rounded px-5 py-2 border bg-blue-500 text-white">Попробовать снова</button>
		</div>
	)
}

export interface IGameProps {
	step: number;
	onClickVariation: (index: number) => void;
}

export const Game = ({ step, onClickVariation }: IGameProps) => {
	return (<div className="p-10">
		<div className="progress">
			<div style={{ width: `${(step / questions.length) * 100}%` }} className="progress__inner"></div>
		</div>
		<h1 className="text-2xl mb-5">{questions[step].title}</h1>
		<ul>
			{
				questions[step].variants.map((variant, index) => {
					return (
						<li key={index} onClick={() => onClickVariation(index)}
						    className="border rounded mb-5 p-5 cursor-pointer hover:bg-sky-100 transition">
							{variant}
						</li>
					)
				})
			}

		</ul>
	</div>)
}

export const Quiz = () => {
	const [step, setStep] = useState(0);
	const [correct, setCorrect] = useState(0);

	const onClickVariation = (index: number) => {
		setStep((prev) => prev + 1);
		if (index === questions[step].correct) {
			setCorrect((prev) => prev + 1)
		}
	}

	const onClickRetry = () => {
		setStep(0)
		setCorrect(0)
	}
	return (
		<>
			{
				step < questions.length
					? (<Game step={step} onClickVariation={onClickVariation}/>)
					: (<Result correct={correct} onClickRetry={onClickRetry}/>)
			}
		</>
	);
}
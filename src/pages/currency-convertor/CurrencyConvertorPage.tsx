import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const defaultCurrencies = ['USD', 'EUR', 'GBP'];

export interface IBlockProps {
	value: string;
	currency: string;
	onChangeValue: (val: string) => void;
	onChangeCurrency: (curr: string) => void
}

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }: IBlockProps) => (
	<div className="currency-block">
		<ul className="currency-currencies">
			{defaultCurrencies.map((cur) => (
				<li
					onClick={() => onChangeCurrency(cur)}
					className={currency === cur ? 'active' : ''}
					key={cur}>
					{cur}
				</li>
			))}
		</ul>
		<input
			onChange={(e) => onChangeValue(e.target.value)}
			value={value}
			type="number"
			placeholder={'0'}
		/>
	</div>
);


export const CurrencyConvertorPage = () => {
	// const [rates, setRates] = useState([]);
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('EUR');
	const [fromPrice, setFromPrice] = useState('0');
	const [toPrice, setToPrice] = useState('0');

	const ratesRef = useRef({});

	useEffect(() => {
		fetch('https://www.cbr-xml-daily.ru/latest.js')
			.then(x => x.json())
			.then(x => {
				ratesRef.current = x.rates;
				onChangeFromValue('1');
			})
	}, []);
	const onChangeFromValue = (val: string) => {
		// @ts-ignore
		const price = parseFloat(val) / ratesRef.current[fromCurrency];
		// @ts-ignore
		const result = price * ratesRef.current[toCurrency];
		setFromPrice(val);
		setToPrice(result.toString())
	}
	const onChangeToValue = (val: string) => {
		setToPrice(val);
	}
	return (
		<div className="currency-wrap">
			<Block value={fromPrice} currency={fromCurrency} onChangeValue={onChangeFromValue} onChangeCurrency={setFromCurrency} />
			<Block value={toPrice} currency={toCurrency} onChangeValue={onChangeToValue} onChangeCurrency={setToCurrency} />
		</div>
	)
}
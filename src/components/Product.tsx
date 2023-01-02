import { IProduct } from '../models';
import { useState } from 'react';

interface IProductProps {
	product: IProduct;
}

export function Product({ product }: IProductProps) {
	const [details, setDetails] = useState(false)
	const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
	const btnClasses = ['py-2 px-4 border', btnClassName]
	return (
		<div className="border py-2 px-4 rounded flex flex-col  items-center mb-2">
			<img src={product.image} className="w-1/6" alt=""/>
			<span>{product.title}</span>
			<span className="font-bold">{product.price}</span>
			<button onClick={() => setDetails(prev => !prev)} className={btnClasses.join(' ')}>
				{details ? 'Hide Details' : 'Show Details'}
			</button>
			{details && <div>
				<span>
					{product.description}
				</span>
				<br/>
				<span>
					Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span>
				</span>
			</div>}
		</div>
	)
}
import { IProduct } from '../models';

interface IProductProps {
	product: IProduct;
}

export function Product(props: IProductProps) {
	return (
		<div className="border py-2 px-4 rounded flex flex-col  items-center mb-2">
			{props.product.title }
		</div>
	)
}
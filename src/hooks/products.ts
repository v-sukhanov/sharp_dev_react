import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function fetchProducts() {
		setError('');
		try {
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
			setProducts(response.data);
		} catch (e) {
			const error = e as AxiosError;
			setError(error.message);
		}
		setLoading(false);
	}
	useEffect(() => {
		setLoading(true);
		fetchProducts();
	}, [])

	return {products, loading, error}
}
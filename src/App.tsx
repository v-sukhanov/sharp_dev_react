import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './components/Product';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';

function App() {
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

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <span className="text-center">Loading...</span>}
      {error && <span className="text-center text-red-600">{error}</span>}
        {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;

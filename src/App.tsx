import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Error } from './components/error';
import { Loader } from './components/loader';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
	const { products, loading, error } = useProducts()

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader/>}
			{error && <Error error={error}/>}
			{products.map(product => <Product product={product} key={product.id}/>)}
			<Modal>
				<CreateProduct></CreateProduct>
			</Modal>
		</div>
)
	;
}

export default App;

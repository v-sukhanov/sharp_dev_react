import { useProducts } from '../hooks/products';
import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';


export const ProductsPage = () => {
	const { products, loading, error } = useProducts()
	const {modal, open, close} = useContext(ModalContext);
	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader/>}
			{error && <Error error={error}/>}
			{products.map(product => <Product product={product} key={product.id}/>)}
			{modal && <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={close}></CreateProduct>
            </Modal>}
			<button onClick={() => open} className="absolute bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2">+</button>
		</div>
	)
		;
}
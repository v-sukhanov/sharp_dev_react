import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigations } from './components/Navigations';


function App() {
	return (
		<div>
			<Navigations></Navigations>
			<Routes>
				<Route path="/" element={ <ProductsPage/> }></Route>
				<Route path="/about" element={ <AboutPage/> }></Route>
			</Routes>
		</div>

	)
}

export default App;

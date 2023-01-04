import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigations } from './components/Navigations';
import { CounterPage } from './pages/counter/CounterPage';
import { Quiz } from './pages/quiz/Quiz';


function App() {
	return (
		<div>
			<Navigations></Navigations>
			<Routes>
				<Route path="/" element={ <ProductsPage/> }></Route>
				<Route path="/about" element={ <AboutPage/> }></Route>
				<Route path="/counter" element={ <CounterPage/> }></Route>
				<Route path="/quiz" element={ <Quiz/> }></Route>
			</Routes>
		</div>

	)
}

export default App;

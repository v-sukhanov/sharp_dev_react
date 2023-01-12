import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { Navigations } from './components/Navigations';
import { CounterPage } from './pages/counter/CounterPage';
import { Quiz } from './pages/quiz/Quiz';
import { Users } from './pages/users/Users';
import { CurrencyConvertorPage } from './pages/currency-convertor/CurrencyConvertorPage';
import { ReduxEx } from './pages/redux-ex';
import { DragnDrop } from './pages/dragn-drop';


function App() {
	return (
		<div>
			<Navigations></Navigations>
			<Routes>
				<Route path="/" element={ <ProductsPage/> }></Route>
				<Route path="/dragn-drop" element={ <DragnDrop/> }></Route>
				<Route path="/redux-ex" element={ <ReduxEx/> }></Route>
				<Route path="/about" element={ <AboutPage/> }></Route>
				<Route path="/counter" element={ <CounterPage/> }></Route>
				<Route path="/users" element={ <Users/> }></Route>
				<Route path="/currency-convertor" element={ <CurrencyConvertorPage/> }></Route>
				<Route path="/quiz" element={ <Quiz/> }></Route>
			</Routes>
		</div>

	)
}

export default App;

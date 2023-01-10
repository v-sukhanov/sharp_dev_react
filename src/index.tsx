import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalContext, ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';
import { store } from './pages/redux-ex/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ModalState>
				<App />
			</ModalState>
		</BrowserRouter>
	</Provider>


);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import CartPage from './pages/cartPage/cartPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Home/>
    <CartPage/>
);


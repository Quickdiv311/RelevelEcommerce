import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import CartPage from './pages/cartPage/cartPage';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/loginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>

     </Routes>
    </BrowserRouter>
    // <Home/>
    // <CartPage/>
    //    <Register/>
);


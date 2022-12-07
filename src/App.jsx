import CartPage from './pages/cartPage/cartPage';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/loginPage';
import Home from './pages/Home/Home';
import AppContext from './context';
import './App.css';
import { useState } from 'react';

function App(){

    const [cartItems, setCartItems] = useState([]);

    const dispatcherEvents = (actionType, payload) => {
        switch(actionType)
        {
            case 'ADD_ITEM': {
              let items = [...cartItems];
              items.push(payload);
              setCartItems(items);
              break;
            }
            case 'UPDATE_ITEM': {
              let items = [...cartItems];
              let index = items.indexOf(p => p.id==payload.id);
              items[index] = payload;
              setCartItems(items);
              break;
            }
            case 'DELETE_ITEM': {
              let items = [...cartItems];
              let index = items.indexOf(p => p.id==payload.id);
              items.splice(index,1);
              setCartItems(items);
              break;
            }
            default: {
              console.log("Invalid");
            }
        }
    }

    return(
        <AppContext.Provider value={{cartItems, dispatcherEvents}}>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/cart" element={<CartPage/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/login' element={<LoginPage/>}></Route>
   
        </Routes>
       </BrowserRouter>
       </AppContext.Provider>
    );
}

export default App;
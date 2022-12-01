import { useEffect, useState } from "react";
import CartItem from "../../components/CartPage/CartItem/cartItem";
import Header from "../../components/shared/header/header";
import './cartPage.css';

function CartPage()
{
   const [cartItems, setCartItem] = useState([]);
   const [total, setTotal] = useState(0);

   useEffect(() => {
     let cart = localStorage.getItem('cart');
     let cartItems = JSON.parse(cart);
     setCartItem(cartItems);
     updateTotalPrice(cartItems);
   },[]);


   function updatePrice(item,quantityUp)
   {
      let cartItemIndex = cartItems.findIndex(i => i.name === item.name);
      cartItems[cartItemIndex].quantity=quantityUp;
    localStorage.setItem('cart',JSON.stringify(cartItems));
      setCartItem(cartItems);
      updateTotalPrice(cartItems);
   }

   function removeItem(item)
   {
    let cartItemIndex = cartItems.findIndex(i => i.id === item.id);
    cartItems.splice(cartItemIndex,1);
    localStorage.setItem('cart',JSON.stringify(cartItems));
    setCartItem(cartItems.slice());
    updateTotalPrice(cartItems);
   }

   function updateTotalPrice(res)
   {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
      sum = sum + Number(res[i].price) * Number(res[i].quantity);
    }
    setTotal(sum);
   }


    return(
        <div>
        <Header/>
        <div>
            {
            cartItems.length == 0 ?
            <div className="mini-container">
              <h2>Your Cart Is Empty</h2>
              <br />
              <a href='/' className="btn btn-primary">Go Back to Home</a>
            </div>:
            cartItems.map((item,index) => (
                <CartItem updatePrice={updatePrice} removeItem={removeItem} key={item.id} item={item} index={index}/>
            ))
            }
        </div>
        <hr />
        <div>
          {
            cartItems.length == 0 ?
            <div></div>:
            <h3>Your Grand total is : {total}</h3>
          }
        </div>
        </div>
    );
}

export default CartPage;
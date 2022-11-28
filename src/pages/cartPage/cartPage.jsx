import { useEffect, useState } from "react";
import CartItem from "../../components/CartPage/CartItem/cartItem";
import Header from "../../components/shared/header/header";
import './cartPage.css';

function CartPage()
{
   const [cartItems, setCartItem] = useState([]);
   const [total, setTotal] = useState(0);

   useEffect(() => {
       fetch("product.json")
       .then(res => res.json())
       .then(res => 
        {
        updateTotalPrice(res);
        setCartItem(res);
   })
   })


   function updatePrice(item,quantityUp)
   {
      let cartItemIndex = cartItems.findIndex(i => i.name === item.name);
      cartItems[cartItemIndex].quantity=quantityUp;
      setCartItem(cartItems);
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
            cartItems.map((item,index) => (
                <CartItem updatePrice={updatePrice} key={item.id} item={item} index={index}/>
            ))
            }
        </div>
        <hr />
        <h3>Your Grand total is : {total}</h3>
        </div>
    );
}

export default CartPage;
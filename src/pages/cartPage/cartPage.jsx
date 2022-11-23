import { useEffect, useState } from "react";
import CartItem from "../../components/CartPage/CartItem/cartItem";
import Header from "../../components/shared/header/header";

function CartPage()
{
   const [cartItems, setCartItem] = useState([]);

   useEffect(() => {
       fetch("https://fakestoreapi.com/products?limit=8")
       .then(res => res.json())
       .then(res => setCartItem(res))
   })

    return(
        <div>
        <Header/>
        <div>
            {
            cartItems.map((item,index) => (
                <CartItem item={item} index={index}/>
            ))
            }
        </div>
        </div>
    );
}

export default CartPage;
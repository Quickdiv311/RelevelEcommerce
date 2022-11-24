import { useEffect, useState } from "react";
import CartItem from "../../components/CartPage/CartItem/cartItem";
import Header from "../../components/shared/header/header";

function CartPage()
{
   const [cartItems, setCartItem] = useState([]);

   useEffect(() => {
       fetch("product.json")
       .then(res => res.json())
       .then(res => setCartItem(res))
   })


    return(
        <div>
        <Header/>
        <div>
            {
            cartItems.map((item,index) => (
                <CartItem key={item.id} item={item} index={index}/>
            ))
            }
        </div>
        <hr />
        <h3>Your Grand total is : </h3>
        </div>
    );
}

export default CartPage;
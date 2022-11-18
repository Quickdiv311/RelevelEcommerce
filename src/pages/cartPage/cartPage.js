import { useEffect, useState } from "react";
import CartItem from "../../components/CartPage/Cart/cartItem";
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
            cartItems.map((item,index) => {
                <CartItem item={item} index={index}/>
            })
            }
        </div>
        </div>
    );
}

export default CartPage;
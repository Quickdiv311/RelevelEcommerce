import { useContext } from "react";
import CartItem from "../../components/CartPage/CartItem/cartItem";
import Header from "../../components/shared/header/header";
import AppContext from "../../context";
import './cartPage.css';

function CartPage()
{
   const {cartItems} = useContext(AppContext);

   let totalPrice = 0;
   totalPrice = cartItems.reduce((prev, cur) => {
      return prev + (cur.price*cur.quantity);
   },0);

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
                <CartItem key={item.id} item={item} index={index}/>
            ))
            }
        </div>
        <hr />
        <div>
          {
            cartItems.length == 0 ?
            <div></div>:
            <h3>Your Grand total is : {totalPrice}</h3>
          }
        </div>
        </div>
    );
}

export default CartPage;
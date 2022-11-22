import { useEffect, useState } from "react";
import './cartItem.css';

function CartItem(prop)
{ 

    let [quantity, setQuantity] = useState(1);

  return(
    <div className="cart-item">
       <div className="container-1">
       <div className="container">
            <img src={prop.item.image}></img>
       </div>
       <div className="container">
           <h4>{prop.item.name}</h4>
       </div>
       </div>

       <div className="container-2">
       <div className="container">
            <h4>&#8377; {prop.item.price}</h4>
       </div>

       <div className="quantity btn-group">
       <button className="btn btn-minus" onClick={() => setQuantity(quantity > 0 ? quantity-1 : quantity)}>-</button>
          <button className="btn btn-primary">{quantity}</button>
          <button className="btn btn-plus" onClick={() => setQuantity(quantity+1)}>+</button>
       </div>
       </div>
    </div>
  );
}

export default CartItem;
import { useEffect, useState } from "react";
import './cartItem.css';

function CartItem(object)
{ 

    let [quantity, setQuantity] = useState(1);

  return(
    <div className="cart-item">
       <img src={object.item.image}></img>
       <div className="cart-details">
          <h3>{object.item.name}</h3>
       </div>
       <div>&#8377; {object.item.price}</div>

       <div>{quantity} <button onClick={() => setQuantity(q => q+1)}>+</button></div>
    </div>
  );
}

export default CartItem;
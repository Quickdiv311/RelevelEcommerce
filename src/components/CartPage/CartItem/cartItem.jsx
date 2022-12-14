import { useContext } from "react";
import { useEffect, useState } from "react";
import AppContext from "../../../context";
import './cartItem.css';

function CartItem(prop)
{ 
    let [price, setPrice] = useState(prop.item.price);
    const {dispatcherEvents} = useContext(AppContext);

    useEffect(() => {
      let price = prop.item.price * prop.item.quantity;
      setPrice(price);        
    },[prop])

    function handleQuantityChange(value)
    {
          prop.item.quantity=value;
          dispatcherEvents("UPDATE_ITEM", prop.item);
    }

    function deleteItem()
    {
      dispatcherEvents("DELETE_ITEM", prop.item);

    }

  return(
    <div className="cart-item">
       <div className="container-1">
       <div className="cart-container">
            <img src={prop.item.image}></img>
       </div>
       <div className="cart-container">
           <h4>{prop.item.title}</h4>
       </div>
       </div>

       <div className="container-2">
       <div className="cart-container">
            <h4>&#8377; {price}</h4>
       </div>

       <div className="quantity btn-group">
        {
           prop.item.quantity >1 ? 
         <button className="btn btn-minus" onClick={() => handleQuantityChange(prop.item.quantity > 0 ? prop.item.quantity-1 : prop.item.quantity)}>-</button>
         :
         <button className="btn btn-danger" onClick={() => deleteItem()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 delete-btn" viewBox="0 0 16 16">
         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
       </svg></button>
        }
          <button className="btn btn-primary">{prop.item.quantity}</button>
          <button className="btn btn-plus" onClick={() => handleQuantityChange(prop.item.quantity+1)}>+</button>
       </div>
       </div>
    </div>
  );
}

export default CartItem;
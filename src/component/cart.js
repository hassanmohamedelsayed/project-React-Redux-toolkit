import React from "react";

import { useDispatch,useSelector } from "react-redux";
import {removeFromCart} from './cartSlice'


function Cart(){
const dispatch=useDispatch()
const cartItems=useSelector(state=>
state.cart.cartItems)
const handehremove=(product)=>{
dispatch(removeFromCart(product))
}
let content;
if(cartItems.length===0){
  content=<p>No item in cart</p>
}else{
  content=cartItems.map(item=>(
    <div key={item.id} className="card mb-3">
      <img src={item.image} className="card-img-top" alt={item.name} />

      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <p className="card-text">${item.price}</p>
<button className="btn btn-danger" onClick={()=>{
  handehremove(item)}}>Remove</button>
      </div>
    </div>
  ))
}
return (
  <div className="container">
    <h2>cart</h2>
    {content}
  </div>
)
}
export default Cart;
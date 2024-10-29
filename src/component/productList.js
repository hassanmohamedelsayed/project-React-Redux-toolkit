import React from "react";
import {addToCart} from './cartSlice'
import { useDispatch } from "react-redux";

const products=[{
  id:1,
  name:"product 1",
  price:10,
  image:"team-2.jpg"
},
{id:2,
  name:"product 2",
  price:20,
  image:"team-3.jpg"
}
]

function ProductList(){
  const dispatch=useDispatch();
   const handelAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  return(

    <div className="container">
      <div className="row">
        {products.map(product=>

        (
          <div className="col-md-4" key={product.id}>
<div className="card">
  <img src={product.image} alt={product.name} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">${product.price}</p>
    <button className="btn btn-primary" onClick={()=>handelAddToCart(product)}>add to cart</button>
  </div>
</div>
           </div>
        ))}


      </div>

    </div>
  )
}
export default ProductList;
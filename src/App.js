import React from 'react';
import './App.css';
import Productlist from './component/productList';
import Cart from './component/cart';
function App() {
  return(
    <div className="container">
      <h1>shopping</h1>
      <Productlist />
      <Cart/>
    </div>
  )
}

export default App;

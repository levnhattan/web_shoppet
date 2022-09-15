import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Checkout from '../Checkout';
import Home from '../home/Home'
import Product from '../product/Product'
import Store from '../Store';
class Routers extends Component {
  render() {
    return (
      <div>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/product" element={<Product/>} />
             <Route path="/store" element={<Store/>} />
             <Route path="/checkout" element={<Checkout/>} />

         </Routes>
      </div>
    );
  }
}

export default Routers;
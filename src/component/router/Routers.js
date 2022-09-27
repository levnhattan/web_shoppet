import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import Checkout from '../Checkout';
import Home from '../home/Home'
import Product from '../product/Product'
import Login from '../register/Login';
import Store from '../Store';
import Signup from '../register/Signup'
import Menu from '../admin/Menu';
class Routers extends Component {
  render() {
    return (
      <div>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/product" element={<Product/>} />
             <Route path="/store" element={<Store/>} />
             <Route path="/checkout" element={<Checkout/>} />
              <Route path="/signin" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/admin" element={<Menu/>}></Route>
         </Routes>
      </div>
    );
  }
}

export default Routers;
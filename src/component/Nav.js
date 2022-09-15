import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav id="navigation">
       <div className="container">
         <div id="responsive-nav">
           <ul className="main-nav nav navbar-nav">
             <li ><NavLink to="/">Trang chủ</NavLink></li>
             <li><NavLink to="/store">Cửa hàng</NavLink></li>
             <li><a href>Loại</a></li>
             <li><a href>Mèo</a></li>
             <li><a href>Chó</a></li>
             <li><a href>Tin tức</a></li>
             <li><a href>Liên hệ</a></li>
           </ul>
         </div>
       </div>
     </nav>
      </div>
    );
  }
}

export default Nav;
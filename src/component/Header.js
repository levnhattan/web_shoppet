import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
         <header>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li><a href><i className="fa fa-phone" /> +849 982 8721</a></li>
            <li><a href><i className="fa fa-envelope-o" /> tdeptraibodoithe@gmail.com</a></li>
            <li><a href><i className="fa fa-map-marker" /> 1734 Quang Trung</a></li>
          </ul>
          <ul className="header-links pull-right">
            <li><NavLink to="/signin"><i className="fa fa-user-o"  /> Tài Khoản</NavLink></li>
          </ul>
        </div>
      </div>
      {/* /TOP HEADER */}
      {/* MAIN HEADER */}
      <div id="header">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* LOGO */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href className="logo">
                  <img src="./img/logomeo.png" alt="" width="30%" height="50%" />
                </a>
              </div>
            </div>
            {/* /LOGO */}
            {/* SEARCH BAR */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value={0}>Loại </option>
                    <option value={1}>Loại 01</option>
                    <option value={1}>Loại 02</option>
                  </select>
                  <input className="input" placeholder="Tìm kiếm..." />
                  <button className="search-btn">Tìm kiếm</button>
                </form>
              </div>
            </div>
            {/* /SEARCH BAR */}
            {/* ACCOUNT */}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                {/* Wishlist */}
                <div>
                  <a href>
                    <i className="fa fa-heart-o" />
                    <span>Yêu Thích</span>
                    <div className="qty">1</div>
                  </a>
                </div>
                {/* /Wishlist */}
                {/* Cart */}
                <div className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-shopping-cart" />
                    <span>Giỏ Hàng</span>
                    <div className="qty">0</div>
                  </a>
                  <div className="cart-dropdown">
                    <div className="cart-list">
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/husky.jpg" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name"><a href>Sản Phẩm</a></h3>
                          <h4 className="product-price"><span className="qty">1x</span>1.000.000 VNĐ</h4>
                        </div>
                        <button className="delete"><i className="fa fa-close" /></button>
                      </div>
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name"><a href>Sản Phẩm</a></h3>
                          <h4 className="product-price"><span className="qty">2x</span>2.000.000 VNĐ</h4>
                        </div>
                        <button className="delete"><i className="fa fa-close" /></button>
                      </div>
                    </div>
                    <div className="cart-summary">
                      <small>3 Sản Phẩm </small>
                      <h5>Tổng: 3.000.000 VNĐ</h5>
                    </div>
                    <div className="cart-btns">
                      <NavLink to="/admin" >Xem Giỏ Hàng</NavLink>
                      <NavLink to="/checkout">Thanh Toán  <i className="fa fa-arrow-circle-right" /></NavLink>
                    </div>
                  </div>
                </div>
                {/* /Cart */}
                {/* Menu Toogle */}
                <div className="menu-toggle">
                  <a href>
                    <i className="fa fa-bars" />
                    <NavLink to="/" > <span>Trang Chủ</span></NavLink>
                  </a>
                </div>
                {/* /Menu Toogle */}
              </div>
            </div>
            {/* /ACCOUNT */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* /MAIN HEADER */}
    </header>
      </div>
    );
  }
}

export default Header;

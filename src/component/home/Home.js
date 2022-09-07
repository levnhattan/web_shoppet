import React from 'react'

export default function Home() {
  return (
    <div>
    {/* HEADER */}
    <header>
      {/* TOP HEADER */}
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li><a href><i className="fa fa-phone" /> +849 982 8721</a></li>
            <li><a href><i className="fa fa-envelope-o" /> tandeptraibodoithe@gmail.com</a></li>
            <li><a href><i className="fa fa-map-marker" /> 1734 Quang Trung</a></li>
          </ul>
          <ul className="header-links pull-right">
            <li><a href><i className="fa fa-user-o" /> Tài Khoản</a></li>
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
                    <option value={0}>Loại</option>
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
                      <a href>Xem Giỏ Hàng</a>
                      <a href>Thanh Toán  <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
                {/* /Cart */}
                {/* Menu Toogle */}
                <div className="menu-toggle">
                  <a href>
                    <i className="fa fa-bars" />
                    <span>Trang Chủ</span>
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
    {/* /HEADER */}
    {/* NAVIGATION */}
    <nav id="navigation">
      {/* container */}
      <div className="container">
        {/* responsive-nav */}
        <div id="responsive-nav">
          {/* NAV */}
          <ul className="main-nav nav navbar-nav">
            <li className="active"><a href>Trang chủ</a></li>
            <li><a href>Giảm giá</a></li>
            <li><a href>Loại</a></li>
            <li><a href>Mèo</a></li>
            <li><a href>Chó</a></li>
            <li><a href>Tin tức</a></li>
            <li><a href>Liên hệ</a></li>
          </ul>
          {/* /NAV */}
        </div>
        {/* /responsive-nav */}
      </div>
      {/* /container */}
    </nav>
    {/* /NAVIGATION */}
    {/* SECTION */}
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/husky.jpg" alt="" />
              </div>
              <div className="shop-body">
                <h3>Chó<br />Husky</h3>
                <a href className="cta-btn">Mua Ngay<i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
          </div>
          {/* /shop */}
          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/meo1.jpg" alt="" />
              </div>
              <div className="shop-body">
                <h3>Mèo Anh<br /> lông ngắn</h3>
                <a href className="cta-btn">Mua Ngay <i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
          </div>
          {/* /shop */}
          {/* shop */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src="./img/meo2.jpg" alt="" />
              </div>
              <div className="shop-body">
                <h3>Mèo MunchKin<br />Chân Ngắn</h3>
                <a href className="cta-btn">Mua Ngay <i className="fa fa-arrow-circle-right" /></a>
              </div>
            </div>
          </div>
          {/* /shop */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
    {/* /SECTION */}
    {/* SECTION */}
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* section title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Thú Cưng Mới</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active"><a data-toggle="tab" href="#tab1">Chó</a></li>
                  <li><a data-toggle="tab" href="#tab1">Mèo</a></li>
                  <li><a data-toggle="tab" href="#tab2">Thức Ăn</a></li>
                  <li><a data-toggle="tab" href="#tab1">Phụ Kiện</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /section title */}
          {/* Products tab & slick */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/* tab */}
                <div id="tab1" className="tab-pane active">
                  <div className="products-slick" data-nav="#slick-nav-1">
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-10%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-60%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-12" style={{height: '60px'}}>
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                    <div className="col-md-3">
                      {/* product */}
                      <div className="product">
                        <div className="product-img">
                          <img src="./img/meo1.jpg" alt="" />
                          <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">Mèo</p>
                          <h3 className="product-name"><a href="#">Mèo siêu đẹp</a></h3>
                          <h4 className="product-price">500.000 VNĐ<del className="product-old-price">650.000VNĐ</del></h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">Xem</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Chi tiết</span></button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                      </div>
                      {/* /product */}
                    </div>
                  </div>
                  <div id="slick-nav-1" className="products-slick-nav" />
                </div>
                {/* /tab */}
              </div>
            </div>
          </div>
          {/* Products tab & slick */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
    {/* /SECTION */}
    {/* HOT DEAL SECTION */}
    <div id="hot-deal" className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
              <ul className="hot-deal-countdown">
                <li>
                  <div>
                    <h3>02</h3>
                    <span>Ngày</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>10</h3>
                    <span>Giờ</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>34</h3>
                    <span>Phút</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>60</h3>
                    <span>Giây</span>
                  </div>
                </li>
              </ul>
              <h2 className="text-uppercase">Siêu Giảm Giá Trong Tuần</h2>
              <p>Giảm Tới 90%</p>
              <a className="primary-btn cta-btn" href="#">Mua Ngay</a>
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
    {/* /HOT DEAL SECTION */}
    {/* NEWSLETTER */}
    <div id="newsletter" className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter">
              <p>Phản Hồi Với  <strong>Chúng Tôi</strong></p>
              <form>
                <input className="input" type="email" placeholder="Email..." />
                <button className="newsletter-btn"><i className="fa fa-envelope" /> Gửi</button>
              </form>
              <ul className="newsletter-follow">
                <li>
                  <a href="#"><i className="fa fa-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-instagram" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
    {/* /NEWSLETTER */}
    {/* FOOTER */}
    <footer id="footer">
      {/* top footer */}
      <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Liên Hệ Với Chúng Tôi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                <ul className="footer-links">
                  <li><a href="#"><i className="fa fa-map-marker" />1734 Quang Trung</a></li>
                  <li><a href="#"><i className="fa fa-phone" />+849 982 8721</a></li>
                  <li><a href="#"><i className="fa fa-envelope-o" />tandeptraibodoithe@email.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Loại</h3>
                <ul className="footer-links">
                  <li><a href="#">Mèo Anh</a></li>
                  <li><a href="#">Chó</a></li>
                  <li><a href="#">Phụ Kiện</a></li>
                  <li><a href="#">Thức Ăn</a></li>
                  <li><a href="#">Kinh Nghiệm</a></li>
                </ul>
              </div>
            </div>
            <div className="clearfix visible-xs" />
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li><a href="#">Về Chúng Tôi</a></li>
                  <li><a href="#">Liên Hệ</a></li>
                  <li><a href="#">Chính Sách Bảo Mật</a></li>
                  <li><a href="#">Mua Hàng</a></li>
                  <li><a href="#">Điều Khoản</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Dịch Vụ</h3>
                <ul className="footer-links">
                  <li><a href="#">Tài Khoản</a></li>
                  <li><a href="#">Giỏ Hàng</a></li>
                  <li><a href="#">Yêu Thích</a></li>
                  <li><a href="#">Hỗ Trợ</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /top footer */}
      {/* bottom footer */}
      <div id="bottom-footer" className="section">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <li><a href="#"><i className="fa fa-cc-visa" /></a></li>
                <li><a href="#"><i className="fa fa-credit-card" /></a></li>
                <li><a href="#"><i className="fa fa-cc-paypal" /></a></li>
                <li><a href="#"><i className="fa fa-cc-mastercard" /></a></li>
                <li><a href="#"><i className="fa fa-cc-discover" /></a></li>
                <li><a href="#"><i className="fa fa-cc-amex" /></a></li>
              </ul>
              <span className="copyright">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © shoppet<i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://facebook.com/im.lvnt" target="_blank">tandeptraibodoithe</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </span>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bottom footer */}
    </footer>
    {/* /FOOTER */}
  </div>
  
  )
}

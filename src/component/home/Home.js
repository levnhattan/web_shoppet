import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <div className="section">
      <div className="container">
        <div className="row">
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
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Sản Phẩm Mới</h3>
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
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane active">
                  <div className="products-slick" data-nav="#slick-nav-1">
                    <div className="col-md-3">
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
                            <button className="quick-view"><NavLink to="/product"><i className="fa fa-eye" /></NavLink><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><NavLink to="/product"><i className="fa fa-eye" /></NavLink><span className="tooltipp">Xem</span></button>
                            
                            {/* <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button> */}
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
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
    <div id="newsletter" className="section">
      
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
    </div>
   
  </div>
  
  )
}

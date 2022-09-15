import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Product extends Component {
    render() {
        return (
                <div>
  {/* BREADCRUMB */}
  <div id="breadcrumb" className="section">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb-tree">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Chó</a></li>
            <li className="active">Husky</li>
          </ul>
        </div>
      </div>
      {/* /row */}
    </div>
    {/* /container */}
  </div>
  {/* /BREADCRUMB */}
  {/* SECTION */}
  <div className="section">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        {/* Product main img */}
        <div className="col-md-5 col-md-push-2">
          <div id="product-main-img">
            <div className="product-preview">
              <img src="./img/husky.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/meo1.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/meo2.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/husky.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* /Product main img */}
        {/* Product thumb imgs */}
        <div className="col-md-2  col-md-pull-5">
          <div id="product-imgs">
            <div className="product-preview">
              <img src="./img/meo1.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/meo2.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/husky.jpg" alt="" />
            </div>
            <div className="product-preview">
              <img src="./img/meo1.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* /Product thumb imgs */}
        {/* Product details */}
        <div className="col-md-5">
          <div className="product-details">
            <h2 className="product-name">Husky sieucapvippro000</h2>
            <div>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <a className="review-link" href="#">10 Review(s) | Add your review</a>
            </div>
            <div>
              <h3 className="product-price">1.000.000 VNĐ <del className="product-old-price">1.200.000 VNĐ</del></h3>
              <span className="product-available">HOT</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            {/* <div class="product-options">
								<label>
									Size
									<select class="input-select">
										<option value="0">X</option>
										<option value="1">X</option>
									</select>
								</label>
								<label>
									Color
									<select class="input-select">
										<option value="0">Red</option>
									</select>
								</label>
							</div> */}
            <div className="add-to-cart">
              <div className="qty-label">
                Số Lượng
                <div className="input-number">
                  <input type="number" defaultValue={0} />
                  <span className="qty-up">+</span>
                  <span className="qty-down">-</span>
                </div>
              </div>
              <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm Vào Giỏ Hàng</button>
            </div>
            <ul className="product-btns">
              <li><a href="#"><i className="fa fa-heart-o" /> Yêu Thích</a></li>
              {/* <li><a href="#"><i class="fa fa-exchange"></i> add to compare</a></li> */}
            </ul>
            <br />
            <ul className="product-links">
              <li>Loại:</li>
              <li><a href="#">Chó</a></li>
              <li><a href="#">Thú Cưng</a></li>
            </ul>
            <br />
            <ul className="product-links">
              <li>Share:</li>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-envelope" /></a></li>
            </ul>
          </div>
        </div>
        {/* /Product details */}
        {/* Product tab */}
        <div className="col-md-12">
          <div id="product-tab">
            {/* product tab nav */}
            <ul className="tab-nav">
              <li className="active"><a data-toggle="tab" href="#tab1">Mô tả</a></li>
              <li><a data-toggle="tab" href="#tab2">Chi tiết</a></li>
              <li><a data-toggle="tab" href="#tab3">Đánh giá</a></li>
            </ul>
            {/* /product tab nav */}
            {/* product tab content */}
            <div className="tab-content">
              {/* tab1  */}
              <div id="tab1" className="tab-pane fade in active">
                <div className="row">
                  <div className="col-md-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
              {/* /tab1  */}
              {/* tab2  */}
              <div id="tab2" className="tab-pane fade in">
                <div className="row">
                  <div className="col-md-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
              {/* /tab2  */}
              {/* tab3  */}
              <div id="tab3" className="tab-pane fade in">
                <div className="row">
                  {/* Rating */}
                  <div className="col-md-3">
                    <div id="rating">
                      <div className="rating-avg">
                        <span>4.5</span>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <ul className="rating">
                        <li>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-progress">
                            <div style={{width: '80%'}} />
                          </div>
                          <span className="sum">3</span>
                        </li>
                        <li>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                          <div className="rating-progress">
                            <div style={{width: '60%'}} />
                          </div>
                          <span className="sum">2</span>
                        </li>
                        <li>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <div className="rating-progress">
                            <div />
                          </div>
                          <span className="sum">0</span>
                        </li>
                        <li>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <div className="rating-progress">
                            <div />
                          </div>
                          <span className="sum">0</span>
                        </li>
                        <li>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <div className="rating-progress">
                            <div />
                          </div>
                          <span className="sum">0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Rating */}
                  {/* Reviews */}
                  <div className="col-md-6">
                    <div id="reviews">
                      <ul className="reviews">
                        <li>
                          <div className="review-heading">
                            <h5 className="name">Thắng</h5>
                            {/* <p class="date"></p> */}
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                          </div>
                        </li>
                        <li>
                          <div className="review-heading">
                            <h5 className="name">Việt</h5>
                            {/* <p class="date">27 DEC 2018, 8:0 PM</p> */}
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                          </div>
                        </li>
                        <li>
                          <div className="review-heading">
                            <h5 className="name">Tân</h5>
                            {/* <p class="date">27 DEC 2018, 8:0 PM</p> */}
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                          </div>
                        </li>
                      </ul>
                      <ul className="reviews-pagination">
                        <li className="active">1</li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  {/* /Reviews */}
                  {/* Review Form */}
                  <div className="col-md-3">
                    <div id="review-form">
                      <form className="review-form">
                        <input className="input" type="text" placeholder="Tên..." />
                        <input className="input" type="email" placeholder="Email..." />
                        <textarea className="input" placeholder="Đánh Giá Của Bạn..." defaultValue={""} />
                        <div className="input-rating">
                          <span>Đánh giá:</span>
                          <div className="stars">
                            <input id="star5" name="rating" defaultValue={5} type="radio" /><label htmlFor="star5" />
                            <input id="star4" name="rating" defaultValue={4} type="radio" /><label htmlFor="star4" />
                            <input id="star3" name="rating" defaultValue={3} type="radio" /><label htmlFor="star3" />
                            <input id="star2" name="rating" defaultValue={2} type="radio" /><label htmlFor="star2" />
                            <input id="star1" name="rating" defaultValue={1} type="radio" /><label htmlFor="star1" />
                          </div>
                        </div>
                        <button className="primary-btn">Gửi</button>
                      </form>
                    </div>
                  </div>
                  {/* /Review Form */}
                </div>
              </div>
              {/* /tab3  */}
            </div>
            {/* /product tab content  */}
          </div>
        </div>
        {/* /product tab */}
      </div>
      {/* /row */}
    </div>
    {/* /container */}
  </div>
  {/* /SECTION */}
  {/* Section */}
  <div className="section">
    {/* container */}
    <div className="container">
      {/* row */}
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h3 className="title">Sản phẩm liên quan</h3>
          </div>
        </div>
        {/* product */}
        <div className="col-md-3 col-xs-6">
          <div className="product">
            <div className="product-img">
              <img src="./img/meo1.jpg" alt="" />
              <div className="product-label">
                <span className="sale">-30%</span>
              </div>
            </div>
            <div className="product-body">
              <p className="product-category">Chó</p>
              <h3 className="product-name"><a href="#">Husky</a></h3>
              <h4 className="product-price">1.000.000 VNĐ <del className="product-old-price">2.000.000 VNĐ</del></h4>
              <div className="product-rating">
              </div>
              <div className="product-btns">
                <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                {/* <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button> */}
                <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
              </div>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" />Thêm vào</button>
            </div>
          </div>
        </div>
        {/* /product */}
        {/* product */}
        <div className="col-md-3 col-xs-6">
          <div className="product">
            <div className="product-img">
              <img src="./img/meo2.jpg" alt="" />
              <div className="product-label">
                <span className="new">NEW</span>
              </div>
            </div>
            <div className="product-body">
              <p className="product-category">Mèo</p>
              <h3 className="product-name"><a href="#">Mèo Anh</a></h3>
              <h4 className="product-price">1.000.000 VNĐ <del className="product-old-price">2.000.000 VNĐ</del></h4>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-btns">
                <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                {/* <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button> */}
                <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
              </div>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> thêm vào</button>
            </div>
          </div>
        </div>
        {/* /product */}
        <div className="clearfix visible-sm visible-xs" />
        {/* product */}
        <div className="col-md-3 col-xs-6">
          <div className="product">
            <div className="product-img">
              <img src="./img/meo1.jpg" alt="" />
            </div>
            <div className="product-body">
              <p className="product-category">Mèo</p>
              <h3 className="product-name"><a href="#">Mèo...</a></h3>
              <h4 className="product-price">1.000.000 VNĐ<del className="product-old-price">2.000.000 VNĐ</del></h4>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <div className="product-btns">
                <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                {/* <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button> */}
                <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
              </div>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào</button>
            </div>
          </div>
        </div>
        {/* /product */}
        {/* product */}
        <div className="col-md-3 col-xs-6">
          <div className="product">
            <div className="product-img">
              <img src="./img/husky.jpg" alt="" />
            </div>
            <div className="product-body">
              <p className="product-category">Chó</p>
              <h3 className="product-name"><a href="#">Husky</a></h3>
              <h4 className="product-price">1.000.000 VNĐ <del className="product-old-price">1.400.000 VNĐ</del></h4>
              <div className="product-rating">
              </div>
              <div className="product-btns">
                <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">Yêu Thích</span></button>
                {/* <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button> */}
                <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">Xem</span></button>
              </div>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào</button>
            </div>
          </div>
        </div>
        {/* /product */}
      </div>
      {/* /row */}
    </div>
    {/* /container */}
  </div>
  {/* /Section */}
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
                </div>
        );
    }
}

export default Product;
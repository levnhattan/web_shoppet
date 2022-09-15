import React, { Component } from 'react';

class Store extends Component {
    render() {
        return (
            <div>
  <div id="breadcrumb" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="breadcrumb-tree">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Thú cưng</a></li>
            <li className="active">Mèo</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div id="aside" className="col-md-3">
          <div className="aside">
            <h3 className="aside-title">Sản phẩm</h3>
            <div className="checkbox-filter">
              <div className="input-checkbox">
                <input type="checkbox" id="category-1" />
                <label htmlFor="category-1">
                  <span />
                  Chó
                  <small>(120)</small>
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="category-2" />
                <label htmlFor="category-2">
                  <span />
                  Mèo
                  <small>(40)</small>
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="category-3" />
                <label htmlFor="category-3">
                  <span />
                  Thức ăn
                  <small>(150)</small>
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="category-4" />
                <label htmlFor="category-4">
                  <span />
                  Phụ kiện
                  <small>(58)</small>
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="category-5" />
                <label htmlFor="category-5">
                  <span />
                  Mèo
                  <small>(20)</small>
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="category-6" />
                <label htmlFor="category-6">
                  <span />
                  Khác
                  <small>(70)</small>
                </label>
              </div>
            </div>
          </div>
          <div className="aside">
            <h3 className="aside-title">Đơn giá</h3>
            <div className="checkbox-filter">
              <div className="input-checkbox">
                <input type="checkbox" id="brand-1" />
                <label htmlFor="brand-1">
                  <span />
                  100-200
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="brand-2" />
                <label htmlFor="brand-2">
                  <span />
                  200-300
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="brand-3" />
                <label htmlFor="brand-3">
                  <span />
                  300-400
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="brand-4" />
                <label htmlFor="brand-4">
                  <span />
                  400-500
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="brand-5" />
                <label htmlFor="brand-5">
                  <span />
                  500-600
                </label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox" id="brand-6" />
                <label htmlFor="brand-6">
                  <span />
                  600
                </label>
              </div>
            </div>
          </div>
          <div className="aside">
            <h3 className="aside-title">Bán chạy</h3>
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/husky.jpg" alt="" />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/meo1.jpg" alt="" />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
            <div className="product-widget">
              <div className="product-img">
                <img src="./img/meo2.jpg" alt="" />
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
              </div>
            </div>
          </div>
        </div>
        <div id="store" className="col-md-9">
          <div className="store-filter clearfix">
            <div className="store-sort">
              <label>
                Sort By:
                <select className="input-select">
                  <option value={0}>Popular</option>
                  <option value={1}>Position</option>
                </select>
              </label>
              <label>
                Show:
                <select className="input-select">
                  <option value={0}>20</option>
                  <option value={1}>50</option>
                </select>
              </label>
            </div>
            <ul className="store-grid">
              <li className="active"><i className="fa fa-th" /></li>
              <li><a href="#"><i className="fa fa-th-list" /></a></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/husky.jpg" alt="" />
                  <div className="product-label">
                    <span className="sale">-30%</span>
                    <span className="new">NEW</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo2.jpg" alt="" />
                  <div className="product-label">
                    <span className="new">NEW</span>
                  </div>
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm visible-xs" />
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/husky.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="clearfix visible-lg visible-md" />
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo2.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm visible-xs" />
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo1.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo1.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="clearfix visible-lg visible-md visible-sm visible-xs" />
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo2.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/husky.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
            <div className="clearfix visible-sm visible-xs" />
            <div className="col-md-4 col-xs-6">
              <div className="product">
                <div className="product-img">
                  <img src="./img/meo1.jpg" alt="" />
                </div>
                <div className="product-body">
                  <p className="product-category">Category</p>
                  <h3 className="product-name"><a href="#">product name goes here</a></h3>
                  <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                  <div className="product-rating">
                  </div>
                  <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="store-filter clearfix">
            {/* <span class="store-qty">20-100 sản phẩm</span> */}
            <ul className="store-pagination">
              <li className="active">1</li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="newsletter" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="newsletter">
            <p>Sign Up for the <strong>NEWSLETTER</strong></p>
            <form>
              <input className="input" type="email" placeholder="Enter Your Email" />
              <button className="newsletter-btn"><i className="fa fa-envelope" /> Subscribe</button>
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
    </div>
  </div>

            </div>
        );
    }
}

export default Store;
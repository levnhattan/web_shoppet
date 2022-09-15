import React, { Component } from 'react';

class Checkout extends Component {
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
          {/* <h3 class="breadcrumb-header">Checkout</h3> */}
          <ul className="breadcrumb-tree">
            <li><a href="#">Trang chủ</a></li>
            <li className="active">Thanh Toán</li>
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
        <div className="col-md-7">
          {/* Billing Details */}
          <div className="billing-details">
            <div className="section-title">
              <h3 className="title">Thông tin cá nhân</h3>
            </div>
            {/* <div class="form-group">
								<input class="input" type="text" name="first-name" placeholder="First Name">
							</div> */}
            <div className="form-group">
              <input className="input" type="text" name="last-name" placeholder="Họ tên" />
            </div>
            <div className="form-group">
              <input className="input" type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input className="input" type="text" name="address" placeholder="Địa chỉ" />
            </div>
            <div className="form-group">
              <input className="input" type="text" name="city" placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <input className="input" type="text" name="country" placeholder="Giới tính" />
            </div>
            {/* <div class="form-group">
								<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
							</div> */}
            {/* <div class="form-group">
								<input class="input" type="tel" name="tel" placeholder="Telephone">
							</div> */}
            <div className="form-group">
              <div className="input-checkbox">
                <input type="checkbox" id="create-account" />
                {/* <label for="create-account">
										<span></span>
										Tạo tài khoản?
									</label> */}
                <div className="caption">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                </div>
              </div>
            </div>
          </div>
          {/* /Billing Details */}
          {/* Shiping Details */}
          {/* <div class="shiping-details">
							<div class="section-title">
								<h3 class="title">Shiping address</h3>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="shiping-address">
								<label for="shiping-address">
									<span></span>
									Ship to a diffrent address?
								</label>
								<div class="caption">
									<div class="form-group">
										<input class="input" type="text" name="first-name" placeholder="First Name">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="last-name" placeholder="Last Name">
									</div>
									<div class="form-group">
										<input class="input" type="email" name="email" placeholder="Email">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="address" placeholder="Address">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="city" placeholder="City">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="country" placeholder="Country">
									</div>
									<div class="form-group">
										<input class="input" type="text" name="zip-code" placeholder="ZIP Code">
									</div>
									<div class="form-group">
										<input class="input" type="tel" name="tel" placeholder="Telephone">
									</div>
								</div>
							</div>
						</div> */}
          {/* /Shiping Details */}
          {/* Order notes */}
          {/* <div class="order-notes">
							<textarea class="input" placeholder="Order Notes"></textarea>
						</div> */}
          {/* /Order notes */}
        </div>
        {/* Order Details */}
        <div className="col-md-5 order-details">
          <div className="section-title text-center">
            <h3 className="title">Thanh toán</h3>
          </div>
          <div className="order-summary">
            <div className="order-col">
              <div><strong>Sản phẩm</strong></div>
              <div><strong>Đơn giá</strong></div>
            </div>
            <div className="order-products">
              <div className="order-col">
                <div>Phụ kiên ABC x1</div>
                <div>200.000 VNĐ</div>
              </div>
              <div className="order-col">
                <div>Phụ kiên ABC x2</div>
                <div>230.000 VNĐ</div>
              </div>
            </div>
            <div className="order-col">
              <div>Phí ship</div>
              <div><strong>FREE</strong></div>
            </div>
            <div className="order-col">
              <div><strong>Tổng: </strong></div>
              <div><strong className="order-total">200.000 VNĐ</strong></div>
            </div>
          </div>
          <div className="payment-method">
            <div className="input-radio">
              <input type="radio" name="payment" id="payment-1" />
              <label htmlFor="payment-1">
                <span />
                Internet Banking
              </label>
              <div className="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="input-radio">
              <input type="radio" name="payment" id="payment-2" />
              <label htmlFor="payment-2">
                <span />
                Ví MoMo
              </label>
              <div className="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="input-radio">
              <input type="radio" name="payment" id="payment-3" />
              <label htmlFor="payment-3">
                <span />
                Thanh toán trực tiếp
              </label>
              <div className="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="input-checkbox">
            <input type="checkbox" id="terms" />
            {/* <label for="terms">
								<span></span>
								I've read and accept the <a href="#">terms & conditions</a>
							</label> */}
          </div>
          <a href="#" className="primary-btn order-submit">Đặt hàng</a>
        </div>
        {/* /Order Details */}
      </div>
      {/* /row */}
    </div>
    {/* /container */}
  </div>
  {/* /SECTION */}
  
            </div>
        );
    }
}

export default Checkout;
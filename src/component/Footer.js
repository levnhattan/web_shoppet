import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Footer;
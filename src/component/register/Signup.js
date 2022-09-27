import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class signup extends Component {
    render() {
        return (
            <div>
                <form className="form-signup">
                    <h2>Đăng kí</h2>
                    <input type="text" placeholder="Tên đăng nhập"></input> <br/>
                    <input type="password" placeholder="Mật khẩu"></input><br/>
                    <input type="password" placeholder=" Nhập lại mật khẩu"></input><br/>
                    <input type="text" placeholder="Họ tên"></input><br/>
                    <input type="text" placeholder="Địa chỉ"></input><br/>
                    <input type="text" placeholder="Số điện thoại"></input><br/>
                    <input type="Email" placeholder="Email"></input><br/>
                    <button type="submit" >Đăng kí</button>
                    <h4 >Bạn đã có tài khoản?<NavLink to="/signin"> Đăng nhập</NavLink></h4>
                </form>
            </div>
        );
    }
}

export default signup;
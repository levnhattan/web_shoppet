import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <div>
                <form className="form-login">
                    <h2>Đăng nhập</h2>
                    <input type="text" placeholder='Tên đăng nhập' ></input> <br></br>
                    <input type="password" placeholder='Mật khẩu' ></input>
                    <br></br>
                    <button type="submit">Đăng nhập</button>
                    <h4>Bạn chưa có tài khoản? <NavLink to="/signup">Đăng kí</NavLink></h4>
                </form>
            </div>
        );
    }
}

export default Login;
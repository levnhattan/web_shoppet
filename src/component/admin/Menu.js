import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row"> 
                <div className="col-md-3 admin-left">
                    <header className="topbar" data-navbarbg="skin5">
                        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                            <div className="navbar-header" data-logobg="skin5">
                                <a className="navbar-brand" href="/">
                                    <span className="logo-text ms-2">
                                        <h3> <i class="fa-solid fa-house"></i>Administrator</h3>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </header>
                    <aside className="left-sidebar" data-sidebarbg="skin5">
                        <div className="scroll-sidebar">
                            <nav className="sidebar-nav">
                                <ul id="sidebarnav" className="pt-4">
                                    <li className="sidebar-item">
                                        <a className="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="fa-sharp fa-solid fa-table"></i><span className="hide-menu">Quản lý danh mục</span></a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="fa-sharp fa-solid fa-table"></i><span className="hide-menu">Quản lý tài khoản</span></a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="fa-sharp fa-solid fa-table"></i><span className="hide-menu">Quản lý sản phẩm</span></a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="fa-sharp fa-solid fa-table"></i><span className="hide-menu">Quản lý khuyễn mãi </span></a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link waves-effect waves-dark sidebar-link" href aria-expanded="false"><i class="fa-solid fa-chart-simple"></i><span className="hide-menu">Thống kê</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </div>
                <div className="col-md-9">
                    <div id="main-wrapper" >
                        <div className="page-wrapper">
                            <div className="page-breadcrumb">
                                <div className="row">
                                    <div className="col-12 ">
                                            <nav aria-label="breadcrumb">
                                                <ul className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                                                    <li className="breadcrumb-item active" >
                                                        Quản lý
                                                    </li>
                                                </ul>
                                            </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                            <div className="card admin-right">
                                                <h4 className="card-title">Danh sách
                                                <input type="text" placeholder="Tìm kiếm"></input>
                                                <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                                <button className="btn btn-primary btn-add"><i class="fa-duotone fa-plus"></i>Thêm mới</button>
                                                </h4>
                                                <div className="card-body text-center">
                                                    <div className="table-responsive">
                                                        <table id="zero_config" className="table table-striped table-bordered text-center">
                                                            <thead>
                                                                <tr >
                                                                    <th>ID</th>
                                                                    <th>Tên danh mục</th>
                                                                    <th>Số lượng</th>
                                                                    <th>Ngày nhập</th>
                                                                    <th>Ngày nhập</th>
                                                                    <th>Tác vụ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Phụ kiện</td>
                                                                    <td>12</td>
                                                                    <td>22/09/2020</td>
                                                                    <td>22/09/2020</td>
                                                                    <td>
                                                                    <div className="btn-group">
                                                                            <div  className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                                                                            <div className="btn btn-danger xoa"><i className="fa-solid fa-xmark" /> - Xóa</div>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Phụ kiện</td>
                                                                    <td>12</td>
                                                                    <td>22/09/2020</td>
                                                                    <td>22/09/2020</td>
                                                                    <td>
                                                                    <div className="btn-group">
                                                                            <div  className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                                                                            <div className="btn btn-danger xoa"><i className="fa-solid fa-xmark" /> - Xóa</div>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Menu;
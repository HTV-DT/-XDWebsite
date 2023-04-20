import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-category">Tổng quan</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#tables1"
                        aria-expanded="false"
                        aria-controls="tables1"
                    >
                        <i className="mdi mdi-grid-large menu-icon" />
                        <span className="menu-title">Tổng quan</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables1">
                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachnhanvien">
                                    Danh sách Nhân viên
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachtaikhoan">
                                    Danh sách Tài khoản
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item nav-category">Nhân viên</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#tables"
                        aria-expanded="false"
                        aria-controls="tables"
                    >
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Danh sách</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                                <Link className="nav-link" to="/phongban">
                                    Phòng ban
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chucvu">
                                    Chức vụ
                                </Link>
                            </li>

                            
                        </ul>
                    </div>
                </li>

             
             
            </ul>
        </nav>
    );
}

export default Sidebar;
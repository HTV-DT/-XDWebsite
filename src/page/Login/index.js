import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { loginUser } from '~/redux/apiRequest';

const cln = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // khi nhấn btn thì sẽ kh load lại trang
        const newUser = {
            username: username,
            password: password,
        };
        
        loginUser(newUser, dispatch, navigate);
        setLoginStatus('Login failed. Please check your credentials.');
    };

    return (
        <div id={cln('container')}>
            <h2 className={cln('header-title')}>Đăng nhập</h2>
            <form action="" onSubmit={handleLogin}>
                <div className={cln('row')}>
                    <label htmlFor="email">Tài khoản</label>
                    <input
                        type="text"
                        name="email"
                        id={cln('email')}
                        placeholder="Nhập tài khoản hay email..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={cln('row')}>
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        id={cln('password')}
                        placeholder="Nhập mật khẩu..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {loginStatus && <p className={cln('login-status')}>{loginStatus}</p>}
                <div id={cln('btn-form')} className={cln('row')}>
                    <button type="submit">Đăng nhập</button>
                </div>

            </form>
        </div>
    );
}

export default Login;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Table from '~/components/layouts/Table';
import DialogAddUser from '~/components/layouts/DialogTableEmployee/DialogAddUser';




function DanhSachTaiKhoan() {
    const [modalShow, setModalShow] = useState(false);


    const [post, setPost] = useState([]);


    const listTitles = {
        id: 'Mã tài khoản',
        name: 'Tên chủ tài khoản',
        username: 'Tên đăng nhập',
        password: 'Mật khẩu',
        email: 'Email',
        img: 'Hình ảnh',
        roles: 'Phân quyền'
    };

    const userbaseURL = 'https://qlks.herokuapp.com/api/auth/users';


    useEffect(() => {
        axios.get(userbaseURL).then((response) => {
            setPost(response.data);
        });
    }, []);




    if (!post) return null;
    let listdata = [];
    post.map((value) => {
        const data = {
            img: 'hello',
            id: value.id,
            name: value.name,
            username: value.username,
            password: '*********',
            email: value.email,
            roles: value.roles[0].name, 
        };
        listdata = [...listdata, data];
    });

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="mb-2">
                    <Button variant="outline-primary" className="ms-auto float-end" onClick={() => setModalShow(true)}>
                        Thêm tài khoản
                    </Button>
                    <DialogAddUser show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <Table title="Danh Sách tài khoản" listTitles={listTitles} listdata={listdata} />
            </div>
        </section>
    );
}

export default DanhSachTaiKhoan;

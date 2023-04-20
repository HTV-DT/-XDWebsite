import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';


function DialogAddUser(props) {
    const { onHide } = props;

    const [manv, setManv] = useState('NV1');
    const [tennv, setTennv] = useState('');
    const [sdt, setSDT] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [cccd, setCccd] = useState('');
    const [ngayky, setNgayKy] = useState('');
    const [qt, setQt] = useState('');
    const [dt, setDt] = useState('');
    const [stk, setStk] = useState('');
    const [img, setImg] = useState('');
    const [base64Data, setBase64Data] = useState('');
    const [gt, setgt] = useState('');


    const handleAddnv = async (e) => {
        console.log(base64Data);


        e.preventDefault();
        const nhanvien = {
            tenNhanSu: tennv,
            cccd: cccd,
            email: email,
            ngaySinh: birth,
            hinhAnh: base64Data,
            danToc: dt,
            quocTich: qt,
            ngayKyHopDong: ngayky,
            soTK: stk,
            sdt: sdt,
            gt: gt
        };
        await axios.post('https://qlks.herokuapp.com/api/auth/addNhanVien', nhanvien)
            .then((res) => {
                console.log(res);
                onHide();
            })
            .catch((err) => console.log(err))
    }

    const handleImage = (e) => {
        let file = e.target.files[0];
        getbase64(file);
    }

    const onLoad = (fileString) => {
        setBase64Data(fileString);
    }

    const getbase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            onLoad(reader.result);
        }
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Form action="" onSubmit={handleAddnv}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Thêm thông tin nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <p className='h6'>Những ô nhập có dấu <span className='text-danger h5'>*</span> là bắt buộc phải nhập</p>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputManv">
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control
                                type="text"
                                value={manv}
                                placeholder="Mã nhân viên"
                                autoFocus
                                onChange={(e) => setManv(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputTenNV">
                            <Form.Label>Tên nhân viên  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={tennv}
                                placeholder="Tên nhân viên"
                                autoFocus
                                onChange={(e) => setTennv(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputSDT">
                            <Form.Label>Số điện thoại  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={sdt}
                                placeholder="Số điện thoại"
                                autoFocus
                                onChange={(e) => setSDT(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-8" controlId="ControlInputCccd">
                            <Form.Label>Số giấy tờ tùy thân  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={cccd}
                                placeholder="Nhập số giấy tờ tùy thân"
                                autoFocus
                                onChange={(e) => setCccd(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-8" controlId="ControlInputCccd">
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                value="male"
                                id="gender-male"
                                onChange={(e) => setgt(0)}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                value="female"
                                id="gender-female"
                                onChange={(e) => setgt(1)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-5" controlId="ControlInputImg">
                            <Form.Label>Hình ảnh  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Hình ảnh"
                                autoFocus
                                onChange={handleImage}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputQt">
                            <Form.Label>Quốc tịch <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={qt}
                                placeholder="Quốc tịch"
                                autoFocus
                                onChange={(e) => setQt(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputDT">
                            <Form.Label>Dân tộc</Form.Label>
                            <Form.Control
                                type="text"
                                value={dt}
                                placeholder="Dân tộc"
                                autoFocus
                                onChange={(e) => setDt(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputEmail">
                            <Form.Label>Tài khoản Email  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputBirth">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                value={birth}
                                placeholder="Ngày sinh"
                                autoFocus
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>

                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputEmail">
                            <Form.Label>Số tài khoản  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="number"
                                value={stk}
                                placeholder="Số tài khoản"
                                autoFocus
                                onChange={(e) => setStk(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-5" controlId="ControlInputBirth">
                            <Form.Label>Ngày ký hợp đồng</Form.Label>
                            <Form.Control
                                type="date"
                                value={ngayky}
                                placeholder="Ngày ký hợp đồng"
                                autoFocus
                                onChange={(e) => setNgayKy(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        Đóng
                    </Button>
                    <Button type="submit" variant="primary">
                        Thêm nhân viên
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default DialogAddUser;
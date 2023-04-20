import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, InputGroup, Figure } from 'react-bootstrap';


function DialogUpdateNV({ onHide, idUpdate, ...props }) {

    const [tennv, setTennv] = useState(idUpdate.name);
    const [sdt, setSDT] = useState(idUpdate.sdt);
    const [email, setEmail] = useState(idUpdate.email);
    const [birth, setBirth] = useState(idUpdate.ngaysinh);
    const [cccd, setCccd] = useState(idUpdate.cccd);
    const [ngayky, setNgayKy] = useState(idUpdate.ngaykyhopdong);
    const [qt, setQt] = useState('');
    const [dt, setDt] = useState('');
    const [stk, setStk] = useState(idUpdate.tk);
    const [base64Data, setBase64Data] = useState(idUpdate.img);
    const [pb, setPb] = useState(idUpdate.phongban);
    const [cv, setCV] = useState(idUpdate.chucvu);

    const [smShow, setSmShow] = useState(false);

    const [pbPost, setPbPost] = useState([]);
    const [cvPost, setCVPost] = useState([]);


    const pbbaseURL = 'http://localhost:8080/PBs';
    const cvbaseURL = 'http://localhost:8080/CVs';


    useEffect(() => {
        axios.get(pbbaseURL)
            .then((response) => {
                setPbPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(cvbaseURL)
            .then((response) => {
                setCVPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (!pbPost || !cvPost) return null;



    const handleUpdateNV = async (e) => {
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
            phongban_id: pb,
            chucvu_id: cv
        };
        await axios.put('http://localhost:8080/api/auth/updateNhanVien/' + idUpdate.id, nhanvien)
            .then((res) => {
                console.log(res);
                onHide();
            })
            .catch((err) => console.log(err))
    }

    const handleShowQRCode = () => {
        setSmShow(true);
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
            <Form action="" onSubmit={handleUpdateNV}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Thông tin nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Figure className='text-center col-sm-12'>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt={'hình ảnh: ' + idUpdate.name}
                            src={idUpdate.img}
                        />
                        <Figure.Caption>
                        </Figure.Caption>
                    </Figure>
                    <p className='h6'>Những ô nhập có dấu <span className='text-danger h5'>*</span> là bắt buộc phải nhập</p>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputManv">
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control
                                type="text"
                                value={idUpdate.id}
                                placeholder="Mã nhân viên"
                                autoFocus
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
                    <InputGroup className='row'>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                            <Form.Label>Phòng ban  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setPb(e.target.value)} value={pb}>
                                {pbPost.map((p) => {
                                    return (
                                        <option key={p.maPB} value={p.maPB}>{p.tenPB}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                            <Form.Label>Chức vụ  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setCV(e.target.value)} value={cv}>
                                {cvPost.map((p) => {
                                    return (
                                        <option key={p.maCV} value={p.maCV}>{p.tenCV}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                    </InputGroup>
                    <Button variant="primary" className='col-sm-3' onClick={handleShowQRCode}>
                        Xem mã QR
                    </Button>
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <Figure className='text-center col-sm-12'>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    alt={'Mã QR code: ' + idUpdate.name}
                                    src={"data:image/jpeg;base64," + idUpdate.qrcode}
                                />
                                <Figure.Caption>
                                </Figure.Caption>
                            </Figure>
                        </Modal.Body>
                    </Modal>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        Đóng
                    </Button>
                    <Button type="submit" variant="primary">
                        Cập nhật nhân viên
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default DialogUpdateNV;
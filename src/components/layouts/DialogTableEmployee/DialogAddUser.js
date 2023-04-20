import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { registerUser } from '~/redux/apiRequest';
import { validEmail, validPassword } from '~/utils/regex'


function DialogAddUser(props) {
    const { onHide } = props;

    const [username, setUsername] = useState('');
    const [tennv, setTennv] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [rolos, setRolos] = useState('');

    const [focusPwd, setFocusPwd] = useState(false);

    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [ktpwd, setKtpwd] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddnv = async (e) => {
        e.preventDefault();
        const validate = () => {
            if (!validEmail.test(email)) {
                console.log('Chỗ email')
                setEmailErr(true);
                return;
            }
            if (!validPassword.test(pwd)) {
                console.log('Chỗ mật khẩu nè')
                setPwdError(true);
                return;
            }
            if (pwd !== pwd1) {
                console.log('Chỗ nhập lại mật khẩu nè')
                setKtpwd(true);
                return;
            }
        };
        validate();
        const newUser = {
            name: tennv,
            username: username,
            email: email,
            password: pwd,
            roles: [`${rolos}`]
        };
        registerUser(newUser, dispatch, navigate);
        onHide();
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Form action="" onSubmit={handleAddnv}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Thêm tài khoản quản lý</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <p className='h6'>Những ô nhập có dấu <span className='text-danger h5'>*</span> là bắt buộc phải nhập</p>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputManv">
                        <Form.Label>Tài khoản đăng nhập <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            placeholder="Tài khoản đăng nhập"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputTenNV">
                        <Form.Label>Tên Chủ tài khoản <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={tennv}
                            placeholder="Tên chủ tài khoản"
                            autoFocus
                            onChange={(e) => setTennv(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputCccd">
                        <Form.Label>Email <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Nhập địa chỉ Email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputQt">
                        <Form.Label>Mật khẩu <span className='text-danger h5'>*</span></Form.Label>
                        <Alert variant={pwdError ? 'danger ' : 'info'} show={focusPwd || pwdError} className='pb-1'>
                            {
                                !pwdError ? <p>Mật khẩu ít nhất 8 chữ số</p> : <p>Nhập mật khẩu sai định dạng</p>
                            }
                        </Alert>
                        <Form.Control
                            type="password"
                            value={pwd}
                            placeholder="Nhập mật khẩu"
                            autoFocus
                            onChange={(e) => setPwd(e.target.value)}
                            onFocus={() => setFocusPwd(true)}
                            onBlur={() => {
                                setFocusPwd(false);
                                setPwdError(false);
                            }}
                            required
                        />
                    </Form.Group>
                    <Alert variant='danger ' show={ktpwd} className='pb-1'>
                        <p>Nhập lại mật khẩu không đúng</p>
                    </Alert>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputDT">
                        <Form.Label>Nhập lại mật khẩu <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="password"
                            value={pwd1}
                            placeholder="Nhập lại mật khẩu của bạn"
                            autoFocus
                            onChange={(e) => setPwd1(e.target.value)}
                            onBlur={() => setKtpwd(false)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                        <Form.Label>Quyền hạn <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Select onChange={(e) => setRolos(e.target.value)} value={rolos}>
                            <option value={'USER'}>USER</option>
                            <option value={'PM'}>PM</option>
                            <option value={'ADMIN'}>ADMIN</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        Đóng
                    </Button>
                    <Button type="submit" variant="primary">
                        Thêm tài khoản
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default DialogAddUser;
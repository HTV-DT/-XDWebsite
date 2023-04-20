import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Input from '~/components/layouts/Input';

function CaiDatGioCong() {

    return (
        <section className="content-wrapper">
            <Form method="post">
                <div className="row">
                <div className="mb-2">
                    <Button variant="outline-primary" className="ms-auto float-end">
                        Lưu thay đổi
                    </Button>
                </div>
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Ca ngày</h4>
                                <div className="row">
                                    <Input
                                        title="Từ giờ"
                                        placeholderHour='8'
                                        placeholder='00'
                                        timeTitle='AM'
                                    />
                                    <Input
                                        title="Đến giờ"
                                        placeholderHour='5'
                                        placeholder='30'
                                        timeTitle='PM'
                                    />
                                    <Form.Group className="col-md-3" controlId="ControlInputHC">
                                        <Form.Label>Hệ số giờ làm hành chính</Form.Label>
                                        <FormControl type="number" placeholder="1" />
                                    </Form.Group>
                                    <Form.Group className="col-md-3" controlId="ControlInputHC">
                                        <Form.Label>Hệ số giờ làm tăng ca</Form.Label>
                                        <FormControl type="number" placeholder="1.5" />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Ca Đêm</h4>
                                <div className="row">
                                    <Input
                                        title="Từ giờ"
                                        placeholderHour='5'
                                        placeholder='35'
                                        timeTitle='PM'
                                    />
                                    <Input
                                        title="Đến giờ"
                                        placeholderHour='7'
                                        placeholder='55'
                                        timeTitle='AM'

                                    />
                                    <Form.Group className="col-md-3" controlId="ControlInputCD">
                                        <Form.Label>Hệ số giờ làm ca đêm</Form.Label>
                                        <FormControl type="text" placeholder="1.5" />
                                    </Form.Group>
                                    <Form.Group className="col-md-3" controlId="ControlInputCD">
                                        <Form.Label>Hệ số giờ làm tăng ca</Form.Label>
                                        <FormControl type="text" placeholder="2" />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Ngày nghỉ trong tuần</h4>
                                    <div className="mb-3 d-flex">
                                        {['Thứ 6', 'Thứ 7', 'Chủ nhật'].map((key, index) => {
                                            return (
                                                <div key={index} className="form-check ms-2">
                                                    <label className="form-check-label m-0">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            name="Ngaynghi"
                                                            id={'Ngaynghi' + index}
                                                            value={key}
                                                        />
                                                        {key}
                                                        <i className="input-helper" />
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <Form.Group controlId="ControlInputNN">
                                        <Form.Label>Hệ số giờ làm ngày nghỉ</Form.Label>
                                        <FormControl type="number" placeholder="2" />
                                    </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Lễ tết</h4>
                                <Form.Group className="col-md-8" controlId="ControlInputNN">
                                    <Form.Label>Hệ số giờ làm lễ tết</Form.Label>
                                    <FormControl type="number" placeholder="4" />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Đi trễ</h4>
                                <Form.Group className="col-md-8" controlId="ControlInputNN">
                                    <Form.Label>Tối hiểu trễ số phút cho đi trễ</Form.Label>
                                    <FormControl type="number" placeholder="10" />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </section>
    );
}

export default CaiDatGioCong;

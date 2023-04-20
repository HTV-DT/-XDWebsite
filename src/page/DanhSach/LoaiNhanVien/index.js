import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from '~/components/layouts/Table';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee/DialogAddNV';


const listdata = [{}];

const listTitles = {
    id: 'Mã loại nhân viên',
    name: 'Tên loại nhân viên',
    date: 'Ngày tạo',
    mota: 'Mô tả',
    nguoitao: 'Người tạo',
    nguoisua: 'Người sửa',
};

function LoaiNhanVien() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <Button
                        variant="outline-primary"
                        className="ms-auto col-sm-2 float-end m-2"
                        onClick={() => setModalShow(true)}
                    >
                        Tạo phòng ban
                    </Button>
                </div>
                <DialogTableEmployee show={modalShow} onHide={() => setModalShow(false)} />
                <div className="col-sm-12">
                    <Table title="Loại nhân viên" listTitles={listTitles} listdata={listdata} />
                </div>
            </div>
        </section>
    )
}

export default LoaiNhanVien

import React, { useState } from 'react';
import { Image, Form, Button, Modal } from 'react-bootstrap';
import DialogUpdateNV from '~/components/layouts/DialogTableEmployee/DialogUpdateNV';
import UseTable from './UseTable';
import TableFooter from './TableFooter';
import axios from 'axios';

function Table({ title, listTitles, listdata, del, handleUpdate, hideButton }) {
    let titles = Object.keys(listTitles);

    const [rdoId, setRdoId] = useState('');
    const [objectId, setObjectId] = useState({});
    const [idUpdate, setIdUpdate] = useState({});
    const [smShow, setSmShow] = useState(false);
    const [modelShowUpdate, setModelShowUpdate] = useState(false);
    const [page, setPage] = useState(1);


    const { slice, range } = UseTable(listdata, page, 6);


    function handleView() {
        if(rdoId){
            setModelShowUpdate(true);
            setIdUpdate(objectId);
        }
        else{
            setSmShow(true);
        }
    }

    const handleDel = async () => {
        if (rdoId) {
            await axios.delete(del + '/' + rdoId)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => { console.log(err) });
        }
    }


    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h3 className="h3">{title}</h3>
                    <div className='d-flex flex-row-reverse bd-highlight'>
                        <div className={`'col-md-2 m-2 collapse' ${hideButton ? '' : 'collapse'}`}>
                            <Button
                                type="button"
                                variant="danger"
                                className='btn-icon-text'
                                onClick={() => handleView()}
                            >
                                Xem thông tin
                                <i className="ti-file btn-icon-prepend ms-1" />
                            </Button>
                        </div>
                        <div className={`'col-md-1 m-2 collapse' ${rdoId ? '' : 'collapse'}`} >
                            <Button
                                type="button"
                                variant="info"
                                className='btn-icon-text'
                                onClick={() => handleDel()}
                            >
                                Xóa
                                <i className="mdi mdi-delete-forever btn-icon-prepend ms-1" />
                            </Button>

                        </div>
                        <Modal
                            size="sm"
                            show={smShow}
                            onHide={() => setSmShow(false)}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-sm">Thông báo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Bạn chưa nhấn chọn</Modal.Body>
                        </Modal>
                        <DialogUpdateNV show={modelShowUpdate} onHide={() => setModelShowUpdate(false)} idUpdate={idUpdate}/>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='text-center'>STT</th>
                                    {listTitles.img ? <th className='text-center'>{listTitles.img}</th> : null}
                                    {titles.map((key, index) => {
                                        return key !== 'img' ? (
                                            <th key={index} className="text-center">
                                                {listTitles[key]}
                                            </th>
                                        ) : null;
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {slice.map((data, index) => {
                                    let keys = Object.keys(data);
                                    return (
                                        <tr key={index}
                                            onClick={() => {
                                                setRdoId(data.id);
                                                setObjectId(data)
                                                if (handleUpdate) {
                                                    handleUpdate(data);
                                                }
                                            }}
                                            onDoubleClick={() => {
                                                setRdoId(null)
                                                if (handleUpdate) {
                                                    handleUpdate(null);
                                                }
                                            }}
                                            className={data.id ? '' : 'collapse'}>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    name="rdoId"
                                                    id={'rdoId' + data.id}
                                                    checked={data.id === rdoId}
                                                    onChange={() => setRdoId(data.id)}
                                                />
                                            </td>
                                            <td className='text-center'>{index + 1}</td>

                                            {data.img ? (
                                                <td className="text-center">
                                                    <Image src={data.img} />
                                                </td>
                                            ) : null}

                                            {keys.map((key, index) => {
                                                if (key === 'trangthai') {
                                                    return (
                                                        <td key={index} className="text-center">
                                                            <Form.Check
                                                                type="checkbox"
                                                                name={'trangthai' + data.id}
                                                                id={'trangthai' + data.id}
                                                                checked={data.trangthai}
                                                                disabled
                                                            />
                                                        </td>
                                                    );
                                                } else if (key !== 'img' && key !== 'qrcode') {
                                                    return (
                                                        <td key={index} className="text-center">
                                                            {data[key]}
                                                        </td>
                                                    );
                                                } else return null;
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-2">
                    <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
                </div>
            </div>
        </div>
    );
}

export default Table;
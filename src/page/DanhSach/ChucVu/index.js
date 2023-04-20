
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, InputGroup, Form } from 'react-bootstrap'
import Table from '~/components/layouts/Table';





const listTitles = {
    id: 'Mã chức vụ',
    name: 'Tên chức vụ',
    //date: 'Ngày tạo',
    //luongngay: 'Lương ngày',
    mota: 'Mô tả',
    trangthai: 'Trạng thái'
    //nguoitao: 'Người tạo',
    //nguoisua: 'Người sửa',
};

function ChucVu() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mota, setMota] = useState('');
    const [btn, setBtn] = useState('Thêm chức vụ');

    const [cvPost, setCVPost] = useState([]);

    const cvbaseURL = 'https://qlks.herokuapp.com/CVs';


    useEffect(() => {
        axios.get(cvbaseURL)
            .then((response) => {
                setCVPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (!cvPost) return null;

    const getAlldata = () => {
        let datas = [];
        cvPost.map((value) => {
            const cvPost = {
                id: value.maCV,
                name: value.tenCV,
                mota: value.moTaCV,
                trangthai: value.trangThaiCV
            }
            datas = [...datas, cvPost];
        })
        return datas;
    }

    const listdata = getAlldata();

    const handleAddCV = async (e) => {
        e.preventDefault();
        const cv = {
            tenCV: name,
            moTaCV: mota
        };
        if (btn === 'Thêm chức vụ') {
            await axios.post('http://localhost:8080/addCV', cv)
                .then((res) => {
                    console.log(res);
                    setCVPost([...cvPost, res.data]);
                })
                .catch((err) => console.log(err))
        }
        else {
            await axios.put('http://localhost:8080/updateCV/' + id, cv)
                .then((res) => {
                    console.log(res);
                    const postsclone = [...cvPost]
                    const index = postsclone.indexOf(cvPost);
                    postsclone[index] = { ...cvPost };
                    setCVPost(postsclone);
                })
                .catch((err) => { console.log(err) });
        }
    }

    const handleUpdate = (data) => {
        if (data) {
            setId(data.id);
            setName(data.name);
            setMota(data.mota ? data.mota : '');
            setBtn('Cập nhật');
        }
        else {
            setId('');
            setName('');
            setMota('');
            setBtn('Thêm chức vụ');
        }
    }

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <Table title="Chức vụ" listTitles={listTitles} listdata={listdata} del='http://localhost:8080/deleteCV' handleUpdate={handleUpdate} />
                </div>
                <Form action='' method='post' onSubmit={handleAddCV}>
                    <div className='col-lg-12 grid-margin stretch-card'>
                        <div className='card'>
                            <InputGroup className='card-body row'>
                                <Form.Group className="mb-3 col-sm-2" controlId="ControlInputMaPb">
                                    <Form.Label>Mã Chức vụ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Mã Chức vụ"
                                        autoFocus
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-4" controlId="ControlInputTenPb">
                                    <Form.Label>Tên Chức vụ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ten Chức vụ"
                                        autoFocus
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </InputGroup>
                            <Form.Group className="mb-3 card-body" controlId="ControlInputTenPb">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Mô tả chi tiết chức vụ"
                                    autoFocus
                                    value={mota}
                                    onChange={(e) => setMota(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="ms-auto col-sm-2 float-end m-2"
                        >
                            {btn}
                        </Button>
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default ChucVu

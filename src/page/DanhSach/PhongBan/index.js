import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap'
import axios from 'axios';
import Table from '~/components/layouts/Table';



function DanhSachPhongBan() {

    const [mapb, setMaPb] = useState('');
    const [tenpb, setTenPb] = useState('');
    const [nd, setND] = useState('');
    const [btn, setBtn] = useState('Tạo phòng ban');

    const [post, setPost] = useState([]);

    const listTitles = {
        id: 'Mã phòng ban',
        name: 'Tên phòng ban',
        mota: 'Mô tả',
        trangthai: 'Trạng Thái',
        //date: 'Ngày tạo',
        //nguoitao: 'Người tạo',
        //nguoisua: 'Người sửa',
    };

    const baseURL = 'https://qlks.herokuapp.com/PBs';


    useEffect(() => {
        const getAllPb = async () => {
            const { data: res } = await axios.get(baseURL)
            setPost(res);
        }
        getAllPb();
    }, []);

    const handleAddPB = async (e) => {
        e.preventDefault();
        const pb = {
            tenPB: tenpb,
            moTa: nd
        };
        if (btn === 'Tạo phòng ban') {
            await axios.post('http://localhost:8080/addPB', pb)
                .then((res) => {
                    console.log(res);
                    setPost([...post, res.data]);
                })
                .catch((err) => console.log(err))
        }
        else {
            await axios.put('http://localhost:8080/updatePB/' + mapb, pb)
                .then((res) => {
                    console.log(res);
                    const postsclone = [...post]
                    const index = postsclone.indexOf(post);
                    postsclone[index] = { ...post };
                    setPost(postsclone);
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    if (!post) return null;

    let listdata = [];
    post.map((value) => {
        const data = {
            id: value.maPB,
            name: value.tenPB,
            mota: value.moTa,
            trangthai: value.trangThaiPB,
        };
        listdata = [...listdata, data];
    });


    const handleUpdate = (data) => {
        if (data) {
            setMaPb(data.id);
            setTenPb(data.name);
            setND(data.mota ? data.mota : '');
            setBtn('Cập nhật');
        }
        else {
            setMaPb('');
            setTenPb('');
            setND('');
            setBtn('Tạo phòng ban');
        }
    }

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <Table title="Phòng ban" listTitles={listTitles} listdata={listdata} del='http://localhost:8080/deletePB' handleUpdate={handleUpdate} />
                </div>
                <Form action='' method='post' onSubmit={handleAddPB}>
                    <div className='col-lg-12 grid-margin stretch-card'>
                        <div className='card'>
                            <InputGroup className='card-body row'>
                                <Form.Group className="mb-3 col-sm-2" controlId="ControlInputMaPb">
                                    <Form.Label>Mã Phòng ban</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Mã Phòng ban"
                                        autoFocus
                                        value={mapb}
                                        onChange={(e) => setMaPb(e.target.value)}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-4" controlId="ControlInputTenPb">
                                    <Form.Label>Tên Phòng ban</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ten Phòng ban"
                                        autoFocus
                                        value={tenpb}
                                        onChange={(e) => setTenPb(e.target.value)}
                                    />
                                </Form.Group>
                            </InputGroup>
                            <Form.Group className="mb-3 card-body" controlId="ControlInputTenPb">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Mô tả chi tiết phòng ban"
                                    autoFocus
                                    value={nd}
                                    onChange={(e) => setND(e.target.value)}
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
    );
}

export default DanhSachPhongBan;

import { Row, Col, Card, Table } from "react-bootstrap";
import Button from "react-bootstrap";
import BasicData from "data/dashboard/basicdate";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const List2 = () => {
    const buttonstyle = {
        width: '100px',
        margin: 'auto',
        display: 'block'
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row className="mt-6">
            <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">견적목록</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>상품명</th>
                                <th>상품수량</th>
                                <th>상품분류</th>
                                <th>보관위치</th>

                            </tr>
                        </thead>
                        <tbody>
                            {BasicData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.projectName}</td>
                                        <td className="align-middle">{item.storing_quantity}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.location}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <div>
                        <button className="btn" style={buttonstyle} variant="outline-primary" onClick={handleShow}>완료</button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>견적사항</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>견적내용 및 주의사항</Modal.Body>
                            <Modal.Footer>
                                <button className="btn_close" variant="secondary" onClick={handleClose}>
                                    닫기
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Card>
            </Col>
        </Row>
    )

}

export default List2
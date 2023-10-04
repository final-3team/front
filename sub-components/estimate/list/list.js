import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Items from "../items/items";
import { Modal } from "react-bootstrap";
import './list.css';

const List = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Table responsive className="text-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th>회사명</th>
                        <th>연락처</th>
                        <th>상품명</th>
                        <th>상품수량</th>
                        <th>상품분류</th>
                        <th>pallet.수량</th>
                        <th>pallet.규격</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((data, index) => {
                        <Items
                            key={data.id}
                            company={data.company}
                            phone={data.phone}
                            projectName={data.projectName}
                            storing_quantity={data.storing_quantity}
                            classification={data.classification}
                            pallet_quantity={data.pallet_quantity}
                            pallet_size={data.pallet_size}

                        />
                        return (
                            <tr key={index}>
                                <td className="align-middle">{data.company}</td>
                                <td className="align-middle">{data.phone}</td>
                                <td className="align-middle">{data.projectName}</td>
                                <td className="align-middle">{data.storing_quantity}</td>
                                <td className="align-middle">{data.classification}</td>
                                <td className="align-middle">{data.pallet_quantity}</td>
                                <td className="align-middle">{data.pallet_size}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </Table>
            <div>
                <button onClick={handleShow}>완료</button>
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
        </div>
    )
};

export default List;


import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Items from "../items/items";
import { Modal } from "react-bootstrap";
import "./list.css";

const List = (props) => {
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
            />;
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
            );
          })}
        </tbody>
      </Table>
      <div>
        <button onClick={handleShow}>완료</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>견적사항</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
              />;

              return (
                <div key={index}>
                  <h1>----------------------------</h1>
                  <p>상품명: {data.projectName}</p>
                  <p>상품수량: {data.storing_quantity}</p>
                  <p>pallet.수량: {data.pallet_quantity}</p>
                  <p>가격: {data.pallet_quantity * 6000}원</p>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <section>
              <h1>주의사항</h1>
              <p>
                1. 1일 이용료: 6,000원(1일) * pallet.수량 (*향후 출고 시 정산){" "}
              </p>
              <p>2. 출고요청은 최소 출고예정일 2주전까지 해주시기 바랍니다.</p>
              <p>
                3. 운영시간(월~금, 09 ~ 06시) 외의 시간에 입/출고요청을
                하실경우, 지연이 될 수 있습니다.
              </p>
            </section>
            <section>
              <a href="/pages/contract">진행</a>
              <button
                className="btn_close"
                variant="secondary"
                onClick={handleClose}
              >
                닫기
              </button>
            </section>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default List;
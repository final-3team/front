import React from "react";
import { Table } from "react-bootstrap";
import Items from "../items/items";
import "./contents_pdf.css";

export const ContentsPdf = props => {
  return (
    <div>
      <Table responsive className="text-nowrap mb-0">
        <thead className="table-light">
          <tr>
            <th>상품명</th>
            <th>상품수량</th>
            <th>pallet.수량</th>
            <th>가격</th>
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
                <td className="align-middle">{data.projectName}</td>
                <td className="align-middle">{data.storing_quantity}</td>
                <td className="align-middle">{data.pallet_quantity}</td>
                <td className="align-middle">{data.pallet_quantity * 6000}원</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
    
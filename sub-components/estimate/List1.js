import { Row, Col, Card, Table } from "react-bootstrap";
import Button from "react-bootstrap";
import BasicData from "data/dashboard/basicdate";
import Link from "next/link";


const List1 = () => {
    const buttonstyle = {
        width: '100px',
        margin: 'auto',
        display: 'block'
    };

    return (
        <Row className="mt-6">
            <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">견적내용</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>회사명</th>
                                <th>연락처</th>
                                <th>상품명</th>
                                <th>상품수량</th>
                                <th>상품분류</th>
                                <th>보관위치</th>
                                <th>pallet수량</th>
                                <th>pallet규격</th>
                            </tr>
                        </thead>
                        <tbody>
                            {BasicData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.company}</td>
                                        <td className="align-middle">{item.contact}</td>
                                        <td className="align-middle">{item.projectName}</td>
                                        <td className="align-middle">{item.storing_quantity}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.location}</td>
                                        <td className="align-middle">{item.pallet_quantity}</td>
                                        <td className="align-middle">{item.pallet_size}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <button style={buttonstyle}>추가</button>
                </Card>
            </Col>
        </Row>
    )
}



export default List1
import { Row, Col, Card, Table } from "react-bootstrap";
import Button from "react-bootstrap";
import ProjectsData from "data/dashboard/ProjectsData";
import Link from "next/link";

const Current = () => {
    const formstyle = {
        width: '100px',
        margin: 'auto',
        display: 'block'
    };
    const btnstyle = {
        width: '150px',
        margin: 'auto',
        display: 'block'
    };
    return (
        <Row className="mt-6">
            <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
                <Card>
                    <Card.Header className="bg-white  py-4">

                    </Card.Header>
                    <div>
                        <select name="searchType">
                            <option value="company">회사명</option>
                            <option value="classification">상품분류</option>
                        </select>

                        <input type="text" name="keyword" />

                        <button type="button">검색</button>
                    </div>
                    <Table responsive className="text-nowrap mb-0" >

                        <thead className="table-light">
                            <tr>

                                <th>회사명</th>
                                <th>연락처</th>
                                <th>주소</th>
                                <th>상품수량</th>
                                <th>상품분류</th>
                                <th>계약일</th>

                            </tr>
                        </thead>
                        <tbody>
                            {ProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.company}</td>
                                        <td className="align-middle">{item.phone}</td>
                                        <td className="align-middle">{item.address}</td>
                                        <td className="align-middle">{item.storing_quantity}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.contract_day}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </Card>
            </Col>
        </Row>
    )


}

export default Current
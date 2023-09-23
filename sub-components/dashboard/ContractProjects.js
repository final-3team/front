// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";

const ContractProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">보관중인 물품들</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>업체명</th>
                                <th>물품명</th>
                                <th>수량</th>
                                <th>창고</th>
                                <th>상품분류</th>
                                <th>계약일</th>
                                <th>전화번호</th>
                                <th>주소</th>
                           </tr>
                        </thead>
                        <tbody>
                            {ProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.number}</td>
                                        <td className="align-middle">{item.company}</td>
                                        <td className="align-middle">{item.projectName}</td>
                                        <td className="align-middle">{item.storing_quantity}</td>
                                        <td className="align-middle">{item.location}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.contract_day}</td>
                                        <td className="align-middle">{item.phone}</td>
                                        <td className="align-middle">{item.address}</td>





                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Projects</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default ContractProjects
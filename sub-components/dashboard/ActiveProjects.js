// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";

const ActiveProjects = () => {
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
                                <th>상품이름</th>
                                <th>상품분류</th>
                                <th>보관기간</th>
                                <th>입고일</th>
                                <th>출고예정일</th>
                                <th>상태</th>
                                <th>보관위치</th>
                                <th>이번달 이용료</th>
                                <th>계약내용 보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.projectName}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.period}</td>
                                        <td className="align-middle">{item.storing}</td>
                                        <td className="align-middle">{item.release}</td>
                                        <td className="align-middle">{item.status}</td>
                                        <td className="align-middle">{item.location}</td>
                                        <td className="align-middle">{item.fee}</td>
                                        <td className="align-middle">{item.contract}</td>


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

export default ActiveProjects
// import node module libraries
import { Fragment, React } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

const NoticeDetail = ({ selectedNotice }) => {
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
        {selectedNotice ? (
            <Card>
                <Card.Body>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className='textCenter'>제목</th>
                                <th scope="col">{selectedNotice.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='content'>내용</th>
                                <td>{selectedNotice.content}</td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성자</th>
                                <td>{selectedNotice.writer}</td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성일</th>
                                <td>{selectedNotice.date}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            ) : (
                <div><Col></Col></div>
            )}
        </Col>
	);
};

export default NoticeDetail

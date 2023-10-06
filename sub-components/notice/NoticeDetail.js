// import node module libraries
import { Fragment, React } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicTableCode,
	DarkTableCode,
	TableHeadCode,
	StripedTableCode,
	TableVariantCode,
	BorderedTableCode,
	BorderlessTableCode,
	HoverableRowsCode,
	SmallTableCode,
	ContextualClassesCode,
	ResponsiveTableCode
} from 'data/code/TablesCode';

const NoticeDetail = ({ selectedNotice }) => {
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
        {selectedNotice ? (
            <Card>
                <Card.Body>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">제목</th>
                                <th scope="col">{selectedNotice.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='noticeContent'>내용</th>
                                <td>{selectedNotice.content}</td>
                            </tr>
                            <tr>
                                <th scope="row">작성자</th>
                                <td>{selectedNotice.writer}</td>
                            </tr>
                            <tr>
                                <th scope="row">작성일</th>
                                <td>{selectedNotice.date}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="secondary" className='createSuccesBtn'>작성완료</Button>
                </Card.Body>
            </Card>
            ) : (
                <div><Col></Col></div>
            )}
        </Col>
	);
};

export default NoticeDetail

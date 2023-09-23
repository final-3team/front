// import node module libraries
import { Fragment } from 'react';
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

const noticeContent = {
    title : '공지입니다',
    content : '공지내용입니다',
    writer : '작성자',
    date : '작성일'
}

const QnaDetail = () => {
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">제목</th>
                                <th scope="col">{noticeContent.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='noticeContent'>내용</th>
                                <td>{noticeContent.content}</td>
                            </tr>
                            <tr>
                                <th scope="row">작성자</th>
                                <td>{noticeContent.writer}</td>
                            </tr>
                            <tr>
                                <th scope="row">작성일</th>
                                <td>{noticeContent.date}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="secondary" className='postNotice'>작성완료</Button>
                </Card.Body>
            </Card>
        </Col>
	);
};

export default QnaDetail

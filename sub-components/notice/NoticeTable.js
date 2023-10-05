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

// import sub components
import {
    NoticeDetail
  } from 'sub-components'
import NoticeData from 'data/dashboard/NoticeData';

const NoticeTable = () => {
	return (
        <><Col xl={8} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    <Table hover className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NoticeData.map((x, i) =>
                            <tr key={i}>
                                <th scope="row">{x.id}</th>
                                <td>{x.title}</td>
                                <td>{x.writer}</td>
                                <td>{x.date}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <Button variant="secondary" className='createNotice'>글쓰기</Button>
                </Card.Body>
            </Card>
        </Col>
        <NoticeDetail /></>
	);
};

export default NoticeTable

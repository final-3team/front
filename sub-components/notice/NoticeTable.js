// import node module libraries
import { Fragment ,useState } from 'react';
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
    // 선택한 테이블 값을 state로 정의
    const [selectedNotice, setSelectedNotice] = useState(null);

    // 선택한 테이블 값을 변경하는 함수
    const handleTableSelection = (notice) => {
        setSelectedNotice(notice);
    };

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
                             <tr key={i} onClick={() => handleTableSelection(x)}>
                                <th scope="row">{x.id}</th>
                                <td>{x.title}</td>
                                <td>{x.writer}</td>
                                <td>{x.date}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <Button variant="secondary" className='createBtn'>글쓰기</Button>
                </Card.Body>
            </Card>
        </Col>        
        {selectedNotice && <NoticeDetail selectedNotice={selectedNotice} />}</>
	);
};

export default NoticeTable

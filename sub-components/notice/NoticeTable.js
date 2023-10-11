// import node module libraries
import { Fragment ,useState } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button, Pagination } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { getNotices } from 'app/api/Notice';
import { useEffect } from 'react';
import { SET_NOTICES } from 'redux/noticeSlice'

// import sub components
import { NoticeDetail, CreateNotice } from 'sub-components'
import NoticeData from 'data/dashboard/NoticeData';

// import react code data file
import {
	DefaultPaginationCode,
	PaginationWithIconsCode,
	DisabledActiveCode,
	PaginationSizingCode,
	PaginationSizingSmallCode,
	AlignmentCode,
	JustifyContentEndCode
} from 'data/code/PaginationsCode';

const NoticeTable = () => {
    // 선택한 테이블 값을 state로 정의
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null); // 추가: 선택한 컴포넌트를 관리하는 상태
    const [showDataList, setshowDataList] = useState([]);
    // 선택한 테이블 값을 변경하는 함수
    const handleTableSelection = (notice) => {
        setSelectedComponent('');
        setSelectedNotice(notice);
    };

    // 글쓰기 버튼 클릭 시 CreateNotice 컴포넌트를 보여주는 함수
    const showCreateNotice = () => {
        setSelectedComponent('CreateNotice');
    };
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAndSetNotices() { 
            const result = await getNotices();
            console.log(result.json.data);
            if (Array.isArray(result.json.data)) {
                console.log("if문 안으로 들어옴");
                setshowDataList(result.json.data);
              }

            // 리덕스를 이용해서 state에 값 설정
            dispatch(SET_NOTICES(result.json.data));
        }
        getAndSetNotices();
    },[])

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
                            {showDataList.map((x, i) =>
                             <tr key={i} onClick={() => handleTableSelection(x)}>
                                <th scope="row">{x.id}</th>
                                <td>{x.title}</td>
                                <td>{x.userName}</td>
                                <td>{x.postSeq}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <Button variant="secondary" className="createBtn" onClick={showCreateNotice}>
                        글쓰기
                    </Button>
                    <Pagination className="justify-content-center">
                        <Pagination.Prev disabled>Previous</Pagination.Prev> 
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>                                
                        <Pagination.Item>{3}</Pagination.Item>      
                        <Pagination.Next>Next</Pagination.Next>
                    </Pagination>
                </Card.Body>
            </Card>
        </Col>        
        {selectedComponent === 'CreateNotice' ? (
        <CreateNotice /> // CreateNotice 컴포넌트를 선택한 경우에만 보여줍니다.
      ) : (
        selectedNotice && <NoticeDetail selectedNotice={selectedNotice} />
      )}
    </>
  );
};

export default NoticeTable

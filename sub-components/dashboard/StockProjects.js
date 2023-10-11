// import node module libraries
import Link from 'next/link';
import { useState } from 'react';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modals from './Modals';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";
import StockCard from './StockCard';
import { useDispatch } from 'react-redux';
import { getStocks } from 'app/api/Stock';
import { useEffect } from 'react';
import { SET_STOCKS } from 'redux/stockSlice';

const dataList = ProjectsData.map((data) => (<StockCard id={data.id} projectName={data.projectName} location={data.location}/>))

const StockProjects = () => {
    // 선택한 테이블 값을 state로 정의
    const [showDataList, setshowDataList] = useState([]);
        
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAndSetStocks() { 
            const result = await getStocks();
            console.log(result.json.data);

            // 리덕스를 이용해서 state에 값 설정
            dispatch(SET_STOCKS(result.json.data));
        }
        getAndSetStocks();
    });
    return (
        <Row className="mt-6">
            <Col md={1} xs={1}>
                {dataList}
                {/* {ProjectsData[0].location} */}
            </Col>
        </Row>

        )
    }

export default StockProjects;
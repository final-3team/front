// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modals from './Modals';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";
import StockCard from './StockCard';

const dataList = ProjectsData.map((data) => (<StockCard id={data.id} projectName={data.projectName} location={data.location}/>))

const StockProjects = () => {
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
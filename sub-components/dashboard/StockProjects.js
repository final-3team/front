// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modals from './Modals';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";
import StockCard from './StockCard';


const StockProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={1} xs={1}>
                
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <br></br>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <br></br>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>
                <td><StockCard/></td>

            </Col>
        </Row>

        )
    }

export default StockProjects;
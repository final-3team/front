// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modals from './Modals';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";


const StockProjects = () => {

 
    return (
        <Row className="mt-6">
            <Col md={1} xs={1}>
                <Card style={{ width: '9rem' }}>
                    <Card.Body>
                        <Card.Title>인천 1동 1층</Card.Title>
                            <Card.Text>
                                <tbody>
                                    {ProjectsData.map((item, index) => {
                                        if(item.location == "인천-1동-1층"){
                                        return (
                                        <tr key={index}>
                                            <td className="align-middle">{item.projectName+"("+item.classification+")"}</td>
                                        </tr>
                                            )}
                                        })}
                                </tbody>
                            </Card.Text>
                        <Modals/>
                    </Card.Body>
                </Card>

                <Card style={{ width: '9rem' }}>
                    <Card.Body>
                        <Card.Title>인천 1동 1층</Card.Title>
                            <Card.Text>
                                <tbody>
                                    {ProjectsData.map((item, index) => {
                                        if(item.location == "인천-1동-1층"){
                                        return (
                                        <tr key={index}>
                                            <td className="align-middle">{item.projectName+"("+item.classification+")"}</td>
                                        </tr>
                                            )}
                                        })}
                                </tbody>
                            </Card.Text>
                        <Modals/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        )
    }

export default StockProjects;
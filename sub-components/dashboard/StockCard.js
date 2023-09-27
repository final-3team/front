import {Col, Row, Card} from 'react-bootstrap'
import ProjectsData from 'data/dashboard/ProjectsData';
import Modals from './Modals';
import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'

const StockCard = () => {
        return (
            <Row className="mt-6">
                <Col md={1} xs={1}>
                    <Card style={{ width: '9rem' }}>
                        <Card.Body>
                            <Card.Title>인천 1동 1층</Card.Title>
                                <Card.Text>
                                    <tbody>
                                        {ProjectsData.map((item, index) => {
                                            if(item.location == "대전-2동-6층-1번"){
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
        )};

export default StockCard
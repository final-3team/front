import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ProjectsData from "data/dashboard/ProjectsData";

const Modals = () => {      
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}            
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              인천-1동-1층
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
                  {ProjectsData.map((item, index) => {
                      if(item.location == "인천-1동-1층"){
                                        return (
                                        <tr key={index}>
                                        <td className="align-bottom">{item.number}</td>
                                        <td className="align-bottom">{item.company}</td>
                                        <td className="align-bottom">{item.projectName}</td>
                                        <td className="align-bottom">{item.storing_quantity}</td>
                                        <td className="align-bottom">{item.location}</td>
                                        <td className="align-bottom">{item.classification}</td>
                                        <td className="align-bottom">{item.contract_day}</td>
                                        <td className="align-bottom">{item.phone}</td>
                                        <td className="align-bottom">{item.address}</td>
                                        </tr>
                                            )}
                                        })}
                                
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>닫기</Button>
            </Modal.Footer>
          </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Fragment> 
            <Button variant="primary" onClick={() => setModalShow(true)}>
                상세보기 
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    )
}

export default Modals
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
                                        <tr className="align-bottom">식별번호 : {item.number}</tr>
                                        <tr className="align-bottom">의뢰회사 : {item.company}</tr>
                                        <tr className="align-bottom">제품명 : {item.projectName}</tr>
                                        <tr className="align-bottom">수량 : {item.storing_quantity}</tr>
                                        <tr className="align-bottom">보관위치 : {item.location}</tr>
                                        <tr className="align-bottom">저장상태 : {item.classification}</tr>
                                        <tr className="align-bottom">계약일 : {item.contract_day}</tr>
                                        <tr className="align-bottom">전화번호 : {item.phone}</tr>
                                        <tr className="align-bottom">고객주소 : {item.address}</tr>
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
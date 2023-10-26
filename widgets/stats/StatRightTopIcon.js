// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from "react";
import { Card } from 'react-bootstrap';

import { getEstimates } from "app/api/Estimate";
import { useDispatch } from "react-redux";
import { SET_ESTIMATES } from "redux/estimateSlice";

const StatRightTopIcon = props => {
    const { info } = props;
    const [showDataList, setshowDataList] = useState([]);
      const dispatch = useDispatch();
  
    useEffect(() => {
      async function getAndSetEstimates() { 
          const result = await getEstimates();
          console.log(result.json.data.contents.length);
          if (info.title === "예상 비용") {
          setshowDataList(result.json.data.contents.length*600*30);
          } else {
            setshowDataList(result.json.data.contents.length);
          }
          // 리덕스를 이용해서 state에 값 설정
          dispatch(SET_ESTIMATES(result.json.data.contents.length));
      }
      getAndSetEstimates();
  }, []);

    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h4 className="mb-0">{info.title}</h4>
                    </div>
                    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                        {info.icon}
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold">{showDataList}</h1>
                    {/* <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p> */}
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
StatRightTopIcon.propTypes = {
    info: PropTypes.any.isRequired
};

export default StatRightTopIcon
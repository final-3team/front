// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from "react";
import { Card } from 'react-bootstrap';

import { getEstimates } from "app/api/Estimate";
import { useDispatch } from "react-redux";
import { SET_ESTIMATES } from "redux/estimateSlice";

const StatRightTopIconTwo = props => {
    const { info } = props;
    const [showDataList, setshowDataList] = useState([]);
    const [resultCount, setCount] = useState(0);
      const dispatch = useDispatch();
  
    useEffect(() => {
      async function getAndSetEstimates() { 
          const result = await getEstimates();
          console.log(result.json.data.contents.length);
          setshowDataList(result.json.data.contents.length);

            // 특정 조건에 해당하는 값을 구하려는 조건
            const targetValue = "COMPLETE_CONTRACT";

            // 조건을 만족하는 항목만 필터링
            const filteredData = result.json.data.contents.filter(item => item.contractStatus === targetValue);

            // 필터링된 배열의 길이를 구하여 해당 조건을 만족하는 항목의 수를 얻을 수 있음
            const count = filteredData.length;

            setCount(count);

  
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
                    <h1 className="fw-bold">{resultCount}</h1>
                    {/* <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p> */}
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
StatRightTopIconTwo.propTypes = {
    info: PropTypes.any.isRequired
};

export default StatRightTopIconTwo
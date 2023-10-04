'use client'
import React, {useState} from 'react';
import { New } from 'sub-components';
import ProjectsData from 'data/dashboard/ProjectsData';
import List from 'sub-components/estimate/list/list';



const Estimate = () => {
    const [datas, setDatas] = useState(ProjectsData);

    const addEstimateDataHandler = (data) => {
        setDatas((prevDatas) => {
            return [data, ...prevDatas];
        });
    };

    return (
        <div>
            <New OnAddList={addEstimateDataHandler}/>
            <List items = {datas}/>
        </div>
    );
}

export default Estimate;
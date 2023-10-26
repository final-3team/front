'use client'
import Link from 'next/link';
import { Card, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import React, { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic';

import { getEstimates } from "app/api/Estimate";
import { useDispatch } from "react-redux";
import { SET_ESTIMATES } from "redux/estimateSlice";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Charts = () => {    
    
    const [showDataList, setshowDataList] = useState([]);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      async function getAndSetEstimates() { 
          const result = await getEstimates();
          console.log(result.json.data.contents);
          setshowDataList(result.json.data.contents);
  
          // 리덕스를 이용해서 state에 값 설정
          dispatch(SET_ESTIMATES(result.json.data.contents));
      }
      getAndSetEstimates();
    }, []);

    const perfomanceChartSeries = [{
        name: '냉장',
        data: [44, 55, 87, 76]
      }, {
        name: '냉동',
        data: [26, 85, 65, 68]
      },  {
        name: '실온',
        data: [15, 41, 46, 76]
      }];
    const perfomanceChartOptions = {
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['SEOUL_A', 'SEOUL_B', 'BUSAN_A', 'BUSAN_B'],
      },
      yaxis: {
        title: {
          text: '계약률'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "% 사용중"
          }
        }
      }
      };

    return (
        <Card className="h-100">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="mb-0">창고 계약률</h4>
                    </div>
                </div>
                <div className="mb-8">
                    <Chart
                        options={perfomanceChartOptions}
                        series={perfomanceChartSeries}
                        type="bar"
                        width="100%"
                    />
                </div>
                {/* icon with content  */}
                <div className="d-flex align-items-center justify-content-around">
                    <div className="text-center">
                        <i className="fe fe-check-circle text-success fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">76</h1>
                        <p>당월 계약 건</p>
                    </div>
                    <div className="text-center">
                        <i className="fe fe-trending-up text-warning fs-3"></i>
                        <h1 className="mt-3  mb-1 fw-bold">32%</h1>
                        <p>당월 계약 상승률</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Charts
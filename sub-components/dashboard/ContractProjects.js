// import node module libraries
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from "react";
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

import { getEstimates } from "app/api/Estimate";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { SET_ESTIMATES } from "redux/estimateSlice";

const ContractProjects = () => {
    const [showDataList, setshowDataList] = useState([]);
    const dispatch = useDispatch();
    const dataToSend = {
        showDataList: showDataList // 원하는 데이터 추가
        // 다른 데이터도 필요한 경우 추가
    };
    const linkHref = "/pages/contract";
    const queryParams = { data: JSON.stringify(dataToSend) }; // 데이터를 JSON 문자열로 변환하여 전달

    const router = useRouter();
    const currentPath = router.pathname;
    // Next.js의 router를 사용하여 다른 페이지로 이동
    // router.push({
    //     pathname: linkHref,
    //     query: queryParams,
    // });

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
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">보관중인 물품들</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th className="textCenter">물품명</th>
                                <th className="textCenter">수량</th>
                                <th className="textCenter">창고</th>
                                <th className="textCenter">상품분류</th>
                                <th className="textCenter">계약일</th>
                                <th className="textCenter">상태</th>
                                <th className="textCenter"> </th>
                           </tr>
                        </thead>
                        <tbody>
                            {showDataList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{index+1}</td> {/* item.contractSeq */}
                                        <td className="align-middle">{item.productName}</td>
                                        <td className="align-middle">{item.productQuantity}</td>
                                        <td className="align-middle">{item.warehouseArea}</td>
                                        <td className="align-middle">
                                            {item.storeType === "ROOM_STORAGE" ? "상온" :
                                            item.storeType === "COLD_STORAGE" ? "냉장" :
                                            item.storeType === "FROZEN_STORAGE" ? "냉동" : null}
                                        </td>
                                        <td className="align-middle">
                                                {new Date(item.storeDate).toLocaleDateString('ko-KR')}
                                        </td>                                        
                                        <td className="align-middle">
                                            {item.contractStatus === "BEFORE_CONTRACT" ? "진행중" :
                                            item.contractStatus === "COMPLETE_CONTRACT" ? "입고" : null}
                                        </td>
                                        <td className="align-middle">
                                            <Link href={{ pathname: linkHref, query: queryParams }}>
                                                PDF 변환
                                            </Link>
                                        </td>
                                        {/* <td className="align-middle">
                                            <button onClick={handleButtonClick}>PDF 변환</button>
                                        </td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">Top</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default ContractProjects
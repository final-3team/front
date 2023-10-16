// 'use client'
// import React from "react";
// import { Row, Container } from 'react-bootstrap';
// import { PageHeading } from 'widgets';
// import Button from 'react-bootstrap';
// import {Current} from 'sub-components';

// const Contract = () => {
    

//     return (
//         <Container fluid className="p-6">
//             <PageHeading heading="계약현황" />


//             <div className="py-6">
//              <Current/>
//             </div>

//         </Container>
//     )

// }

// export default Contract
"use client";
import { Container } from "react-bootstrap";
import { PageHeading } from "widgets";
import React, { useState, useEffect, useCallback } from "react";
import Current from "sub-components/contract/current";

const Contract = () => {
  const [products, setProducts] = useState([]);
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://wmsproject-ac359-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("오류가 생겼습니다!");
      }
      const data = await response.json();

      //저장한 상품을 불러오자
      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          company: data[key].company,
          phone: data[key].phone,
          productName: data[key].productName,
          storing_quantity: data[key].storing_quantity,
          classification: data[key].classification,
          location: data[key].location,
          pallet_quantity: data[key].pallet_quantity,
          pallet_size: data[key].pallet_size,
          contract_date: data[key].contract_date,
        });
      }
      setProducts(loadedProducts);
      setDates(loadedProducts);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  let content;
  if (products.length > 0) {
    content = <Current products={products} />;
  }

  return (
    <Container fluid className="p-6">
      <PageHeading heading="계약현황" />

      <section className="py-6">
        <div>
          <select name="searchType">
            <option value="company">회사명</option>
            <option value="classification">상품분류</option>
          </select>

          <input type="text" name="keyword" />

          <button type="button">검색</button>
        </div>
      </section>
      <section>{content}</section>
    </Container>
  );
};

export default Contract;

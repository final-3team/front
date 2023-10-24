// import React, { useState } from "react";
// import "./Basic.css";

// const Basic = (props) => {
//   const [goCompany, setCompany] = useState("");
//   const [goPhone, setPhone] = useState("");
//   const [goProjectName, setprojectName] = useState("");
//   const [gostoringquntity, setstoring_Quantity] = useState("");
//   const [goclassfication, setClassfication] = useState("");
//   const [golocation, setLocation] = useState("");
//   const [gopalletquantity, setpallet_Quantity] = useState("");
//   const [gopalletsize, setpallet_Size] = useState("");

//   const companyChangeHandler = (event) => {
//     setCompany(event.target.value);
//   };
//   const phoneChangeHandler = (event) => {
//     setPhone(event.target.value);
//   };
//   const projectNameChangeHandler = (event) => {
//     setprojectName(event.target.value);
//   };
//   const storing_quantityChangeHandler = (event) => {
//     setstoring_Quantity(event.target.value);
//   };
//   const classificationChangeHandler = (event) => {
//     setClassfication(event.target.value);
//   };
//   const locationChangeHandler = (event) => {
//     setLocation(event.target.value);
//   };
//   const pallet_quantityChangeHandler = (event) => {
//     setpallet_Quantity(event.target.value);
//   };
//   const pallet_sizeChangeHandler = (event) => {
//     setpallet_Size(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const estimateData = {
//       company: goCompany,
//       phone: goPhone,
//       projectName: goProjectName,
//       storing_quantity: gostoringquntity,
//       classification: goclassfication,
//       location: golocation,
//       pallet_quantity: gopalletquantity,
//       pallet_size: gopalletsize,
//     };
//     props.onSaveData(estimateData);
//     setCompany("");
//     setPhone("");
//     setprojectName("");
//     setstoring_Quantity("");
//     setClassfication("");
//     setLocation("");
//     setpallet_Quantity("");
//     setpallet_Size("");
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <label>회사명</label>
//         <input
//           type="text"
//           value={goCompany}
//           onChange={companyChangeHandler}
//         ></input>
//         <div className="new-expense__controls">
//           <label>연락처</label>
//           <input
//             type="text"
//             value={goPhone}
//             onChange={phoneChangeHandler}
//           ></input>
//         </div>
//       </div>
//       <div className="new-expense__controls">
//         <label>상품명</label>
//         <input
//           type="text"
//           value={goProjectName}
//           onChange={projectNameChangeHandler}
//         ></input>
//         <div className="new-expense__controls">
//           <label>상품수량</label>
//           <input
//             type="number"
//             value={gostoringquntity}
//             onChange={storing_quantityChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>상품분류</label>
//           <input
//             type="text"
//             value={goclassfication}
//             onChange={classificationChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>보관위치</label>
//           <input
//             type="text"
//             value={golocation}
//             onChange={locationChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>Pallet.수량</label>
//           <input
//             type="number"
//             value={gopalletquantity}
//             onChange={pallet_quantityChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__controls">
//           <label>Pallet.규격</label>
//           <input
//             type="number"
//             value={gopalletsize}
//             onChange={pallet_sizeChangeHandler}
//           ></input>
//         </div>
//         <div className="new-expense__actions">
//           <button type="button" onClick={props.onCancel}>
//             취소
//           </button>
//           <button type="submit">작성</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Basic;
import React, { useState, useRef } from "react";
import "./Basic.css";

// import node module libraries
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useRouter } from "next/navigation";
import { Col, Row, Card, Table, Form, Tab, Container, Button } from 'react-bootstrap';

// import hooks
import useMounted from 'hooks/useMounted';

// import api
import { postEstimateOne } from "app/api/Estimate";

function AddProducts(props) {
  const hasMounted = useMounted();

  const router = useRouter();
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async data => {
      const response = await postEstimateOne({ deposit: data.deposit, productQuantity: data.productQuantity, storeType: data.storeType, warehouseArea: data.warehouseArea });//data.title, data.body, data.category
      const result = response.json;
    };
  const onError = errors => console.log(errors + "에러");

  const companyRef = useRef("");
  const phoneRef = useRef("");
  const productNameRef = useRef("");
  const storing_quantityRef = useRef("");
  const classificationRef = useRef("");
  const locationRef = useRef("");
  const pallet_quantityRef = useRef("");
  const pallet_sizeRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const products = {
      company: companyRef.current.value,
      phone: phoneRef.current.value,
      productName: productNameRef.current.value,
      storing_quantity: storing_quantityRef.current.value,
      classification: classificationRef.current.value,
      location: locationRef.current.value,
      pallet_quantity: pallet_quantityRef.current.value,
      pallet_size: pallet_sizeRef.current.value,
    };

    props.onAddProducts(products);
  }

  return (
    <Col>
        <Card>
            <Card.Body>
                {hasMounted &&
                <Form onSubmit={handleSubmit(onSubmit, onError)}>

                <Table className="text-nowrap">
                    <tr>
                        <th scope="col" className='textCenter'>계약금</th>
                        <th scope="col">
                            <Form.Group className="mb-3" controlId="deposit">
                            <Form.Control 
                            name="deposit"
                            placeholder="계약금을 입력하세요" 
                            required="" 
                            {...register('deposit', {
                              required: true,
                            })}
                            />
                            </Form.Group>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className='textCenter'>삼품수량</th>
                        <th scope="col">
                            <Form.Group className="mb-3" controlId="productQuantity">
                            <Form.Control 
                            name="productQuantity"
                            placeholder="삼품수량을 입력하세요" 
                            required="" 
                            {...register('productQuantity', {
                              required: true,
                            })}
                            />
                            </Form.Group>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className='textCenter'>상품특성</th>
                        <th scope="col">
                            {/* Username */}
                            <Form.Group className="mb-3" controlId="storeType">
                            <Form.Control 
                            name="storeType"
                            placeholder="상품특성을 입력하세요" 
                            required="" 
                            {...register('storeType', {
                              required: true,
                            })}
                            />
                            </Form.Group>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className='textCenter'>입고지역</th>
                        <th scope="col">
                            {/* Username */}
                            <Form.Group className="mb-3" controlId="warehouseArea">
                            <Form.Control 
                            name="warehouseArea"
                            placeholder="입고지역을 입력하세요" 
                            required="" 
                            {...register('warehouseArea', {
                              required: true,
                            })}
                            />
                            </Form.Group>
                        </th>
                    </tr>
                    {/* <tr>
                        <th scope="row" className='textCenter'>작성자</th>
                        <td><input class="form-control"></input></td>
                    </tr>
                    <tr>
                        <th scope="row" className='textCenter'>작성일</th>
                        <td><input class="form-control"></input></td>
                    </tr> */}
                </Table>
                <div>
                    <div className="new-expense__actions">
                        <button type="button" onClick={props.onCancel}>
                            취소
                        </button>
                        <button type="submit">작성</button>
                    </div>
                    </div>
                
                </Form>}
            </Card.Body>
        </Card>
    </Col>
    // <form onSubmit={submitHandler}>
    //   <div className="new-expense__controls">
    //     <label htmlFor="company">회사명</label>
    //     <input type="text" id="company" ref={companyRef} />
    //     <div className="new-expense__controls">
    //       <label htmlFor="phone">연락처</label>
    //       <input type="text" id="phone" ref={phoneRef} />
    //     </div>
    //   </div>
    //   <div className="new-expense__controls">
    //     <label htmlFor="productName">상품명</label>
    //     <input type="text" id="productName" ref={productNameRef} />
    //     <div className="new-expense__controls">
    //       <label htmlFor="storing_quantity">상품수량</label>
    //       <input
    //         type="number"
    //         id="storing_quantity"
    //         ref={storing_quantityRef}
    //       />
    //     </div>
    //     <div className="new-expense__controls">
    //       <label htmlFor="classification">상품분류</label>
    //       <input type="text" id="classification" ref={classificationRef} />
    //     </div>
    //     <div className="new-expense__controls">
    //       <label htmlFor="location">보관위치</label>
    //       <input type="text" id="location" ref={locationRef} />
    //     </div>
    //     <div className="new-expense__controls">
    //       <label htmlFor="pallet_quantity">Pallet.수량</label>
    //       <input type="number" id="pallet_quantity" ref={pallet_quantityRef} />
    //     </div>
    //     <div className="new-expense__controls">
    //       <label htmlFor="pallet_size">Pallet.규격</label>
    //       <input type="number" id="pallet_size" ref={pallet_sizeRef} />
    //     </div>
    //     <div className="new-expense__actions">
    //       <button type="button" onClick={props.onCancel}>
    //         취소
    //       </button>
    //       <button type="submit">작성</button>
    //     </div>
    //   </div>
    // </form>
  );
}

export default AddProducts;
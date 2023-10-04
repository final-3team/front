import React, { useState } from "react";
import './Basic.css'


const Basic = (props) => {
    const [goCompany, setCompany] = useState('');
    const [goPhone, setPhone] = useState('');
    const [goProjectName, setprojectName] = useState('');
    const [gostoringquntity, setstoring_Quantity] = useState('');
    const [goclassfication, setClassfication] = useState('');
    const [golocation, setLocation] = useState('');
    const [gopalletquantity, setpallet_Quantity] = useState('');
    const [gopalletsize, setpallet_Size] = useState('');
    

    const companyChangeHandler = (event) => {
        setCompany(event.target.value);
    };
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };
    const projectNameChangeHandler = (event) => {
        setprojectName(event.target.value);
    };
    const storing_quantityChangeHandler = (event) => {
        setstoring_Quantity(event.target.value);
    };
    const classificationChangeHandler = (event) => {
        setClassfication(event.target.value);
    };
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    };
    const pallet_quantityChangeHandler = (event) => {
        setpallet_Quantity(event.target.value);
    };
    const pallet_sizeChangeHandler = (event) => {
        setpallet_Size(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const estimateData = {
            company: goCompany,
            phone: goPhone,
            projectName: goProjectName,
            storing_quantity: gostoringquntity,
            classification: goclassfication,
            location: golocation,
            pallet_quantity: gopalletquantity,
            pallet_size: gopalletsize,
           
        };
        props.onSaveData(estimateData);
        setCompany('');
        setPhone('');
        setprojectName('');
        setstoring_Quantity('');
        setClassfication('');
        setLocation('');
        setpallet_Quantity('');
        setpallet_Size('');
     

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <label>회사명</label>
                <input
                    type="text"
                    value={goCompany}
                    onChange={companyChangeHandler}>
                </input>
                <div className="new-expense__controls">
                    <label>연락처</label>
                    <input
                        type="text"
                        value={goPhone}
                        onChange={phoneChangeHandler}>
                    </input>
                </div>
               
            </div>
            <div className="new-expense__controls">
                <label>상품명</label>
                <input
                    type="text"
                    value={goProjectName}
                    onChange={projectNameChangeHandler}>
                </input>
                <div className="new-expense__controls">
                    <label>상품수량</label>
                    <input
                        type="number"
                        value={gostoringquntity}
                        onChange={storing_quantityChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__controls">
                    <label>상품분류</label>
                    <input
                        type="text"
                        value={goclassfication}
                        onChange={classificationChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__controls">
                    <label>보관위치</label>
                    <input
                        type="text"
                        value={golocation}
                        onChange={locationChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__controls">
                    <label>Pallet.수량</label>
                    <input
                        type="number"
                        value={gopalletquantity}
                        onChange={pallet_quantityChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__controls">
                    <label>Pallet.규격</label>
                    <input
                        type="number"
                        value={gopalletsize}
                        onChange={pallet_sizeChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>취소</button>
                    <button type="submit">작성</button>
                </div>

            </div>
        </form>

    )


};



export default Basic;

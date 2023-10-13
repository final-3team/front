"use client";
import React, { useState } from "react";
import "./page.css";
import { makePdf } from "sub-components";
import { ContentsPdf } from "sub-components";
import ProjectsData from "data/dashboard/ProjectsData";

const Contract = () => {
  const [datas, setData] = useState(ProjectsData);
  const addHandler = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
  };

  const pdf = makePdf();

  const onClick = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };

  return (
    <div className="div_container">
      <div className="div_paper">
        <div>
          <div>
            <h1>계약서</h1>
            <p>우리 계약했다.</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div>
            <p>견적사항</p>
            <ContentsPdf items={datas} />
          </div>
          <div>
            <br />
            <br />
            <br />
            <div>
              <p>
                대표자: <button>전자서명 첨부</button>
              </p>
            </div>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <a href="/pages/current/contract">계약 완료</a>
          </div>
        </div>
      </div>
      <button onClick={onClick}>pdf로 보기</button>
    </div>
  );
};

export default Contract;

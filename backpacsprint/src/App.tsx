import React, { useState } from "react";
import styled from "styled-components";

function App() {
  return (
    <CodeTestWrap>
      <CardUiWrap>
        <div className="head">1. 카드 UI</div>
        <CardUi>
          <div className="">
            <img></img>
            <div className="cardTitle">
              <div>Card Label</div>
              <div>Card Title</div>
              <span>Hilight</span>
              <span>cross oust</span>
            </div>
            <div className="cardContent">
              <div className="cardStar">여기는 별점</div>
              <div className="cardText">여기는 텍스트</div>
            </div>
          </div>
        </CardUi>
      </CardUiWrap>
      <TextUiWrap>
        <div className="head">2. 입력 폼 UI</div>
        <TextUi>
          <input type="text" placeholder="내용을 입력하세요"></input>
          <button>저장</button>
        </TextUi>
      </TextUiWrap>
    </CodeTestWrap>
  );
}

export default App;

const CodeTestWrap = styled.div``;

const CardUiWrap = styled.div``;

const CardUi = styled.div`
  width: 20%;
  height: 20%;
  border: solid 1px;
  .cardTitle {
    border-bottom: solid 1px;
  }
`;

const TextUiWrap = styled.div``;

const TextUi = styled.div``;

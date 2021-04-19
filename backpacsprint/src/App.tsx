import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [maxLength, setMaxLength] = useState<number>(500);
  const handleInput = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <CodeTestWrap>
      <CardUiWrap>
        <div className="head">1. 카드 UI</div>
        <CardUi>
          <div className="">
            <img className="testPicture" src="../images/IMG_7448.jpg"></img>
            <div className="cardTitle">
              <div>Card Label</div>
              <div>Card Title</div>
              <span>Hilight</span>
              <span>cross out</span>
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
          <textarea
            className="inputBox"
            placeholder="내용을 입력해주세요"
            onKeyUp={(e) => handleInput(e)}
          />
          <span className="length">{maxLength}</span>
        </TextUi>
        <button>저장</button>
        <TextUi>
          <textarea
            className="inputBox"
            placeholder="내용을 입력해주세요"
            onKeyUp={(e) => handleInput(e)}
            disabled
          />
          <span className="length">{maxLength}</span>
        </TextUi>
        <TextUi>
          <textarea
            className="inputBox"
            placeholder="내용을 입력해주세요"
            onKeyUp={(e) => handleInput(e)}
            readOnly
          />
          <span className="length">{700 - maxLength}</span>
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
  border: solid 1px gray;
  .cardTitle {
    border-bottom: solid 1px;
  }
  .testPicture {
    width: 100%;
  }
`;

const TextUiWrap = styled.div``;

const TextUi = styled.div`
  width: 66%;
  height: 70px;
  border: 1px solid;
  .inputBox {
    border: none;
    width: 99%;
    height: 45px;
    resize: none;
  }
  .length {
    float: right;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState({
    common: "",
    disabled: "",
    readOnly: "여기는 읽기전용입니다.",
  });
  const [maxLength, setMaxLength] = useState<number>(500);
  const handleInput = (e: any, key: string) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, [key]: value });
  };

  return (
    <CodeTestWrap>
      <CardUiWrap>
        <div className="head">1. 카드 UI</div>
        <CardFlex>
          <CardUi>
            <img className="testPicture" src="../images/IMG_7448.jpg"></img>
            <div className="cardTitleArea">
              <div className="cardLabel">Card Label</div>
              <div className="cardTitle">Card Title</div>
              <span className="hilight">Hilight</span>
              <span className="crossOut">cross out</span>
            </div>
            <div className="cardContent">
              <div className="cardStar">여기는 별점</div>
              <div className="cardText">여기는 텍스트</div>
            </div>
          </CardUi>
          <CardUi>
            <img className="testPicture" src="../images/IMG_7448.jpg"></img>
            <div className="cardTitleArea">
              <div className="cardLabel">Card Label</div>
              <div className="cardTitle">Card Title</div>
              <span className="hilight">Hilight</span>
              <span className="crossOut">cross out</span>
            </div>
            <div className="cardContent">
              <div className="cardStar">여기는 별점</div>
              <div className="cardText">여기는 텍스트</div>
            </div>
          </CardUi>
          <CardUi>
            <img className="testPicture" src="../images/IMG_7448.jpg"></img>
            <div className="cardTitleArea">
              <div className="cardLabel">Card Label</div>
              <div className="cardTitle">Card Title</div>
              <span className="hilight">Hilight</span>
              <span className="crossOut">cross out</span>
            </div>
            <div className="cardContent">
              <div className="cardStar">여기는 별점</div>
              <div className="cardText">여기는 텍스트</div>
            </div>
          </CardUi>
          <CardUi>
            <div className="cardHorizon">
              <img className="testPicture" src="../images/IMG_7448.jpg"></img>
              <div className="cardRight">
                <div className="cardTitleArea">
                  <div className="cardLabel">Card Label</div>
                  <div className="cardTitle">Card Title</div>
                  <span className="hilight">Hilight</span>
                  <span className="crossOut">cross out</span>
                </div>
                <div className="cardContent">
                  <div className="cardStar">여기는 별점</div>
                  <div className="cardText">여기는 텍스트</div>
                </div>
              </div>
            </div>
          </CardUi>
        </CardFlex>
      </CardUiWrap>
      <TextUiWrap>
        <div className="head">2. 입력 폼 UI</div>
        <TextFlex>
          <TextUi>
            <textarea
              className="inputBox"
              placeholder="내용을 입력해주세요"
              onKeyUp={(e) => handleInput(e, "common")}
            />
            <span className="length">
              {maxLength - inputValue.common.length}
            </span>
          </TextUi>
          <button>저장</button>
        </TextFlex>
        <TextUi>
          <textarea
            className="inputBox disabled"
            value="조건을 확인해주세요"
            onKeyUp={(e) => handleInput(e, "disabled")}
            disabled
          />
          <span className="length">{maxLength}</span>
        </TextUi>
        <TextUi className="readOnly">
          <textarea
            className="inputBox readOnly"
            value="여기는 읽기전용입니다."
            readOnly
          />
          <span className="length">
            {maxLength - inputValue.readOnly.length}
          </span>
        </TextUi>
      </TextUiWrap>
    </CodeTestWrap>
  );
}

export default App;

const CodeTestWrap = styled.div``;

const CardUiWrap = styled.div``;

const CardFlex = styled.div`
  display: flex;
`;

const CardUi = styled.div`
  width: 15%;
  height: 20%;
  border: solid 1px gray;
  .cardTitleArea {
    border-bottom: solid 1px;
  }
  .testPicture {
    width: 100%;
  }
  .cardHorizon {
    display: flex;
  }
  .cardRight {
    border: 1px solid;
  }
  .hilight {
    color: red;
  }
  .crossOut {
    text-decoration: line-through;
  }
`;

const TextUiWrap = styled.div`
  .readOnly {
    background: gray;
  }
`;

const TextFlex = styled.div`
  display: flex;
`;

const TextUi = styled.div`
  margin-bottom: 10px;
  width: 66%;
  height: 70px;
  border: 1px solid;
  .inputBox {
    border: none;
    width: 99%;
    height: 45px;
    resize: none;
  }
  .disabled {
    color: red;
  }

  .length {
    float: right;
  }
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarRating from "./components/StarRating";

function App() {
  const [inputValue, setInputValue] = useState({
    common: "",
    disabled: "",
    readOnly: "여기는 읽기전용입니다.",
  });

  const [savedInput, savingInput] = useState<string>("");

  const [checkText, setCheckText] = useState<boolean>(false);

  const [maxLength, setMaxLength] = useState<number>(500);

  const handleInput = (e: any, key: string) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, [key]: value });
  };

  useEffect(() => {
    if (inputValue.common !== savedInput) {
      setCheckText(true);
    }
  }, [inputValue.common]);

  useEffect(() => {
    if (maxLength < inputValue.common.length) {
      alert("주어진 글자수를 초과하였습니다");
    }
  }, [inputValue.common]);

  const handleSave = (value: string) => {
    savingInput(value);
    setCheckText(false);
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
              <StarRating />
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
              <StarRating />
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
              <div className="cardText">여기는 텍스트</div>
            </div>
          </CardUi>
          <CardUi>
            <div className="cardHorizon">
              <img
                className="testPicture typeFlex"
                src="../images/IMG_7448.jpg"
              ></img>
              <div className="cardRight">
                <div className="cardTitleArea">
                  <div className="cardLabel">Card Label</div>
                  <div className="cardTitle">Card Title</div>
                  <span className="hilight">Hilight</span>
                  <span className="crossOut">cross out</span>
                </div>
                <div className="cardContent">
                  <StarRating />
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
              {maxLength > inputValue.common.length
                ? maxLength - inputValue.common.length
                : 0}
            </span>
          </TextUi>
          <button
            id={!checkText ? "saved" : "saving"}
            onClick={() => handleSave(inputValue.common)}
          >
            저장
          </button>
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
            {maxLength > inputValue.readOnly.length
              ? maxLength - inputValue.readOnly.length
              : 0}
          </span>
        </TextUi>
      </TextUiWrap>
    </CodeTestWrap>
  );
}

export default App;

const CodeTestWrap = styled.div``;

const CardUiWrap = styled.div`
  margin: 10px 0 10px 10px; ;
`;

const CardFlex = styled.div`
  display: flex;
`;

const CardUi = styled.div`
  width: 15%;
  height: 20%;
  border: solid 1px gray;
  margin-right: 10px;

  .cardTitleArea {
    border-bottom: solid 1px;
    padding-left: 10px;
  }
  .cardLabel {
    color: rgb(153, 153, 153);
    margin-bottom: 10px;
  }
  .cardTitle {
    margin-bottom: 10px;
  }

  .testPicture {
    width: 100%;
  }
  .cardHorizon {
    display: -webkit-box;
  }
  .cardRight {
    border: 1px solid;
    width: 100%;
  }
  .hilight {
    color: red;
    margin-right: 10px;
  }
  .crossOut {
    text-decoration: line-through;
  }
`;

const TextUiWrap = styled.div`
  margin: 10px 0 10px 10px;
  .readOnly {
    background: gray;
  }
  #saved {
    height: 74px;
  }
  #saving {
    height: 74px;
    color: rgb(000, 102, 000);
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

import React, { useState } from "react";
import styled from "styled-components";
import Reply from "./reply";
function ReplyContainer() {
  const [overFlowY, setOverFlowY] = useState("hidden");
  const [showButton, setShowButton] = useState(false);
  const expand = () => {
    setOverFlowY("visible");
  };
  const focusEvent = () => {
    setShowButton(!showButton);
    console.log("hi");
  };
  return (
    <ReplyContainerContainer>
      <ReplyComposeContainer>
        <IconImage src="mockImage/icon.jpeg" />
        <div style={{ width: "96%" }}>
          <Compose
            placeholder="댓글을입력해주세요"
            onFocus={focusEvent}
            onBlur={focusEvent}
          ></Compose>
          <Line />
          {showButton ? (
            <ButtonContainer>
              <Button>댓글</Button>
              <Button>취소</Button>
            </ButtonContainer>
          ) : null}
        </div>
      </ReplyComposeContainer>

      <Reply />
      <Reply />
      <Reply />
      <Reply />
    </ReplyContainerContainer>
  );
}
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
  margin-left: 15px;
  margin-right: 15px;
`;
const ButtonContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  border: none;
  margin-right: 10px;
  // color: white;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
const Line = styled.img`
  width: 96%;
  height: 4px;
  background-color: black;
`;
const Compose = styled.textarea`
  :focus {
    outline: none;
  }
  overflow: hidden;
  resize: none;
  width: 100%;
  border: none;
  font-size: 1rem;
`;
const ReplyContainerContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 780px;
  margin: 20px auto 0 auto;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const ReplyComposeContainer = styled.div`
  // border: 1px solid black;
  margin-top: 30px;
  display: flex;
`;

export default ReplyContainer;

import DaumPostcode from "react-daum-postcode";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
interface Props {
  onComplete: (data: any) => void;
  closePostHandler: () => void;
}
function DaumAdr(props: Props) {
  // const colseHandler = (data: any) => {
  //   setCurAddr(data.address);
  // };
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${0}px;
    overflow-y: scroll;`;
    // width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <Modalcontainer>
      {" "}
      <CloseButton onClick={props.closePostHandler}>닫기x</CloseButton>
      <DaumPostcode
        style={{ width: 420, height: 420 }}
        onComplete={props.onComplete} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
      />
    </Modalcontainer>
  );
}
const Modalcontainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99;
`;
const CloseButton = styled.div`
  margin-left: 400px;
  color: white;
  cursor: pointer;
`;
export default DaumAdr;

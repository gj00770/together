import React from "react";
import styled from "styled-components";

function Login({ login }: any) {
  return (
    <LoginModalRoot>
      <LoginContainer>
        <NameCloseConrainer>
          <Name>together</Name>
          <Close onClick={login}>X</Close>
        </NameCloseConrainer>
        <Summary>공동구매 앱 together에 오신걸 환영합니다!</Summary>
        <Summary>로그인하여서 together를 사용해보세요!</Summary>
        <AuthContianer>
          <Logo src="mockImage/google.png" />
          <AuthName>구글로로그인</AuthName>
        </AuthContianer>
        <AuthContianer>
          <Logo src="mockImage/kakao.png" />
          <AuthName>카카오로로그인</AuthName>
        </AuthContianer>
        <AuthContianer>
          <Logo src="mockImage/naver.png" />
          <AuthName>네이버로로그인</AuthName>
        </AuthContianer>
      </LoginContainer>
    </LoginModalRoot>
  );
}
const LoginModalRoot = styled.div`
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
`;
const LoginContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: white;
  font-size: 24px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -400px;
  max-height: calc(100vh - 150px);
  @media screen and (max-width: 700px) {
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 0;
    top: 0%;
    left: 0%;
  }
`;

const NameCloseConrainer = styled.div`
  margin-bottom: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Name = styled.div``;
const Close = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
`;
const Summary = styled.div`
  width: 370px;
  height: 140px;
  font-size: 24px;
`;
const AuthContianer = styled.div`
  display: flex;
  position: relative;
  width: 360px;
  height: 50px;
  border: 3px solid #4aa8d8;
  border-radius: 40px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  position: absolute;
  left: 10px;
`;
const AuthName = styled.div``;
export default Login;

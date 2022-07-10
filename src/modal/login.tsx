import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "react-query";
import useSetClientState from "../hook/useSetClientState";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
//if (typeof window !== "undefined") {
//here `window` is available
if (typeof window !== "undefined") {
  // Client-side-only code
  const { naver } = window as any;
}

function Login({ login }: any) {
  //}
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_ID,
      callbackUrl: process.env.NEXT_PUBLIC_REDIRECT_URL,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 1, height: "36" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };
  const [current, setCurrent] = useState("");
  console.log("2323", useSetClientState);
  const setClientState = useSetClientState("username");

  const handleClick = () => {
    setCurrent("카카오");
    setClientState("zkzkdh");
  };
  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${location.href}&response_type=code`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <LoginModalRoot>
      <LoginContainer>
        <NameCloseConrainer>
          <Name>together</Name>
          <Close onClick={login}>X</Close>
        </NameCloseConrainer>
        <Summary>공동구매 앱 together에 오신걸 환영합니다!</Summary>
        <Summary>로그인하여서 together를 사용해보세요!</Summary>
        {/* <AuthContianer onClick={() => setClientState("네이버")}>
          <Logo src="mockImage/google.png" />
          <AuthName>구글로로그인</AuthName>
        </AuthContianer> */}
        <AuthContianer>
          <a href={KAKAO_AUTH_URL} onClick={() => setClientState("카카오")}>
            <Logo src="mockImage/kakao.png" />

            <AuthName>카카오로로그인</AuthName>
          </a>
        </AuthContianer>

        <AuthContianer>
          <LogoNaver>
            <div id="naverIdLogin" />
          </LogoNaver>
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
  position: absolute;
  left: 10px;
`;
const LogoNaver = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
`;
const AuthName = styled.div``;
export default Login;

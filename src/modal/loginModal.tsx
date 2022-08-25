import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CloseButton from "../svgs/x-solid.svg";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "react-query";
//import useSetClientState from "../hooks/useSetClientState";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { PortalConsumer } from "../contexts/PortalProvider";
import { useModal } from "../contexts/ModalProvider";

//if (typeof window !== "undefined") {
//here `window` is available
if (typeof window !== "undefined") {
  // Client-side-only code
  const { naver } = window as any;
}
interface Props {
  onClose: () => void;
}
function LoginModal({ onClose }: Props) {
  //}gg
  const initializeNaverLogin = () => {
    const { naver } = window as any;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_ID,
      callbackUrl: process.env.NEXT_PUBLIC_REDIRECT_URL,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 1, height: "36" }, //버튼의 스타일, 타입, 크기를 지정
    });

    naverLogin.init();
  };
  const [current, setCurrent] = useState("");
  //const setClientState = useSetClientState("username");

  const handleClick = () => {
    setCurrent("카카오");
    // setClientState("zkzkdh");
  };
  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${location.href}&response_type=code`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

  useEffect(() => {
    initializeNaverLogin();
    document.body.style.cssText = `
    position: fixed; 
    top: -${0}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <LoginModalRoot>
      <LoginContainer>
        <NameCloseConrainer>
          <Name>Together</Name>
          <CloseButton
            onClick={onClose}
            fill="grey"
            width="12px"
            style={{
              position: "absolute",
              right: "12px",
              top: "12px",
              cursor: "pointer",
            }}
          />
        </NameCloseConrainer>
        <Summary>공동구매를 위한 커리어 플랫폼, Together!!</Summary>
        <SummaryDetail>
          원하시는 아이템을 공공구매 아이템으로 더욱더 쉽게 만나보실수있습니다.
        </SummaryDetail>
        {/* <AuthContianer onClick={() => setClientState("네이버")}>
          <Logo src="mockImage/google.png" />
          <AuthName>구글로로그인</AuthName>
        </AuthContianer> */}
        <AuthContianer href={KAKAO_AUTH_URL}>
          <Logo src="mockImage/kakao.png" />

          <AuthName>카카오로로그인</AuthName>
        </AuthContianer>

        <AuthContianerNaver>
          <LogoNaver>
            <div id="naverIdLogin" />
          </LogoNaver>
          <AuthName>네이버로로그인</AuthName>
        </AuthContianerNaver>
        <Footer>
          정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다. 포트폴리오용
          입니다.
        </Footer>
      </LoginContainer>
    </LoginModalRoot>
  );
}

const LoginModalRoot = styled.div`
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;
const Footer = styled.div`
  font-size: 12px;
  line-height: 15px;
  width: 340px;
  margin: 30px 0 40px 0;
  color: grey;
`;

const LoginContainer = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
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
  margin-bottom: 80px;
  display: flex;
  width: 100%;
  max-width: 360px;
  justify-content: center;
`;
const Name = styled.div`
  font-family: InkLipquid;
  color: #4aa8d8;
  font-size: 32px;
  margin-top: 12px;
`;

const Summary = styled.div`
  width: 340px;
  height: 120px;
  font-size: 26px;
  font-family: NotoSansBold;
  word-break: break-word;
`;
const SummaryDetail = styled.div`
  text-align: center;
  word-break: break-word;
  line-height: 33px;
  color: grey;
  height: 100px;
  width: 280px;
  font-size: 16px;
  font-family: NotoSans;
`;
const AuthContianer = styled.a`
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  position: relative;
  width: 360px;
  height: 50px;
  border: 3px solid #4aa8d8;
  border-radius: 40px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
const AuthContianerNaver = styled.div`
  cursor: pointer;
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
  margin-top: 5px;
  position: absolute;
  left: 10px;
`;
const AuthName = styled.div`
  font-family: NotoSans;
`;
export default LoginModal;
export function useLoginModal() {
  const { open, close } = useModal();
  return useCallback(() => open(<LoginModal onClose={close} />), [open, close]);
}

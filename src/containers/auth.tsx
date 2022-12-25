import axios from "axios";
//import ComboBox from '../components/combobox'
import router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

async function naverLogin(accessToken: string | null) {
  const token = await axios.post("http://13.209.132.48/user/naver-login", {
    accessToken: accessToken,
  });

  localStorage.setItem("accessToken", token.data);
}
async function kakaoLogin(accessToken: string | null) {
  const token = await axios.post("http://13.209.132.48/user/kakao-login", {
    accessToken: accessToken,
  });

  localStorage.setItem("accessToken", token.data);
}
function doSome() {
  const test = localStorage.getItem("accessToken");
  axios.post(
    "http://13.209.132.48/user/test",
    {},
    { headers: { Authorization: `Bearer ${test}` } }
  );
}
function Auth() {
  const [islogin, setIsLogin] = useState(true);
  const login = () => {
    setIsLogin(!islogin);
  };

  useEffect(() => {
    //setClientState("zkzkdh");

    if (window.location.href.includes("access_token")) {
      const accessToken =
        //  "null" ||
        new URLSearchParams(window.location.href.split("#")[1]).get(
          "access_token"
        );

      window.localStorage.setItem(
        "token",
        window.location.href.split("=")[1].split("&")[0] ?? "none"
      );

      router.push("/");
      naverLogin(accessToken).then(doSome);
    } else if (window.location.href.includes("code")) {
      const accessToken =
        //  "null" ||
        new URLSearchParams(window.location.href.split("?")[1]).get("code");
      window.localStorage.setItem(
        "token",
        window.location.href.split("=")[1].split("&")[0] ?? "none"
      );

      kakaoLogin(accessToken).then(doSome);

      router.push("/");
    }
  }, []);
  return <MainContainer>로딩중입니다~~~</MainContainer>;
}
const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Auth;

import axios from "axios";
//import ComboBox from '../components/combobox'
import router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

async function naverLogin(accessToken: string) {
  console.log(accessToken);
  const token = await axios.post("http://localhost:5000/user/naver-login", {
    accessToken: accessToken,
  });

  localStorage.setItem("accessToken", token.data);
}
async function kakaoLogin(accessToken: string) {
  console.log(accessToken);
  const token = await axios.post("http://localhost:5000/user/kakao-login", {
    accessToken: accessToken,
  });

  localStorage.setItem("accessToken", token.data);
}
function doSome() {
  const test = localStorage.getItem("accessToken");
  axios.post(
    "http://localhost:5000/user/test",
    {},
    { headers: { Authorization: `Bearer ${test}` } }
  );
}
function Auth() {
  const [islogin, setIsLogin] = useState(true);
  const login = () => {
    setIsLogin(!islogin);
    console.log(login);
  };

  useEffect(() => {
    //setClientState("zkzkdh");
    console.log("4544", window.location.href);
    console.log(localStorage.getItem("accessToken"));
    console.log(
      "access",
      new URLSearchParams(window.location.href.split("#")[1]).get(
        "access_token"
      )
    );

    if (window.location.href.includes("access_token")) {
      const accessToken =
        //  "null" ||
        new URLSearchParams(window.location.href.split("#")[1]).get(
          "access_token"
        );
      console.log("5555555", window.location.href);
      console.log("5555555", accessToken);
      window.localStorage.setItem(
        "token",
        window.location.href.split("=")[1].split("&")[0] ?? "none"
      );

      router.push("/");
      naverLogin(accessToken).then(doSome);
    } else if (window.location.href.includes("code")) {
      console.log("hjere");
      const accessToken =
        //  "null" ||
        new URLSearchParams(window.location.href.split("?")[1]).get("code");
      console.log("232323", accessToken);
      window.localStorage.setItem(
        "token",
        window.location.href.split("=")[1].split("&")[0] ?? "none"
      );

      kakaoLogin(accessToken);
      //   router.push("/");
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

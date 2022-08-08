import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import useClientValue from "../hooks/useClientValue";
//import userPersistence from "../hook/usePersistentContext";
function Banner({ login }: any) {
  const username = useClientValue("username", "");
  console.log("auth...", username);
  console.log(login);
  const [isLogin, setIsLogin] = useState(true);
  //const [asddd] = userPersistence("true");
  return (
    <BannerContainer>
      <SignUpSignInContainer>
        <SignUp>회원가입</SignUp>
        <SignIn>로그인</SignIn>
      </SignUpSignInContainer>
      <LogoContainer></LogoContainer>
    </BannerContainer>
  );
}
const BannerContainer = styled.div`
  z-index: 99;
  width: 100vw;
  background-color: #4aa8d8;
  height: 50px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
`;
const SignUpSignInContainer = styled.div``;
const SignUp = styled.div``;
const SignIn = styled.div``;
const LogoContainer = styled.div``;

export default Banner;

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

function Header({ login }: any) {
  console.log(login);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <HeaderContainer>
      {/* <div onClick={login}>진짜로그인 </div>
      <Link href="/mypage">ㅁㄴㅇㄴㅁ</Link>
      <Logo>
        <Link href="/">Together</Link>
      </Logo>
      <LoginSignUpContainer>
        <Link href="/product">
          <Login>로그인</Login>
        </Link>
      </LoginSignUpContainer>
      <Link href="/goods">
        <Login>goods</Login>
      </Link> */}
      <Logo>
        <Link href="/">Together</Link>
      </Logo>
      {isLogin ? (
        <Link href="/mypage"> 마이페이지 </Link>
      ) : (
        <Login onClick={login}>로그인 </Login>
      )}
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  background-color: #4aa8d8;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
`;
const Logo = styled.div`
  font-size: 24px;
  color: white;
`;
const LoginSignUpContainer = styled.div`
  display: flex;
  color: white;
  font-size: 18px;
  margin-right: 80px;
`;
const Login = styled.div`
  color: white;
`;
const SignUp = styled.div``;
export default Header;

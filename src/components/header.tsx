import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import useClientValue from "../hook/useClientValue";
import HamburgerIcon from "../svgs/bars-solid.svg";
import ComboBox from "./comboBox";
import MenueList from "../modal/menueList";
//import userPersistence from "../hook/usePersistentContext";
function Header({ login }: any) {
  const username = useClientValue("username", "");
  console.log("auth...", username);
  console.log(login);
  const [isLogin, setIsLogin] = useState(true);
  //const [asddd] = userPersistence("true");
  const [mouseOver, setMoseOver] = useState(false);
  const onMouseHandler = () => {
    console.log("his");
    // setBorder("2px 2px 2px 2px #D3D3D3");
    //   setOpacity("0.5");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setMoseOver(true);
  };

  const outMouseHandler = () => {
    // setOpacity("1.0");
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };
  return (
    <div>
      {/* <SignUpSignInContainer>
          <Logo>
            <Link href="/">Together</Link>
            <div>{username}</div>{" "}
          </Logo>
          <SignIn>회원가입</SignIn>
          <SignIn>로그인</SignIn>
        </SignUpSignInContainer> */}
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
        <HamburgerContaienr
          onMouseEnter={onMouseHandler}
          onMouseLeave={outMouseHandler}
        >
          <HamburgerIcon width="28" />
          {mouseOver ? <MenueList /> : null}
        </HamburgerContaienr>

        <RightIconContainer>
          <ComboBox />
          <HamburgerContaienr>
            <Cart src={`mockImage/shopping-cart.png`} />
          </HamburgerContaienr>

          <HamburgerContaienr>
            {isLogin ? (
              <Link href="/mypage"> 마이페이지</Link>
            ) : (
              <Login onClick={login}>로그인 </Login>
            )}
          </HamburgerContaienr>
        </RightIconContainer>
      </HeaderContainer>
    </div>
  );
}
const SignUpSignInContainer = styled.div``;
const SignIn = styled.div``;
const HeaderContainer = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  //background-color: #4aa8d8;
  background-color: white;
  height: 50px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 24px;
  color: black;
`;
const HamburgerContaienr = styled.div`
  display: flex;
  margin-left: 20px;
`;
// const HamburgerContaienr = styled.div`
//   display: flex;
//   margin-left: 20px;
// `;
// const HamburgerContaienr = styled.div`
//   display: flex;
//   margin-left: 20px;
// `;
const Login = styled.div`
  color: white;
`;
const RightIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
const Cart = styled.img`
  width: 40px;
`;
const Heart = styled.img`
  width: 40px;
`;
export default Header;

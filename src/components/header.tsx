import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
//import useClientValue from "../hooks/useClientValue";
import { useUser } from "../hooks/useUser";
import LoginModal from "../modal/loginModal";
import MenueList from "../modal/menueList";
import MypageLogout from "../modal/MypageLogout";
import DownArrow from "../svgs/caret-down-solid.svg";
import HamburgerIcon from "../svgs/bars-solid.svg";
import ComboBox from "./comboBox";
//import userPersistence from "../hook/usePersistentContext";
function Header() {
  //  const username = useClientValue("username", "");
  //console.log("auth...", username);
  const { data: user, refetch: refetch } = useUser();
  console.log(user);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mouseOver, setMoseOver] = useState(false);
  const [mouseOverUser, setMoseOverUser] = useState(false);
  const onMouseHandler = () => {
    setMoseOver(true);
  };

  const outMouseHandler = () => {
    setMoseOver(false);
  };
  const onClose = () => {
    setIsOpenModal(!isOpenModal);
  };
  const onMouseUserHandler = () => {
    setMoseOverUser(true);
  };
  const outMouseUserHandler = () => {
    setMoseOverUser(false);
  };

  return (
    <HeaderContainer>
      {isOpenModal ? <LoginModal onClose={onClose} /> : null}
      <SmallLine>
        {" "}
        {user ? (
          <Name
            onMouseEnter={onMouseUserHandler}
            onMouseLeave={outMouseUserHandler}
          >
            {user.name}님
            <Arrow>
              <DownArrow width="10px" />
            </Arrow>
            {mouseOverUser ? <MypageLogout refetch={refetch} /> : null}
          </Name>
        ) : (
          <Login onClick={() => setIsOpenModal(true)}>로그인 </Login>
        )}
      </SmallLine>
      <FirstHeader>
        <Link href="/">
          <LogoContainer>
            <Logo>TOGETHER</Logo>
            <KoreanLogo>투게더</KoreanLogo>
          </LogoContainer>
        </Link>

        <ComboBox />
        <HamburgerContaienr>
          <Cart src={`mockImage/shopping-cart.png`} />
        </HamburgerContaienr>
      </FirstHeader>
      <SecondHeader>
        {" "}
        <MenueContainer
          onMouseEnter={onMouseHandler}
          onMouseLeave={outMouseHandler}
        >
          <HamburgerIcon width="28" />
          <Category>카테고리</Category>
          {mouseOver ? <MenueList /> : null}
        </MenueContainer>
        <CategoryContainer>
          <Option>신상품</Option>
          <Option>베스트</Option>
          <Option>특가</Option>
        </CategoryContainer>
        <HamburgerContaienr></HamburgerContaienr>
      </SecondHeader>
    </HeaderContainer>
  );
}
const FirstHeader = styled.div`
  display: flex;
  max-width: 1100px;
  width: 90vw;
  justify-content: space-between;
`;
const CategoryContainer = styled.div`
  font-family: NotoSans;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: space-between;
    width: 70%;
  }
`;
const Option = styled.div`
  font-family: NotoSans;
  font-size: 22px;
  width: 150px;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 70px;
  }
`;
const Category = styled.div`
  margin-left: 15px;
  font-family: NotoSans;
  font-size: 22px;
`;
const SecondHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  max-width: 1100px;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
`;

const MenueContainer = styled.div`
  display: flex;
  position: relative;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  display: flex;
`;
const SmallLine = styled.div`
  max-width: 1100px;
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const HeaderContainer = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  z-index: 99;
  width: 100vw;
  //background-color: #4aa8d8;
  background-color: white;
  height: 160px;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 39px;
  color: #4aa8d8;
  font-family: InkLipquid;
`;
const KoreanLogo = styled.div`
  margin-left: 15px;
  font-size: 32px;
  color: #4aa8d8;
  font-family: NotoSans;
`;
const HamburgerContaienr = styled.div``;
const Arrow = styled.div`
  margin-top: 3px;
  margin-left: 12px;
`;
const Login = styled.div``;

const Cart = styled.img`
  width: 40px;
`;
const Name = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
`;
export default Header;

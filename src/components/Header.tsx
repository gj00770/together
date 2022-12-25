import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import useClientValue from "../hooks/useClientValue";
import { useUser } from "../hooks/useUser";
import CartItemAlarm, {
  useCartItemAlarm,
  useCartItemAlarmClose,
} from "../modal/cartItemAlarm";
import { useLoginModal } from "../modal/loginModal";
import MenueList from "../modal/menueList";
import MypageLogout from "../modal/MypageLogout";
import HamburgerIcon from "../svgs/bars-solid.svg";
import DownArrow from "../svgs/caret-down-solid.svg";
import ComboBox from "./ComboBox";
import ComboBoxScroll from "./ComboBoxScroll";

function Header() {
  const { data: user, refetch: refetch } = useUser();
  const router = useRouter();
  const [mouseOver, setMoseOver] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [mouseOverUser, setMoseOverUser] = useState(false);
  const onMouseHandler = () => {
    setMoseOver(true);
  };

  const outMouseHandler = () => {
    setMoseOver(false);
  };

  const onMouseUserHandler = () => {
    setMoseOverUser(true);
  };
  const outMouseUserHandler = () => {
    setMoseOverUser(false);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     refetch();
  //   }, 500);
  // }, [user]);

  useEffect(() => {
    // scroll event listener 등록
    setTimeout(() => {
      refetch();
    }, 500);
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 104) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);
  const openLoginModal = useLoginModal();

  return (
    <HeaderContainer>
      {/* {isOpenModal ? <LoginModal onClose={onClose} /> : null} */}

      {isScroll ? (
        <ScrollHeader>
          {" "}
          <SecondHeader>
            <MenueContainer
              onMouseEnter={onMouseHandler}
              onMouseLeave={outMouseHandler}
            >
              <HamburgerIcon width="18" />
              <Category>카테고리</Category>
              {mouseOver ? <MenueList /> : null}
            </MenueContainer>
            <CategoryContainer>
              <Option onClick={() => router.push(`/goods/?status=newItem`)}>
                신상품
              </Option>
              <Option onClick={() => router.push(`/goods/?status=best`)}>
                베스트
              </Option>
              <Option onClick={() => router.push(`/goods/?status=bestDeal`)}>
                {" "}
                특가
              </Option>
            </CategoryContainer>
            <ComboBoxScroll />
            {user ? (
              <Link href="/cartItem">
                <CartScroll src={`mockImage/shopping-cart.png`} />
              </Link>
            ) : (
              <Login onClick={() => openLoginModal()}>로그인 </Login>
            )}
          </SecondHeader>
        </ScrollHeader>
      ) : null}

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
        ) : null}
      </SmallLine>
      <FirstHeader>
        <LogoComboContainer>
          <Link href="/">
            <LogoContainer>
              <Logo>TOGETHER</Logo>
              <KoreanLogo>투게더</KoreanLogo>
            </LogoContainer>
          </Link>

          <ComboBox />
        </LogoComboContainer>

        <div style={{ position: "relative" }}>
          {user ? (
            <Link href="/cartItem">
              <Cart src={`mockImage/shopping-cart.png`} />
            </Link>
          ) : (
            <Login onClick={() => openLoginModal()}>로그인 </Login>
          )}

          {/* <CartItemAlarm /> */}
        </div>
      </FirstHeader>
      <SecondHeader>
        {" "}
        <MenueContainer
          onMouseEnter={onMouseHandler}
          onMouseLeave={outMouseHandler}
        >
          <HamburgerIcon width="18" />
          <Category>카테고리</Category>
          {mouseOver ? <MenueList /> : null}
        </MenueContainer>
        <CategoryContainer>
          <Option onClick={() => router.push(`/goods/?status=newItem`)}>
            신상품
          </Option>
          <Option onClick={() => router.push(`/goods/?status=best`)}>
            베스트
          </Option>
          <Option onClick={() => router.push(`/goods/?status=bestDeal`)}>
            {" "}
            특가
          </Option>
        </CategoryContainer>
        <HamburgerContaienr></HamburgerContaienr>
      </SecondHeader>
    </HeaderContainer>
  );
}
const FirstHeader = styled.div`
  display: flex;
  max-width: 1050px;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
`;
const LogoComboContainer = styled.div`
  display: flex;
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
  cursor: pointer;
  font-family: NotoSans;
  font-size: 16px;
  width: 150px;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 70px;
  }
`;
const Category = styled.div`
  margin-left: 15px;
  font-family: NotoSans;
  font-size: 16px;
`;
const SecondHeader = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  max-width: 1050px;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-bottom: 8px;
  }
`;
const ScrollHeader = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  background-color: white;
  z-index: 99;
  position: fixed;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  top: 0px;
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
  cursor: pointer;
`;
const SmallLine = styled.div`
  margin-top: 10px;
  max-width: 1100px;
  width: 90vw;
  display: flex;
  justify-content: flex-end;

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
  @media screen and (max-width: 800px) {
    height: 110px;
  }
`;
const Logo = styled.div`
  font-size: 39px;
  color: #4aa8d8;
  font-family: InkLipquid;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
const KoreanLogo = styled.div`
  margin-left: 15px;
  font-size: 32px;
  color: #4aa8d8;
  font-family: NotoSans;
  margin-right: 60px;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    font-size: 22px;
    margin-left: 5px;
  }
`;
const HamburgerContaienr = styled.div``;
const Arrow = styled.div`
  margin-top: 3px;
  margin-left: 12px;
`;
const Login = styled.div`
  cursor: pointer;
`;

const Cart = styled.img`
  width: 28px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    margin-right: 30px;
  }
`;

const CartScroll = styled.img`
  width: 28px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-right: 30px;
  }
`;
const Name = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
`;
export default Header;

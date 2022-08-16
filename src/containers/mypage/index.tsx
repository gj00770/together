import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "./components/UserInfo";
import LikeItemCointainer from "./components/PurchaseItemContainer";
import AdressList from "./components/AdressList";
import ArrowRight from "../../svgs/arrow-right-solid.svg";
import ArrowLeft from "../../svgs/arrow-left-solid.svg";

function MyPage() {
  const [curTab, setCurTab] = useState(TabId.MYPAGE);
  const [isOn2, setisOn] = useState(false);

  isOn2;
  return (
    <MyPageContainer>
      <SliderContainer isOn={isOn2}>
        <TabMenu>
          <Tab>내정보</Tab>
          {Object.values(TabId).map((item) => (
            <TabMenuItem
              onClick={() => {
                setCurTab(item);
                setisOn(true);
              }}
              active={item === curTab}
              key={item}
            >
              {LABEL_BY_TAB[item]}
              <ArrowRight
                width="14px"
                fill={item === curTab ? "#4aa8d8" : null}
              />
            </TabMenuItem>
          ))}
        </TabMenu>
        {/* <MyCartItemContainer /> */}
        <MenueCategory>
          <ArrowContainer onClick={() => setisOn(false)}>
            {" "}
            <ArrowLeft width="32px" />
          </ArrowContainer>
          {CONTENT_BY_TAB[curTab]}
        </MenueCategory>
      </SliderContainer>
    </MyPageContainer>
  );
}

enum TabId {
  MYPAGE = "mypage",
  BUY_LIST = "buyList",
  ADRESS_LIST = "adressList",
}
const LABEL_BY_TAB = {
  [TabId.MYPAGE]: "유저정보",
  [TabId.BUY_LIST]: "구매목록",
  [TabId.ADRESS_LIST]: "주소목록",
};
const CONTENT_BY_TAB = {
  [TabId.MYPAGE]: <UserInfo />,
  [TabId.BUY_LIST]: <LikeItemCointainer />,
  [TabId.ADRESS_LIST]: <AdressList />,
};
const SliderContainer = styled.div<{ isOn: boolean }>`
  display: flex;
  @media screen and (max-width: 800px) {
    width: 100vw;
    position: absolute;
    left: 0;
    transition: transform 0.5s ease;
    // transform:translateX(-100vw);
    transform: ${(props) =>
      props.isOn ? "translateX(-100vw)" : "translateX(0)"};
  }
`;
const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;

  @media screen and (max-width: 800px) {
    width: 100vw;
    position: relative;
    //overflow-x: hidden;
    overflow-y: none;
  }
`;
const Tab = styled.div`
  font-family: NotoSans;
  text-align: left;
  font-size: 36px;
  margin-bottom: 40px;
  @media screen and (max-width: 800px) {
    margin-left: 22px;
  }
`;

const TabMenu = styled.div`
  padding-top: 50px;
  margin-right: 30px;
  display: flex;
  //justify-content: space-around;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
  }
`;
const TabMenuItem = styled.div<{ active: boolean }>`
  font-family: NotoSans;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  //width: 33.3333%;
  width: 200px;
  height: 56px;
  font-size: 14px;
  line-height: 55px;
  border: 1px solid rgb(242, 242, 242);
  background-color: ${(props) => (props.active ? "#fafafa " : "white")};
  color: ${(props) => (props.active ? "#4aa8d8 " : "rgb(102, 102, 102);")};
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 90px;
    line-height: 73px;
  }
`;
const MenueCategory = styled.div`
  @media screen and (max-width: 800px) {
  }
`;
const ArrowContainer = styled.div`
  position: absolute;
  top: 10px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
export default MyPage;

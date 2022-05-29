import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/userInfo";
import MyCartItemContainer from "../components/myCartItemContainer";
import LikeItemCointainer from "../components/likeItemContainer";

function MyPage() {
  const [curTab, setCurTab] = useState(TabId.MYPAGE);
  const [current, setCurrent] = useState("cartItem");
  const [boxShadowMypage, setBoxShadowMypage] = useState(
    "3px 3px 2px 1px rgba(0, 0, 0, 0.3)"
  );
  const [boxShadowCartItem, setBoxShadowCartItem] = useState(
    "3px 3px 2px 1px rgba(0, 0, 0, 0.3)"
  );
  const [boxShadowBuyList, setBoxShadowBuyList] = useState(
    "3px 3px 2px 1px rgba(0, 0, 0, 0.3)"
  );

  const onMouseOverTab = (e: any) => {};
  return (
    <MyPageContainer>
      <TabMenu>
        {Object.values(TabId).map((item) => (
          <TabMenuItem
            onClick={() => setCurTab(item)}
            active={item === curTab}
            key={item}
          >
            {LABEL_BY_TAB[item]}
          </TabMenuItem>
        ))}
      </TabMenu>
      {/* <MyCartItemContainer /> */}
      {CONTENT_BY_TAB[curTab]}
    </MyPageContainer>
  );
}

enum TabId {
  MYPAGE = "mypage",
  CART_ITEM = "cartItem",
  BUY_LIST = "buyList",
}
const LABEL_BY_TAB = {
  [TabId.MYPAGE]: "마이페이지",
  [TabId.CART_ITEM]: "장바구니",
  [TabId.BUY_LIST]: "구매목록",
};
const CONTENT_BY_TAB = {
  [TabId.MYPAGE]: <UserInfo />,
  [TabId.CART_ITEM]: <MyCartItemContainer />,
  [TabId.BUY_LIST]: <LikeItemCointainer />,
};
const MyPageContainer = styled.div`
  margin-top: 80px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  //  background-color: #6FADCF;
  background-color: #f9f9f9;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TabMenuItem = styled.div<{ active: boolean }>`
  margin-top: 32px;
  cursor: pointer;
  width: 30%;
  height: 40px;
  font-size: 22px;
  line-height: 40px;
  border: 0.3px solid #d3d3d3;
  background-color: white;
  box-shadow: ${(props) =>
    props.active
      ? "inset 3px 2px 1px 1px rgba(0, 0, 0, 0.3)"
      : "3px 3px 2px 1px rgba(0, 0, 0, 0.3)"};
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

const ItemContainer = styled.div``;
export default MyPage;

import React, { useState } from "react";
import styled from "styled-components";
// import ItemSummary from '../components/itemSummary'
import ItemSummary from "../components/itemSummary";
import ReplyContainer from "../components/replyContainer";
import SellerInfo from "../components/sellerInfo";
import Summary from "../components/Summary";
// import ReplyContainer from '../components/replyContainer'
// import SellerInfo from '../components/sellerInfo'

function Product() {
  const [curTab, setCurTab] = useState(TabId.ITEM_INFO);

  return (
    <ProductContainer>
      <ImageItemSummaryContainer>
        <Image src="mockImage/mockimage.png" />
        <ItemSummary />
      </ImageItemSummaryContainer>
      <SummaryTab>
        {Object.values(TabId).map((item) => (
          <Tab
            onClick={() => setCurTab(item)}
            active={item === curTab}
            key={item}
          >
            {LABEL_BY_TAB[item]}
          </Tab>
        ))}
      </SummaryTab>
      {CONTENT_BY_TAB[curTab]}
    </ProductContainer>
  );
}

// function Tab() { //추상화

// }

enum TabId {
  ITEM_INFO = "itemInfo",
  REPLY = "reply",
  ASK = "ask",
}
const LABEL_BY_TAB = {
  [TabId.ITEM_INFO]: "삼품정보",
  [TabId.REPLY]: "댓글",
  [TabId.ASK]: "문의사항",
};

//const TABS = [{ id: TabId.ITEM_INFO, label: "삼품정보" }, { id: TabId.REPLY, label: "댓글" }, { id: TabId.ASK, label: "문의사항" }]
const CONTENT_BY_TAB = {
  [TabId.ITEM_INFO]: <Summary />,
  [TabId.REPLY]: <ReplyContainer />,
  [TabId.ASK]: <SellerInfo />,
};

//      키와value 로 이루어집 map 객체를 뜻한다
const SummaryTab = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto 0 auto;
  justify-content: space-between;
  font-size: 24px;
  position: sticky;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Tab = styled.div<{ active: boolean }>`
  width: 32%;
  border: 0.5px solid #d3d3d3;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active
      ? "inset 3px 3px 2px 1px rgba(0, 0, 0, 0.3)"
      : "3px 3px 2px 1px rgba(0, 0, 0, 0.3)"};
`;

const ProductContainer = styled.div`
  padding-top: 20px;
  background-color: white;
`;
const ImageItemSummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: red;
  @media screen and (max-width: 700px) {
    border: none;
  }
`;
// width: 260px;
// height: 200px;
export default Product;

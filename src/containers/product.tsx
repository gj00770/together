import React, { useState } from "react";
import styled from "styled-components";
// import ItemSummary from '../components/itemSummary'
import ItemSummary from "../components/itemSummary";
import ReplyContainer from "../components/replyContainer";
import SellerInfo from "../components/sellerInfo";
import Summary from "../components/Summary";
import Router from "next/router";
// import ReplyContainer from '../components/replyContainer'
// import SellerInfo from '../components/sellerInfo'

function Product() {
  //const id = Router.query.id;
  // Router.query["id-1234"] === '1234';
  // const id = new URLSearchParams(location.search).get('id');
  //const product = useProduct(id);
  const [curTab, setCurTab] = useState(TabId.ITEM_INFO);

  return (
    <ProductContainer>
      <ImageItemSummaryContainer>
        <Image src="mockImage/productThumbnail/1.jpeg" />
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
  width: 33.333%;
  height: 40px;
  border: 0.5px solid #d3d3d3;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => (props.active ? "white" : "#fafafa;")};
  border-bottom: none;
`;

const ProductContainer = styled.div`
  width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  background-color: white;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const ImageItemSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 700px) {
    width: 781px;
    margin-left: auto;
    margin-right: auto;
  }
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
  //border-radius: 10px;
  background-color: red;
  @media screen and (max-width: 700px) {
    border: none;
  }
`;
// width: 260px;
// height: 200px;
export default Product;

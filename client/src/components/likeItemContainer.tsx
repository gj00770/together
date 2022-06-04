import React from "react";
import styled from "styled-components";
import LikeItem from "./likeItem";

function LikeItemContainer() {
  return (
    <MyCartItemContainer>
      <Date>2022년 12월 31일</Date>
      <Line />
      <LikeItem />
      <LikeItem />
      <LikeItem />
    </MyCartItemContainer>
  );
}
const MyCartItemContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin: 30px 0 10px 0;
`;
const Date = styled.div`
  width: 100%;
  height: 5px;
  margin: 60px 0 10px 0;
  font-size: 2.5rem;
`;

export default LikeItemContainer;

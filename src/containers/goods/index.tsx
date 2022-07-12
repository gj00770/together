import React, { useState } from "react";
import styled from "styled-components";
import ItemContainer from "./components/itemContainer";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
function Goods() {
  return (
    <MainContainer>
      <ItemContainer />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Goods;

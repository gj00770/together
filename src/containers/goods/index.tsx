import React, { useState } from "react";
import styled from "styled-components";
import ItemContainer from "./components/itemContainer";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import SearchBox from "./components/searchBox";
function Goods() {
  return (
    <MainContainer>
      <SearchBox />
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

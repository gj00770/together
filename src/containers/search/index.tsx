import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from "../goods/components/searchBox";
function Search() {
  return (
    <SearchContainer>
      <SearchBox />
    </SearchContainer>
  );
}
const SearchContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
const MenueContainer = styled.div`
  margin-top: 50px;
`;
export default Search;

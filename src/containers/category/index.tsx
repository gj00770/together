import React, { useState } from "react";
import styled from "styled-components";
import CategoryItem from "./components/CategoryItem";
const CATEGORY = ["가전", "식품", "화장품", "의류", "스포츠레저", "홈인테리어"];
function MenueList() {
  return (
    <MenueListContainer>
      <MenueContainer>
        {CATEGORY.map((ele, key) => (
          <CategoryItem categoryName={ele} key={key} />
        ))}
      </MenueContainer>
    </MenueListContainer>
  );
}
const MenueListContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const MenueContainer = styled.div`
  margin-top: 50px;
`;
export default MenueList;

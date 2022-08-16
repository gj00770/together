import React, { useState } from "react";
import styled from "styled-components";
import MenueItem from "../components/MenuItem";
const CATEGORY = ["가전", "식품", "화장품", "의류", "스포츠레저", "홈인테리어"];
function MenueList() {
  return (
    <MenueListContainer>
      {CATEGORY.map((ele, key) => (
        <MenueItem categoryName={ele} key={key} />
      ))}
    </MenueListContainer>
  );
}
const MenueListContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 35px;
  background-color: white;
  width: 200px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  border: 1px solid rgb(242, 242, 242);
`;

export default MenueList;

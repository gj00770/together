import React, { useState } from "react";
import styled from "styled-components";
import MenueItem from "../components/menuItem";
const CATEGORY = ["가전", "식품", "화장품", "의류", "스포츠레저", "홈인테리어"];
function MenueList() {
  return (
    <MenueListContainer>
      {CATEGORY.map((ele) => (
        <MenueItem categoryName={ele} />
      ))}
    </MenueListContainer>
  );
}
const MenueListContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 50px;
  left: 10px;
  background-color: white;
  width: 200px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  border: 1px solid black;
`;
const Item = styled.div`
  margin-top: 5px;
`;

export default MenueList;

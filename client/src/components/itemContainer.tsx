import React from "react";
import styled from "styled-components";
import Item from "./item";
const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ItemContainer() {
  return (
    <ItemContainerContainer>
      {dummyArr.map((ele) => (
        <Item img={ele} />
      ))}
      {/* <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item /> */}
    </ItemContainerContainer>
  );
}
const ItemContainerContainer = styled.div`
  display: grid;
  //width: 70vw;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default ItemContainer;

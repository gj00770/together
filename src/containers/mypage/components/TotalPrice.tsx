import React from "react";
import styled from "styled-components";
import { cartItem } from "../../../types/CartItem";
import { sumCartItemPrice } from "../../../utils/sumCartItemPrice";
import { formatComma } from "../../../utils/formatComma";
interface Props {
  data: cartItem;
}
function TotalPrice(props: Props) {
  console.log(props.data);
  return (
    <TotalPriceContainer>
      <Fee>총 상품가격</Fee>
      <Price>{formatComma(sumCartItemPrice(props.data))}원</Price>
      <div>+</div>
      <Fee>배송비</Fee>
      <Price>3,300원</Price>
      <div>=</div>
      <Price>{formatComma(sumCartItemPrice(props.data) + 3000)}원</Price>
    </TotalPriceContainer>
  );
}
const TotalPriceContainer = styled.div`
  margin: 20px 0px 20px 0px;
  text-align: left;
  font-size: 24px;
  display: flex;
  justify-content: center;
  width: 700px;
  //border: 1px solid black;
  background-color: white;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  @media screen and (max-width: 800px) {
    width: 80vw;
    font-size: 12px;
  }
`;
const Fee = styled.div`
  font-family: Notosans;
  color: "#4aa8d8";
`;
const Price = styled.div`
  font-family: NotosansBold;
  color: #4aa8d8;
`;
export default TotalPrice;

import React from "react";
import styled from "styled-components";
import { cartItem } from "../../../types/CartItem";
import { sumCartItemPrice } from "../../../utils/sumCartItemPrice";
import { formatComma } from "../../../utils/formatComma";
interface Props {
  data: cartItem[];
}
function TotalPrice(props: Props) {
  return (
    <TotalPriceContainer>
      <Title>총 상품가격</Title>
      <PriceContainer>
        <Container>
          <Fee>주문금액</Fee>
          <Price>{formatComma(sumCartItemPrice(props.data))}원</Price>
        </Container>
        <Container>
          <Fee>배송비</Fee>
          <Price> 3,000원</Price>
        </Container>
        <Container>
          <Fee>최종결제금액</Fee>
          <TotalPriceSum>
            {formatComma(sumCartItemPrice(props.data) + 3000)}원
          </TotalPriceSum>
        </Container>
      </PriceContainer>
    </TotalPriceContainer>
  );
}
const TotalPriceContainer = styled.div`
  text-align: left;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 17px 16px 0px 18px;
  //border: 1px solid black;

  // box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
`;
const Fee = styled.div`
  font-family: Notosans;
`;
const Title = styled.div`
  font-family: Notosans;
  //border-bottom: 1px solid rgb(51, 51, 51);
  padding-bottom: 10px;
`;
const Price = styled.div`
  font-family: Notosans;
`;
const TotalPriceSum = styled.div`
  font-family: NotosansBold;
  font-size: 20px;
`;
const PriceContainer = styled.div`
  text-align: left;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  padding: 0px 16px 18px 18px;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(242, 242, 242);
  //border: 1px solid black;

  // box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;
export default TotalPrice;

import React, { useState } from "react";
import styled from "styled-components";
import {
  useCartItemAlarm,
  useCartItemAlarmClose,
} from "../../../modal/cartItemAlarm";
import { useLoginModal } from "../../../modal/loginModal";
import { createCartItem } from "../../../remotes/cartItem";
import { Product } from "../../../types/Product";
import { formatComma } from "../../../utils/formatComma";
import { useSlashDate } from "../../../utils/useSlashDate";
interface Props {
  data: Product;
}
function ItemSummary(props: Props) {
  const openModal = useCartItemAlarm(props.data);
  const coloseModal = useCartItemAlarmClose();
  const openLoginModal = useLoginModal();
  const [itemQauntity, setItemQuantity] = useState(1);
  const upClick = () => {
    setItemQuantity(itemQauntity + 1);
  };

  const downClick = () => {
    if (itemQauntity > 1) {
      setItemQuantity(itemQauntity - 1);
    }
  };
  const addCartItem = () => {
    createCartItem(props.data.id, itemQauntity);

    const token = localStorage.getItem("accessToken");
    createCartItem(props.data.id, 1);
    if (token) {
      openModal();
      setTimeout(() => {
        coloseModal();
      }, 3000);
    } else {
      openLoginModal();
    }
  };
  return (
    <ItemSummaryContainer>
      <Name>{props.data.productName} </Name>
      <Price> {formatComma(props.data.price)} </Price>
      <DueDate>{useSlashDate(props.data.end_date)}</DueDate>
      <FlexContainer>
        <BuyQuantityContainer>
          <Amount>{itemQauntity}</Amount>
          <ArrowContainer>
            <Arrow onClick={upClick}>&#708;</Arrow>
            <Arrow
              onClick={downClick}
              style={{ color: itemQauntity <= 1 ? "grey" : "black" }}
            >
              &#709;
            </Arrow>
          </ArrowContainer>
        </BuyQuantityContainer>
        <PurchaseBtn onClick={addCartItem}>장바구니담기</PurchaseBtn>
      </FlexContainer>
    </ItemSummaryContainer>
  );
}
const ItemSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 450px;
  height: 400px;
  margin-top: 10px;
  text-align: left;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
const Name = styled.div`
  font-size: 40px;
  font-family: NotoSansBold;
`;
const Price = styled.div`
  font-size: 44px;
  font-family: NotoSansBold;
  color: #4aa8d8;
`;
const BuyQuantityContainer = styled.div`
  display: flex;
  width: 10%;
  font-size: 24px;
  border: 1px solid #d3d3d3; ;
`;
const Arrow = styled.div`
  width: 100%;
  height: 50%;
  font-size: 14px;
  border-top: 1px solid #d3d3d3;
  text-align: center;
  cursor: pointer;
`;
const Amount = styled.div`
  width: 60%;
  font-size: 14px;
  text-align: center;
  line-height: 38px;
  border: 1px solid #d3d3d3; ;
`;

const ArrowContainer = styled.div`
  width: 40%;
  font-size: 24px;
  border: 1px solid #d3d3d3; ;
`;

const PurchaseBtn = styled.button`
  cursor: pointer;
  background-color: #4aa8d8;
  border: 2px solid #4aa8d8;
  color: white;
  font-family: NotoSansBold;
  width: 44%;
  font-size: 20px;
  padding-bottom: 3px;
  @media screen and (max-width: 700px) {
    border: 1px solid #4aa8d8;
  }
`;
const DueDate = styled.div`
  font-size: 35px;
  font-family: NotoSansBold;
`;

const FlexContainer = styled.div`
  display: flex;
`;
export default ItemSummary;

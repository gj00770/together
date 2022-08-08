import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { createCartItem } from "../../../remotes/cartItem";
import { deleteCartItem } from "../../../remotes/cartItem/deletecartItem";

function OrderItem(props: any) {
  //const queryClient = useQueryClient();

  console.log(props.data);
  const [count, setCount] = useState<number>(props.data.count);
  const plusOnclick = () => {
    setCount(count + 1);
    createCartItem(props.data.product.id, 1);
  };
  const minusOnClick = () => {
    setCount(count - 1);
    createCartItem(props.data.product.id, -1);
  };
  const onClick = async () => {
    const token = localStorage.getItem("accessToken");

    //  const res =
    const res = deleteCartItem(props.data.id).then((res) => {
      console.log("res", res);
      //  props.refetch();
    });
    setTimeout(() => {
      //queryClient.invalidateQueries(`cartItem1212${token}`);
      props.refetch();
    }, 400);
  };

  return (
    <OrderItemContainer>
      <Image src={`${props.data.product.itemImg}`} />
      <InfoContainer>
        <ItemName>{props.data.product.productName}</ItemName>
        <AmountPriceContainer>
          <ArrowContainer>
            <ArrowBTN>{count}</ArrowBTN>
          </ArrowContainer>
          <ItemPrice>{count * props.data.product.price}</ItemPrice>
        </AmountPriceContainer>
      </InfoContainer>
    </OrderItemContainer>
  );
}
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: grey;
  font-size: 1.5rem;
`;
const OrderItemContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 720px;
  margin-top: 20px;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
`;
const Image = styled.img`
  width: 140px;
  height: 120px;
  margin-left: 10px;
  // border: 0.5px solid #d3d3d3;
`;
const InfoContainer = styled.div`
  // width :580px;
  height: 120px;
  margin-left: 10px;
  width: 100%;
`;
const ItemName = styled.div`
  width: 560px;
  height: 60px;
  margin: 10px 10px 0px 10px;
  text-align: left;
  font-size: 22px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    width: 80%;
  }
  @media screen and (max-width: 350px) {
    font-size: 8px;
    width: 70%;
  }
`;

const ItemPrice = styled.div`
  // width :100px;
  margin: 10px 0px 0px 0px;
  font-size: 28px;
  font-family: NotoSans-Bold;
  // border: 0.5px solid #D3D3D3;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
const AmountPriceContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 30px;
  width: 200px;
`;

const ItemAmount = styled.div`
  background-color: #ffffff;
  width: 35px;
  margin: 10px 10px 0px 10px;
  font-size: 24px;
  border: 0.2px solid #d3d3d3;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    //  width: 20px;
    //   height: 28px;
  }
`;

const ArrowContainer = styled.div`
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  border: 0.2px solid #d3d3d3;
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    font-size: 8px;
  }
`;

const ArrowBTN = styled.button`
  border: none;
  background-color: white;
  width: 35px;
`;

export default OrderItem;

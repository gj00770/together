import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { createPurchaseItem } from "../../../remotes/purchasedItem/createPurchaseItem";
import MyCartItem from "./MyCartItem";
import TotalPrice from "./TotalPrice";
function useCartItem() {
  const token = localStorage.getItem("accessToken");
  const getCartItemWithAxios = async () => {
    const { data } = await axios.get(`http://localhost:5000/cartItem`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  };
  const query = useQuery(`cartItem1212${token}`, getCartItemWithAxios, {});
  console.log(query.data);
  return {
    data: query.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}

function MyCartItemContainer() {
  const { data, isLoading, refetch } = useCartItem();
  if (isLoading) {
    return <div>...lodaifgn</div>;
  }
  const onClick = () => {
    const product = [];
    for (let i = 0; i < data.length; i++) {
      let item = { id: data[i].product.id, count: data[i].count };
      product.push(item);
    }
    createPurchaseItem(product);
  };
  return (
    <MyCartItemContainerContainer>
      {/* <div onClick={() => refetch()}>refetch</div> */}

      {data.map((ele: any) => (
        <MyCartItem data={ele} key={ele.id} refetch={refetch} />
      ))}

      <TotalPrice data={data} />
      <Link href="/order">
        <PurchaseButton onClick={onClick}>구매하기</PurchaseButton>
      </Link>
    </MyCartItemContainerContainer>
  );
}
const MyCartItemContainerContainer = styled.div`
  margin-top: 70px;
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;
const PurchaseButton = styled.div`
  cursor: pointer;
  margin: 0 10px 0 auto;
  background-color: #4aa8d8;
  color: white;
  width: 80px;
  height: 40px;
  line-height: 42px;
  font-size: 16px;
  text-align: center;
  font-family: NotoSansBold;
  @media screen and (max-width: 800px) {
  }
`;
export default MyCartItemContainer;

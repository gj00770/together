import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import { useUser } from "../../hooks/useUser";
import AddressListContainer from "../../modal/AddressListContainer";
import { createPurchaseItem } from "../../remotes/purchasedItem/createPurchaseItem";
import { AddressEntity } from "../../types/Address";
import { formatComma } from "../../utils/formatComma";
import { SumPrice } from "../../utils/sumPrice";
import TotalPrice from "../mypage/components/TotalPrice";
import Address from "./components/Address";
import OrderContainer from "./components/OrderContainer";

import OrderItem from "./components/OrderItem";
function useCartItem(token: any) {
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
    isFetching: query.isFetching,
  };
}
function Order() {
  const token = localStorage.getItem("accessToken");
  const { data, isLoading, refetch, isFetching } = useCartItem(token);
  const [addressSelect, setAddressSelect] = useState(false);
  const user = useUser();
  if (user.isLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  if (isLoading) {
    return <div>...loaidng</div>;
  }

  console.log("2323", user.data);
  return (
    <div>
      <OrderContainer data={data} refetch={refetch} />
      {addressSelect ? (
        <AddressListContainer
          onClose={() => setAddressSelect(false)}
          user={user.data}
          refetch={user.refetch}
          loading={user.isLoading}
        />
      ) : null}

      <Address
        onEdit={() => setAddressSelect(true)}
        defaultAddress={user.data.addresses.find(
          (ele: AddressEntity) => ele.id === user.data.default_address
        )}
      />
      <PriceContainer>
        <TotalPrice data={data} />
      </PriceContainer>
      <PriceContainer>
        <PurchaseButton>구매하기</PurchaseButton>
      </PriceContainer>
    </div>
  );
}
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PurchaseButton = styled.div`
  cursor: pointer;
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
export default Order;

import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import AddressListContainer from "../../modal/AddressListContainer";
import { createPurchaseItem } from "../../remotes/purchasedItem/createPurchaseItem";
import { AddressEntity } from "../../types/Address";
import { cartItem } from "../../types/CartItem";
import TotalPrice from "../mypage/components/TotalPrice";
import Address from "./components/Address";
import OrderContainer from "./components/OrderContainer";

function Order() {
  //createPurchaseItem()
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const [addressSelect, setAddressSelect] = useState(false);
  const user = useUser();
  const router = useRouter();
  const data2 = router.query.product;
  const data = data2
    ? JSON.parse(typeof data2 === "string" ? data2 : "{}")
    : [];
  //console.log(currentPost);
  //const [data, setData] = useState(JSON.parse(router.query.product));
  // const data: any = router.query.product ? router.query.product : null;
  // const [data, setData] = useState(
  //   JSON.parse(
  //     typeof router === "string" && router.query ? router.query.product : "{}"
  //   )
  // );
  console.log(data);
  console.log(router.query.product);
  //console.log(JSON.parse(router.query.product));
  const onClick = () => {
    let purcahsedItem = [];
    for (let i = 0; i < data.length; i++) {
      purcahsedItem.push({ id: data[i].product.id, count: data[i].count });
    }
    createPurchaseItem(purcahsedItem);
  };
  return (
    <div>
      <OrderContainer data={data} />
      {addressSelect ? (
        <AddressListContainer
          onClose={() => setAddressSelect(false)}
          user={user.data}
          //    refetch={user.refetch}
          loading={user.isLoading}
          refetch={user.refetch}
        />
      ) : null}
      <div></div>
      <Address
        onEdit={() => setAddressSelect(true)}
        defaultAddress={user.data?.addresses.find(
          (ele: AddressEntity) => ele.id === user.data?.default_address
        )}
      />
      <PriceContainer>
        <TotalPrice data={data} />
      </PriceContainer>
      <PriceContainer>
        <PurchaseButton onClick={onClick}>구매하기</PurchaseButton>
        <FooterInfo>
          포트폴리오 전용 웹사이트 입니다. 실제로 상품이 구매되지않습니다.
          구매한 목록은 마이페이지메뉴 구매목록 탭에서 확인하실수있습니다
        </FooterInfo>
      </PriceContainer>
    </div>
  );
}
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FooterInfo = styled.p`
  margin: 20px 0px 140px 0px;
  font-size: 14px;
  font-family: NotoSans;
  width: 90%;
  max-width: 700px;

  color: #666666;
`;
const PurchaseButton = styled.div`
  cursor: pointer;
  background-color: #4aa8d8;
  margin-top: 20px;
  color: white;
  height: 40px;
  line-height: 42px;
  font-size: 16px;
  text-align: center;
  font-family: NotoSansBold;
  width: 90%;
  max-width: 700px;
  @media screen and (max-width: 800px) {
  }
`;
export default Order;

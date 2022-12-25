import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import LocationMark from "../../../svgs/location-dot-solid.svg";
import { AddressEntity } from "../../../types/Address";
import { CartItemEntity } from "../../../types/CartItem";
import { formatComma } from "../../../utils/formatComma";
interface Props {
  onClick: () => void;
  defaultAddress: AddressEntity | undefined;
  itemSum: number;
  product: CartItemEntity[] | undefined;
}
function SideBar(props: Props) {
  const router = useRouter();
  return (
    <SideBarContainer>
      <AddAddressContainer>
        <LocationTitle>
          <LocationMark width="12px" />
          <AddressName>배송지</AddressName>
        </LocationTitle>
        <Summary>
          {props.defaultAddress
            ? `${props.defaultAddress.adress},${props.defaultAddress.adressDetaile} `
            : "배송지를 등록하고 구매가능한 상품을 확인한세요!"}
        </Summary>
        <AddressButton onClick={props.onClick}>배송지 변경</AddressButton>
      </AddAddressContainer>
      <TotalPriceContainer>
        {" "}
        <FirstPriceContainer>
          <Price>상품금액</Price>
          <Price>{formatComma(props.itemSum)}원</Price>
        </FirstPriceContainer>
        <SecondPriceContainer>
          {" "}
          <Price>배송가격</Price>{" "}
          <Price>{props.product?.length ? "3,300원 " : "0원"}</Price>
        </SecondPriceContainer>
        <ThirdPriceContainer>
          <Price>결제예정 금액</Price>
          <TotalPrice>
            {props.product?.length ? formatComma(props.itemSum + 3300) : 0}원
          </TotalPrice>
        </ThirdPriceContainer>
      </TotalPriceContainer>
      {/* <Link href="/order"> */}
      {/* <Link
        href={{
          pathname: "/order",
          query: {
            product: 1233, // should be `title` not `id`
          },
        }}
      > */}
      <PurchaseButton
        onClick={
          props.product?.length
            ? () => {
                router.push({
                  pathname: "order",
                  query: {
                    product: JSON.stringify(props.product),
                  },
                });
              }
            : () => {}
        }
        style={{
          backgroundColor: props.product?.length ? "#4aa8d8" : "#DDDDDD",
          cursor: props.product?.length ? "pointer" : "default",
        }}
      >
        {" "}
        {props.product?.length ? "구매하기" : "상품을 담아주세요"}
      </PurchaseButton>
      {/* </Link> */}
    </SideBarContainer>
  );
}
const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 30px;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    width: 80vw;
    margin: 20px 0px 100px 0px;
  }
`;
const LocationTitle = styled.div`
  display: flex;
`;
const AddressName = styled.div`
  margin-left: 8px;
  font-size: 16px;
`;
const Summary = styled.div`
  margin-top: 10px;
`;
const FirstPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SecondPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;
const ThirdPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 16px;
`;
const Price = styled.div`
  font-size: 16px;
  padding-top: 4px;
`;
const TotalPrice = styled.div`
  font-family: NotoSansBold;
  font-size: 20px;
`;
const AddressButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #4aa8d8;
  height: 244px;
  color: #4aa8d8;
`;
const AddAddressContainer = styled.div`
  font-family: NotoSans;
  display: flex;
  flex-direction: column;
  padding: 23px 19px 20px;
  border-width: 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-top-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  height: 175px;
  @media screen and (max-width: 800px) {
  }
`;
const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px 18px 18px 20px;

  border: 1px solid rgb(242, 242, 242);
  background-color: rgb(250, 250, 250);
  height: 165px;
  width: 300px;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;
const PurchaseButton = styled.div`
  cursor: pointer;
  color: white;
  height: 50px;
  line-height: 42px;
  font-size: 16px;
  text-align: center;
  font-family: NotoSansBold;
  @media screen and (max-width: 800px) {
  }
`;
export default SideBar;

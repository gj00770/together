import React from "react";
import styled from "styled-components";
import { PurchaseItem } from "../../../types/PurchaseItem";
import Product from "../../product";
import Xbutton from "../../../svgs/x-solid.svg";
interface Props {
  product: PurchaseItem;
}
function PurchaseItemList(props: Props) {
  return (
    <MyCartItemContainer>
      <FirstContainer>
        <Image src={props.product.product.itemImg} />
        <ItemName>{props.product.product.productName}</ItemName>
      </FirstContainer>
      <SecondContainer>
        <ArrowContainer>{props.product.count}개</ArrowContainer>
        <ItemPrice>{props.product.product.price}</ItemPrice>
      </SecondContainer>
    </MyCartItemContainer>
  );
}

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media screen and (max-width: 800px) {
    width: 240px;
  }
  @media screen and (max-width: 400px) {
    width: 72px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 20px;
    margin-right: auto;
  }
`;

const MyCartItemContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 720px;
  margin-top: 20px;
  // background-color: white;
  display: flex;
  //align-items: center;
  border-bottom: 0.1px solid #d3d3d3;
  background-color: white;
  //height: 140px;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    align-items: flex-start;
  }
`;
const Image = styled.img`
  width: 60px;
  height: 78px;
  // border: 0.5px solid #d3d3d3;

  @media screen and (max-width: 350px) {
  }
`;
const InfoContainer = styled.div`
  // width :580px;
  height: 120px;
  margin-left: 10px;
  width: 100%;
  margin-bottom: 5px;
`;
const ItemName = styled.div`
  margin-left: 12px;
  width: 345px;
  text-align: left;
  font-size: 16px;
  @media screen and (max-width: 800px) {
    font-size: 8px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 0px;
    width: 68vw;
    font-size: 8px;
    font-size: 8px;
  }
`;

const ItemPrice = styled.div`
  // width :100px;
  font-size: 17px;
  font-family: NotoSans;
  // border: 0.5px solid #D3D3D3;
  text-align: left;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
const AmountPriceContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 30px;
  width: 210px;
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
  font-family: NotoSans;
  width: 70px;
  float: left;
  text-align: left;
  font-size: 18px;
  display: flex;
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    font-size: 8px;
  }
`;

const ArrowBTN = styled.button`
  border: none;
  background-color: white;
  @media screen and (max-width: 800px) {
  }
`;
const ArrowNumber = styled.button`
  border: none;
  background-color: white;
  width: 31px;
  @media screen and (max-width: 800px) {
    width: 20px;
  }
`;
export default PurchaseItemList;

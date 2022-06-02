import React from "react";
import styled from "styled-components";

function MyCartItem() {
  return (
    <MyCartItemContainer>
      <Image src="mockImage/productThumbnail/3.jpeg" />
      <CloseButton>x</CloseButton>
      <InfoContainer>
        <ItemName>asdsadsdsds</ItemName>
        <AmountPriceContainer>
          <ArrowContainer>
            <ArrowBTN>+</ArrowBTN>
            <ArrowBTN>3</ArrowBTN>
            <ArrowBTN>-</ArrowBTN>
          </ArrowContainer>
          <ItemPrice>32600</ItemPrice>
        </AmountPriceContainer>
      </InfoContainer>
    </MyCartItemContainer>
  );
}
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: grey;
  font-size: 1.5rem;
`;
const MyCartItemContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 720px;
  margin-top: 20px;
  height: 150px;
  // background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 0.3px solid #d3d3d3;
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

export default MyCartItem;

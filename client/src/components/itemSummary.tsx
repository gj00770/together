import React, { useState } from 'react';
import styled from 'styled-components';
function ItemSummary() {
  const [itemQauntity, setItemQuantity] = useState(1);

  const upClick = () => {
    setItemQuantity(itemQauntity + 1)
  }

  const downClick = () => {
    if (itemQauntity > 1) {
      setItemQuantity(itemQauntity - 1)
    }

  }


  return (
    <ItemSummaryContainer>
      <Name >에스투비코퍼레이션 저스트포유 레인보우 커버 무소음 무선 마우스 </Name>
      <Price > 32600원 </Price>
      <DueDate>2022/12/31 일까지</DueDate>
      <AcquiredPeople>16/43</AcquiredPeople>
      <FlexContainer>
        <BuyQuantityContainer>
          <Amount>
            {itemQauntity}
          </Amount>
          <ArrowContainer>
            <Arrow onClick={upClick}>&#708;</Arrow>
            <Arrow onClick={downClick} style={{ color: itemQauntity <= 1 ? 'grey' : 'black' }}>&#709;</Arrow>
          </ArrowContainer>
        </BuyQuantityContainer>
        <CartBtn>장바구니</CartBtn>
        <PurchaseBtn>구매</PurchaseBtn>
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
   
`
const Name = styled.div`
  font-size: 28px;
  font-family: "NotoSans-Bold";
`
const Price = styled.div`
  font-size: 30px;
  font-family: "NotoSans-Bold";
  color: red;
`
const BuyQuantityContainer = styled.div`
  display: flex;
  width: 10%;
  font-size: 24px;
  border: 1px solid  #D3D3D3;;

`
const Arrow = styled.div`
  width: 100%;
  height: 50%;
  font-size: 14px;
  border-top: 1px solid #D3D3D3;
  text-align: center;
  cursor: pointer;
`
const Amount = styled.div`
  width: 60%;
  font-size: 14px;
  text-align: center;
  line-height: 38px;
  border: 1px solid  #D3D3D3;;
`

const ArrowContainer = styled.div`
  width: 40%;
  font-size: 24px;
  border: 1px solid  #D3D3D3;;
`
const CartBtn = styled.button`
  cursor: pointer;
  background-color: #4AA8D8;
  color:white;
  border:none;
  font-family: NotoSans-Bold;
  width: 44%;
  font-size: 20px;
  padding-bottom: 3px;
`
const PurchaseBtn = styled.button`
cursor: pointer;
 background-color: #4AA8D8;
  color:white;
  border:none;
  font-family: NotoSans-Bold;
  width: 44%;
  font-size: 20px;
  padding-bottom: 3px;
`
const DueDate = styled.div`
   
  font-size: 24px;
`
const AcquiredPeople = styled.div`
  font-size: 24px;
`
const FlexContainer = styled.div`
display: flex;
justify-content: space-between;

`
export default ItemSummary;
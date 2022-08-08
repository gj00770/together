import React from "react";
import styled from "styled-components";
import { AddressEntity } from "../../../types/Address";
interface Props {
  onEdit: () => void;
  defaultAddress: AddressEntity;
}
function Address(props: Props) {
  return (
    <UserInfoContainer>
      <FirstRow>
        <AddressInfo>배송정보</AddressInfo>
        <AddressInfo onClick={props.onEdit}>+</AddressInfo>
      </FirstRow>
      <SecondRow>
        <Container>
          <AddressName>배송지 </AddressName>
          <AddressDetail> {props.defaultAddress.adress}</AddressDetail>
        </Container>

        <Container>
          <AddressName>받으실분</AddressName>
          <AddressDetail> {props.defaultAddress.name}</AddressDetail>
        </Container>
        <Container>
          <AddressName>요청사항</AddressName>
          <AddressDetail> {props.defaultAddress.request}</AddressDetail>
        </Container>
      </SecondRow>
    </UserInfoContainer>
  );
}
const FirstRow = styled.div`
  display: flex;
`;
const UserInfoContainer = styled.div`
  margin-top: 40px;
  width: 90%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
`;
const SecondRow = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
`;
const AddressInfo = styled.div`
  font-size: 32px;
  font-family: NotoSansBold;
  margin-bottom: 15px;
`;
const AddressName = styled.div`
  font-size: 24px;
  font-family: NotoSans;
  width: 120px;
  text-align: center;
`;
const AddressDetail = styled.div`
  font-size: 24px;
  font-family: NotoSans;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  //border-bottom: 0.5px solid #d3d3d3;
  margin-top: 15px;
`;
export default Address;

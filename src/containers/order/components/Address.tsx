import React from "react";
import styled from "styled-components";
import { AddressEntity } from "../../../types/Address";
interface Props {
  onEdit: () => void;
  defaultAddress:
    | {
        id: number;
        name: string;
        adress: string;
        adressDetaile: string;
        request: string;
      }
    | undefined;
}
function Address(props: Props) {
  return (
    <UserInfoContainer>
      <FirstRow>
        <AddressInfo>배송정보</AddressInfo>
        <AddressInfo onClick={props.onEdit}>+</AddressInfo>
      </FirstRow>
      <Line />
      <SecondRow>
        <Container>
          <AddressName>배송지 </AddressName>
          <AddressDetail> {props.defaultAddress?.adress}</AddressDetail>
        </Container>

        <Container>
          <AddressName>받으실분</AddressName>
          <AddressDetail> {props.defaultAddress?.name}</AddressDetail>
        </Container>
        <Container>
          <AddressName>요청사항</AddressName>
          <AddressDetail> {props.defaultAddress?.request}</AddressDetail>
        </Container>
      </SecondRow>
    </UserInfoContainer>
  );
}
const FirstRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(51, 51, 51);
`;
const Line = styled.div``;
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
`;
const AddressInfo = styled.div`
  font-size: 20px;
  font-family: NotoSans;
  margin-bottom: 15px;
`;
const AddressName = styled.div`
  font-size: 14px;
  font-family: NotoSans;
  text-align: center;
`;
const AddressDetail = styled.div`
  font-size: 14px;
  font-family: NotoSans;
  margin-left: 15px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  padding-left: 16px;

  display: flex;
  //border-bottom: 0.5px solid #d3d3d3;
  margin-top: 15px;
`;
export default Address;

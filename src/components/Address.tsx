import React from "react";
import styled from "styled-components";
//if (typeof window !== "undefined") {
//here `window` is available
import { updateUserDefaultAdress } from "../remotes/user";
import { AddressEntity } from "../types/Address";
if (typeof window !== "undefined") {
  // Client-side-only code
  const { naver } = window as any;
}
interface Props {
  address: AddressEntity;
  onEdit: () => void;
  refetch: () => void;
  onClose: () => void;
}
function Addresses(props: Props) {
  const onclickAddress = async () => {
    await updateUserDefaultAdress(props.address.id);
    await props.onClose();
    await props.refetch();
  };
  console.log(props.address);
  return (
    <AddressContainerRoot>
      <Name onClick={() => props.refetch()}>{props.address.name}</Name>
      <AddressInfo>
        {props.address.adress},{props.address.adressDetaile}
      </AddressInfo>
      <Request>{props.address.request}</Request>
      <ButtonContainer>
        <EditButton onClick={props.onEdit}>수정</EditButton>
        <ChoiceButton onClick={onclickAddress}>선택</ChoiceButton>
      </ButtonContainer>
    </AddressContainerRoot>
  );
}

const AddressContainerRoot = styled.div`
  width: 400px;
  border: 1px solid black;
  margin: 10px;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
const AddressContainer = styled.div``;
const Name = styled.div`
  font-size: 24px;
  font-family: NotoSansBold;
  margin: 10px;
`;
const AddressInfo = styled.div`
  font-size: 24px;
  font-family: NotoSans;
  margin: 10px;
`;
const Request = styled.div`
  font-size: 24px;
  font-family: NotoSans;
  margin: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-family: NotoSans;
  width: 60px;
  height: 40px;
  margin: 10px;
  border: 1px solid #d3d3d3;
  text-align: center;
  color: #4aa8d8;
`;
const ChoiceButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-family: NotoSans;
  text-align: center;
  width: 60px;
  height: 40px;
  background-color: #4aa8d8;
  color: white;
  margin: 10px;
`;
export default Addresses;

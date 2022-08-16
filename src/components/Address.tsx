import React from "react";
import styled from "styled-components";
//if (typeof window !== "undefined") {
//here `window` is available
import { updateUserDefaultAdress } from "../remotes/user";
import { AddressEntity } from "../types/Address";
import Check from "../svgs/circle-check-solid.svg";
import Pen from "../svgs/pen-solid.svg";
if (typeof window !== "undefined") {
  // Client-side-only code
  const { naver } = window as any;
}
interface Props {
  address: AddressEntity;
  onEdit: () => void;
  refetch: () => void;
  onClose: () => void;
  check: boolean;
}
function Addresses(props: Props) {
  const onclickAddress = async () => {
    await updateUserDefaultAdress(props.address.id);
    await props.onClose();
    await props.refetch();
  };
  return (
    <AddressContainerRoot>
      {props.check ? (
        <Check onClick={onclickAddress} width="22px" fill="#4aa8d8" />
      ) : (
        <Check onClick={onclickAddress} width="22px" fill="#d3d3d3" />
      )}
      <AddressContainer>
        <Name>{props.address.name}</Name>
        <AddressInfo>
          {props.address.adress},{props.address.adressDetaile}
        </AddressInfo>
        <Request>{props.address.request}</Request>
      </AddressContainer>
      <Pen onClick={props.onEdit} width="22px" />
    </AddressContainerRoot>
  );
}

const AddressContainerRoot = styled.div`
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;

  width: 400px;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
const AddressContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 16px;
  font-family: NotoSans;
`;
const AddressInfo = styled.div`
  font-size: 16px;
  font-family: NotoSans;
`;
const Request = styled.div`
  font-size: 16px;
  font-family: NotoSans;
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

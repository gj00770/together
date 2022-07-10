import React from "react";
import styled from "styled-components";
import Pencile from "../svgs/pen-solid.svg";
import { Address } from "../types/Address";
interface Props {
  address: Address;
  onEdit: () => void;
  onDelete: () => void;
}

function AddressSummary(props: Props) {
  return (
    <AddressSumarrycontainer>
      <CloseButton onClick={props.onDelete}>x</CloseButton>
      <AddrdressContainer>
        <UserAddress>{props.address.adress}</UserAddress>
        <Name>{props.address.name}</Name>
        <Request></Request>
        <Edit>
          <Pencile width="30px" onClick={props.onEdit} />
        </Edit>
      </AddrdressContainer>
      <Edit></Edit>
    </AddressSumarrycontainer>
  );
}
const AddressSumarrycontainer = styled.div`
  border-bottom: 0.3px solid #d3d3d3;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "NotoSans";
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const CloseButton = styled.div`
  margin-right: 10px;
  cursor: pointer;
  text-align: right;
`;
const AddrdressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 10px 0px 30px 0px;
`;
const Edit = styled.div`
  cursor: pointer;
  margin-right: 50px;
`;
const UserAddress = styled.div`
  font-size: 23px;
`;
const Name = styled.div`
  font-size: 23px;
  margin-left: 40px;
`;
const Request = styled.div`
  font-size: 23px;
`;
export default AddressSummary;

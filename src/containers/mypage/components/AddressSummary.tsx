import React from "react";
import styled from "styled-components";
import CheckCircle from "../../../svgs/circle-check-solid.svg";
import Pencile from "../../../svgs/pen-solid.svg";
import { AddressEntity } from "../../../types/Address";
interface Props {
  address: AddressEntity;
  onEdit: () => void;
  onDelete: () => void;
  checked: boolean;
  onClick: () => void;
}

function AddressSummary(props: Props) {
  return (
    <AddressSumarrycontainer>
      <CloseButton onClick={props.onDelete}>x</CloseButton>
      <AddrdressContainer>
        <NameCheckContainer>
          {props.checked ? (
            <CheckCircle
              width="22px"
              fill="#4aa8d8"
              style={{ marginLeft: "12px" }}
              cursor="pointer"
            />
          ) : (
            <CheckCircle
              width="22px"
              style={{ marginLeft: "12px" }}
              fill=" #D3D3D3"
              cursor="pointer"
              onClick={props.onClick}
            />
          )}
          <UserAddress>{props.address.adress}</UserAddress>
        </NameCheckContainer>
        <Name>{props.address.name}</Name>
        <Request></Request>
        <Edit>
          <Pencile width="22px" onClick={props.onEdit} />
        </Edit>
      </AddrdressContainer>
      <Edit></Edit>
    </AddressSumarrycontainer>
  );
}
const AddressSumarrycontainer = styled.div`
  background-color: white;
  //box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  border-bottom: 0.1px solid #d3d3d3;
  margin-bottom: 15px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "NotoSans";
  font-size: 16px;
  @media screen and (max-width: 800px) {
    width: 90vw;
    font-size: 14px;
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
  margin-left: 20px;
`;
const NameCheckContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  margin: 0 20px 0 20px;
`;
const Request = styled.div``;
export default AddressSummary;

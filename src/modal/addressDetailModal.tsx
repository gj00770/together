import DaumPostcode from "react-daum-postcode";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Address } from "../types/Address";
import { useUser } from "../hook/useUser";

interface Props {
  onClose: () => void;
  address: Address;
}
function AddressDetailModal(props: Props) {
  const user = useUser();
  // const colseHandler = (data: any) => {
  //   console.log(data);
  //   setCurAddr(data.address);
  // };
  const [name, setName] = useState<string>();
  const [adressDetaile, setAdressDetaile] = useState<string>();
  const [request, setRequest] = useState<string>();

  const HandleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const HandleDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdressDetaile(e.target.value);
  };
  const HandleRequest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest(e.target.value);
  };
  console.log(props.address);
  const changeProfileImage = async () => {
    const accessToken = localStorage.getItem("accessToken");
    await axios.put(
      `http://localhost:5000/user/my/address/${props.address.id}`,

      {
        name: name,
        adressDetaile: adressDetaile,
        request: request,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    await user.refetch();
    props.onClose();
  };
  return (
    <AddressDetaileBackground>
      <AddressDetailecontainer>
        <CloseButton onClick={props.onClose}>x</CloseButton>
        <InfoContainer>
          <TitleName>배송지수정</TitleName>
          <CityName>{props.address.adress}</CityName>
          <InputHolder
            onChange={(e) => HandleDetail(e)}
            placeholder={props.address.adressDetaile}
          ></InputHolder>
          <AdressDetail>받으실분</AdressDetail>
          <InputHolder
            onChange={(e) => HandleName(e)}
            placeholder={props.address.name}
          ></InputHolder>
          <ReQuest>요청사항</ReQuest>
          <InputHolder
            onChange={(e) => HandleRequest(e)}
            placeholder={props.address.request}
          ></InputHolder>
          <SaveButton onClick={changeProfileImage}>저장</SaveButton>
        </InfoContainer>
      </AddressDetailecontainer>
    </AddressDetaileBackground>
  );
}
const AddressDetaileBackground = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 800px;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const CloseButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  font-size: 40px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`;
const AddressDetailecontainer = styled.div`
  /* margin : 20px 20px 20px auto;
    width: 120px;
   
    text-align: left;
    font-size: 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  background-color: white;
  height: 700px;
`;
const TitleName = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
  margin-top: 60px;
`;
const CityName = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;
const AdressDetail = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
const ReQuest = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  width: 200px;
  height: 30px;
`;
const SaveButton = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  color: white;
  font-size: 24px;
  background-color: #4aa8d8;
  border: none;
`;
const PostalCode = styled.div`
  width: 500px;
  height: 30px;
  text-align: left;
`;
const PostalCodeButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
const InputHolder = styled.input`
  height: 35px;
  margin-bottom: 20px;
`;
export default AddressDetailModal;

import DaumPostcode from "react-daum-postcode";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import router from "next/router";
interface Address {
  // address: string[];
  closeAddAddressHandler: () => void;
  cityName: string | undefined;
  refetch: () => void;
}
function AddAdress(props: Address) {
  // const colseHandler = (data: any) => {
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

  const updateUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const { data } = await axios.post(
      "http://localhost:5000/user/my/address",
      {
        name: name,
        adress: props.cityName,
        adressDetaile: adressDetaile,
        request: request,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    await props.closeAddAddressHandler();
    await props.refetch();
    return data;
  };
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${0}px;
    overflow-y: scroll;`;
    // width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <AddAdressBackground>
      <AddAdresscontainer>
        <CloseButton onClick={props.closeAddAddressHandler}>x</CloseButton>
        <InfoContainer>
          <TitleName>배송지추가</TitleName>
          <CityAdress>{props.cityName}</CityAdress>
          <CityName>{}</CityName>
          <InputHolder
            onChange={(e) => HandleDetail(e)}
            placeholder="주소상세"
          ></InputHolder>
          <AdressDetail>받으실분</AdressDetail>
          <InputHolder
            onChange={(e) => HandleName(e)}
            placeholder="이름"
          ></InputHolder>
          <ReQuest>요청사항</ReQuest>
          <InputHolder
            onChange={(e) => HandleRequest(e)}
            placeholder="문앞에두어주세요"
          ></InputHolder>
          <SaveButton onClick={updateUser}>저장</SaveButton>
        </InfoContainer>
      </AddAdresscontainer>
    </AddAdressBackground>
  );
}
const AddAdressBackground = styled.div`
  border: 1px solid black;

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
const AddAdresscontainer = styled.div`
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
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`;
const TitleName = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const CityAdress = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 20px;
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
export default AddAdress;

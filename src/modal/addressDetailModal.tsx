import DaumPostcode from "react-daum-postcode";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AddressEntity } from "../types/Address";
import { useUser } from "../hooks/useUser";
import Pencil from "../svgs/pen-solid.svg";
import CloseButton from "../svgs/x-solid.svg";
interface Props {
  onClose: () => void;
  address: AddressEntity | undefined;
  openPostcode: () => void | undefined;
  curAddr: string | undefined;
}
function AddressDetailModal(props: Props) {
  const user = useUser();

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
  const saveAddress = async () => {
    const accessToken = localStorage.getItem("accessToken");
    await axios.put(
      `http://localhost:5000/user/my/address/${props.address?.id}`,

      {
        adress: props.curAddr ? props.curAddr : props.address?.adress,
        name: name,
        adressDetaile: adressDetaile,
        request: request,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    await props.onClose();
    await user.refetch();
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
    <AddressDetaileBackground>
      <AddressDetailecontainer>
        <CloseButton
          onClick={props.onClose}
          width="18px"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          fill="#7777777"
        />
        <InfoContainer>
          <PencilContainer>
            <TitleName>배송지수정</TitleName>
            <Pencil
              width="26px"
              height="38px"
              cursor="pointer"
              onClick={props.openPostcode}
            />
          </PencilContainer>
          <CityName>
            {props.curAddr ? props.curAddr : props.address?.adress}
          </CityName>
          <InputHolder
            onChange={(e) => HandleDetail(e)}
            placeholder={props.address?.adressDetaile}
          ></InputHolder>
          <AdressDetail>받으실분</AdressDetail>
          <InputHolder
            onChange={(e) => HandleName(e)}
            placeholder={props.address?.name}
          ></InputHolder>
          <ReQuest>요청사항</ReQuest>
          <InputHolder
            onChange={(e) => HandleRequest(e)}
            placeholder={props.address?.request}
          ></InputHolder>
          <SaveButton onClick={saveAddress}>저장</SaveButton>
        </InfoContainer>
      </AddressDetailecontainer>
    </AddressDetaileBackground>
  );
}
const AddressDetaileBackground = styled.div`
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`;
const AddressDetailecontainer = styled.div`
  position: relative;
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
  margin-right: 25px;
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

const PencilContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 60px;
  display: flex;
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
const InputHolder = styled.input`
  height: 35px;
  margin-bottom: 20px;
`;
export default AddressDetailModal;

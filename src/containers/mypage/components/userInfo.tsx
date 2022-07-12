//import DaumPostcode from 'react-daum-postcode';
//import DaumAdr from './daumAdr'
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AddressSummary from "./addressSummary";
import { useUser } from "../../../hook/useUser";
import AddAdress from "../../../modal/addAdress";
import AddressDetailModal from "../../../modal/addressDetailModal";
import DaumAdrr from "../../../modal/daumAdrr";
import { requester } from "../../../remotes/requester";
import { Address } from "../../../types/Address";
import { updateUserProfile } from "../../../remotes/user";

function UserInfo() {
  const user = useUser();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [curAddr, setCurAddr] = useState<string>("서울시 구로구 경인로 343");
  const [userImage, setUserImage] = useState("");
  const [nickName, setNickName] = useState("");
  const [openNickName, setopenNickName] = useState<boolean>(false);
  const [addAddress, setAddAddress] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [openDaumAdr, setOpenDaumAdr] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();

  console.log("user", user);
  const deleteAddress = (id: number) => {
    const accessToken = localStorage.getItem("accessToken");
    axios.delete(`http://localhost:5000/user/my/address/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  const onComplete = (data: any) => {
    console.log(data);
    setCurAddr(data.address);
    closePostHandler();
    setAddAddress(true);
  };

  const closePostHandler = () => {
    setOpenPostcode(false);
  };

  const closeAddAddressHandler = () => {
    setAddAddress(false);
    console.log(isEditModalOpen);
  };
  const changeProfileImage = (e: any) => {
    console.log(e.target.files[0].name);
    //s3 로구현
    //
    //const accessToken = localStorage.getItem("accessToken");
    setUserImage(URL.createObjectURL(e.target.files[0]));
    console.log("123123", URL.createObjectURL(e.target.files[0]));
    updateUserProfile(e.target.files[0]);

    console.log("hi");
  };

  if (user.isLoading) {
    return <>Loading ...</>;
  }

  return (
    <UserInfoContainer>
      {addAddress ? (
        <AddAdress
          cityName={curAddr}
          closeAddAddressHandler={closeAddAddressHandler}
        />
      ) : null}
      <ShippingAddress>유저정보</ShippingAddress>
      <DaumAdrr
        onComplete={onComplete}
        openPostcode={openPostcode}
        closePostHandler={closePostHandler}
      />
      <hr />
      {/* <SSRsafeSuspense/> */}
      {/* <div onClick={updateUser}>12312312312312</div> */}
      <UserNickNameIcon>
        <UserNameImgContainer>
          <Category>사진</Category>
          <input
            type="file"
            id="imageFile"
            onChange={changeProfileImage}
            style={{ display: "none" }}
          />
          <label htmlFor="imageFile">
            <IconImage
              src={userImage === "" ? user.data.profile_image : userImage}
            />
          </label>
        </UserNameImgContainer>
        <label htmlFor="imageFile"></label>
      </UserNickNameIcon>
      <InfoContainer>
        <div style={{ display: "flex" }}>
          {/* {query.data ? (<Name>123</Name>): <Loading/>} */}
          <Name>닉네임</Name>
          {openNickName ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <UserName>{user.data.nickname}</UserName>
          )}
        </div>
        {openNickName ? (
          <UserNameButton onClick={() => setopenNickName(!openNickName)}>
            확인
          </UserNameButton>
        ) : (
          <UserNameButton onClick={() => setopenNickName(!openNickName)}>
            닉네임설정
          </UserNameButton>
        )}
      </InfoContainer>

      <ShippingAddressContainer>
        <ShippingAddress>배송지</ShippingAddress>
        <AddShippingAddress onClick={() => setOpenPostcode(true)}>
          +
        </AddShippingAddress>
        {openDaumAdr ? <DaumAdrr /> : null}
      </ShippingAddressContainer>
      <hr />

      {user.data.addresses
        ? user.data.addresses.map((ele: Address) => (
            <AddressSummary
              address={ele}
              key={ele.id}
              onEdit={() => {
                setSelectedAddressId(ele.id);
              }}
              onDelete={() => deleteAddress(ele.id)}
            />
          ))
        : null}
      {selectedAddressId ? (
        <AddressDetailModal
          onClose={() => {
            setSelectedAddressId(undefined);
          }}
          //   address={user.data.addresses ? user.data.addresses[0] : "sdsd"}
          address={user.data.addresses.find(
            (ele: Address) => ele.id === selectedAddressId
          )}
        />
      ) : null}
    </UserInfoContainer>
  );
}
const ShippingAddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const ShippingAddress = styled.div`
  cursor: pointer;
  font-family: InkLipquid;
  font-size: 42px;
`;
const AddShippingAddress = styled.div`
  cursor: pointer;
  font-size: 30px;
`;
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
  width: 70px;
  margin-left: 100px;
  cursor: pointer;
`;
const UserInfoContainer = styled.div`
  margin-top: 20px;
  width: 800px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const UserNickNameIcon = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const Category = styled.div``;
const Name = styled.div`
  /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
  font-family: NotoSans;
  width: 100px;
`;
const TitleName = styled.div`
  font-size: 25px;
  margin-left: 20px;
`;

const UserName = styled.div`
  font-family: NotoSans;
  width: 200px;
  height: 30px;
`;
const UserNameButton = styled.button`
  width: 100px;
  height: 30px;
  font-family: NotoSans;
  cursor: pointer;
`;
const PostalCode = styled.div`
  width: 500px;
  height: 30px;
  text-align: left;
`;
const UserNameImgContainer = styled.div`
  font-family: NotoSans;
`;
const InputNickNameHolder = styled.input``;
export default UserInfo;

//import DaumPostcode from 'react-daum-postcode';
//import DaumAdr from './daumAdr'
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import { useUser } from "../../../hooks/useUser";
import { updateUserNickName, updateUserProfile } from "../../../remotes/user";
import Pencile from "../../../svgs/pen-solid.svg";
function UserInfo() {
  const user = useUser();
  const [userImage, setUserImage] = useState("");
  const [openNickName, setopenNickName] = useState<boolean>(false);
  const [inputvalue, setInputvalue] = useState<string>("");

  const changeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //s3 로구현
    if (!e.target.files) {
      return;
    }
    setUserImage(URL.createObjectURL(e.target.files[0]));
    updateUserProfile(e.target.files[0]);
  };
  const clickNickName = async () => {
    //s3 로구현
    await setopenNickName(!openNickName);
    await updateUserNickName(inputvalue);
    await user.refetch();
  };

  if (user.isLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <UserInfoContainer>
      <div>
        <ShippingAddress>유저정보</ShippingAddress>
      </div>

      <hr />

      <UserNickNameIcon>
        <UserNameImgContainer>
          {/* <div onClick={logOut}>로그아웃</div> */}
          {/* <Category>사진</Category> */}
          <input
            type="file"
            id="imageFile"
            onChange={changeProfileImage}
            style={{ display: "none" }}
          />
          <label htmlFor="imageFile">
            <IconImage
              src={userImage === "" ? user.data?.profile_image : userImage}
            />
          </label>
        </UserNameImgContainer>
        <label htmlFor="imageFile"></label>
      </UserNickNameIcon>
      <InfoContainer>
        <div style={{ display: "flex" }}>
          {openNickName ? (
            <InputNickNameHolder
              autoFocus
              type="text"
              value={inputvalue}
              onChange={(e) => setInputvalue(e.target.value)}
            ></InputNickNameHolder>
          ) : (
            <UserName>{user.data?.nickname}</UserName>
          )}

          {openNickName ? (
            <UserNameButton onClick={clickNickName}>확인</UserNameButton>
          ) : (
            <Pencile
              width="24"
              onClick={() => setopenNickName(!openNickName)}
            />
          )}
        </div>
      </InfoContainer>
    </UserInfoContainer>
  );
}

const ShippingAddress = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
  font-family: NotoSans;
  font-size: 24px;
`;

const IconImage = styled.img`
  border-radius: 100%;
  height: 200px;
  width: 200px;
  cursor: pointer;
`;
const UserInfoContainer = styled.div`
  margin-top: 70px;
  max-width: 800px;
  width: 67vw;

  @media screen and (max-width: 800px) {
    width: 83vw;
  }
`;
const UserNickNameIcon = styled.div`
  margin-bottom: 20px;
  justify-content: center;
  margin-left: auto;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 20px auto 0 auto;
  justify-content: center;
  width: 240px;
`;
const Name = styled.div`
  /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
  font-family: NotoSans;
  width: 100px;
`;

const UserName = styled.div`
  font-family: NotoSansBold;
  border-radius: 20px;
  //background-color: #4aa8d8;
  // color: white;
  font-size: 18px;
  width: 180px;
  height: 30px;
  text-align: center;
  border: 1px solid grey;
  margin-left: 30px;
`;
const UserNameButton = styled.button`
  width: 100px;
  height: 30px;
  font-family: NotoSans;
  cursor: pointer;
`;

const UserNameImgContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: NotoSans;
`;
const InputNickNameHolder = styled.input``;
export default UserInfo;

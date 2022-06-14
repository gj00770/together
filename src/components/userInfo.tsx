import React, { useState } from "react";
import styled from "styled-components";
//import DaumPostcode from 'react-daum-postcode';
//import DaumAdr from './daumAdr'
import DaumPostcode from "react-daum-postcode";

function UserInfo() {
  const [openModal, setOpenModal] = useState(false);
  const [curAddr, setCurAddr] = useState("서울시 구로구 경인로 343");
  const [userImage, setUserImage] = useState("mockImage/icon.jpeg");
  const [nickName, setNickName] = useState("");
  const [openNickName, setopenNickName] = useState(true);
  const onComplete = (data: any) => {
    console.log(data);
    setCurAddr(data.address);
  };
  const openPostal = () => {
    setOpenModal(!openModal);
  };
  const ㅁㄴㅇㄴㅁ = () => {};

  const changeProfileImage = (e: any) => {
    console.log(e.target.files[0].name);
    setUserImage(URL.createObjectURL(e.target.files[0]));
    //  setUserImage(e.target.files[0].name);
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   const base64 = reader.result;
    //   if (base64) {
    //     setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
    //   }
    // };
    // if (e.target.files[0]) {
    //   reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    //   setUserImage(e.target.files[0]); // 파일 상태 업데이트
    // }
  };
  return (
    <UserInfoContainer>
      <hr />
      <UserNickNameIcon>
        <div>
          <Category>사진</Category>
          <input
            type="file"
            id="imageFile"
            onChange={changeProfileImage}
            style={{ display: "none" }}
          />
          <label htmlFor="imageFile">
            <IconImage src={userImage} />
          </label>
        </div>
        <label htmlFor="imageFile"></label>
      </UserNickNameIcon>
      <hr />
      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>닉네임</Name>
          {openNickName ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <UserName>아무개아무개아무개</UserName>
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
      <hr />
      {/* {openModal ?
                <div style={{ position: 'absolute' }}>
                    <DaumAdr onComplete={onComplete} />
                </div>
                :
                null
            } */}
      <InfoContainer>
        <TitleName>받는사람정보</TitleName>
        <PostalCodeButton onClick={openPostal}>주소설정</PostalCodeButton>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>이름</Name>
          <PostalCode>정구민</PostalCode>
        </div>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>주소</Name>
          <PostalCode>{curAddr}</PostalCode>
        </div>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>상세주소</Name>
          <PostalCode>삼환로즈빌 106동 801호</PostalCode>
        </div>
      </InfoContainer>
      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>추가요청사항</Name>
          <PostalCode>경비실에 맡겨주세요</PostalCode>
        </div>
      </InfoContainer>
    </UserInfoContainer>
  );
}
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
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
  /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
  display: flex;
  margin-bottom: 20px;
  // width: 800px;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
  display: flex;
  margin-bottom: 20px;
  // width: 800px;
  justify-content: space-between;
`;
const Category = styled.div``;
const Name = styled.div`
  /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
  width: 100px;
`;
const TitleName = styled.div`
  font-size: 25px;
  margin-left: 20px;
`;

const UserName = styled.div`
  width: 200px;
  height: 30px;
`;
const UserNameButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
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
const InputNickNameHolder = styled.input``;
export default UserInfo;

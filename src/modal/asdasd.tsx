import React, { useState, Suspense } from "react";
import styled from "styled-components";
//import DaumPostcode from 'react-daum-postcode';
//import DaumAdr from './daumAdr'
import axios from "axios";
import DaumAdrr from "../modal/daumAdrr";
import { useUser } from "../hooks/useUser";
import SSRSafeSuspense from "../hooks/useMount";
import AddressSummary from "../containers/mypage/components/AddressSummary";
import AddressDetailModal from "./addressDetailModal";
function UserInfo() {
  const user = useUser();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [] = useState<string>();
  const [curAddr, setCurAddr] = useState<string>("서울시 구로구 경인로 343");
  const [addrDetail, setAddrDetail] = useState<string>();
  const [request, setRequest] = useState<string>();
  const [userImage, setUserImage] = useState("");
  const [nickName, setNickName] = useState("");
  const [openNickName, setopenNickName] = useState<boolean>(false);
  const [fixAdr, setFixAdr] = useState<boolean>(false);
  const updateUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const { data } = await axios.post(
      "http://localhost:5000/user/my/address",
      {
        name: "정구민",
        adress: "서울시 경인로 343 삼환로즈빌아파트",
        adressDetaile: "106동 801호",
        request: "경비실에맡겨주세요",
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log("hi");
    return data;
  };
  //조회
  // get user/my/address
  //
  // const getUserWithAxios = async () => {
  //   const test = localStorage.getItem("accessToken");
  //   const { data } = await axios.post(
  //     "http://localhost:5000/user/test",
  //     {},
  //     {
  //       headers: { Authorization: `Bearer ${test}` },
  //     }
  //   );
  //   // setUserImage(data.profile_image);
  //   //setNickName(data.nickname);
  //   // await new Promise((resolve) => setTimeout(resolve, 5000));
  //   return data;
  // };
  // const query = useQuery("users", getUserWithAxios);

  console.log(user);
  const onComplete = (data: any) => {
    console.log(data);
    setCurAddr(data.address);
    closeHandler();
  };

  const closeHandler = () => {
    setOpenPostcode(false);
  };
  const openHandler = () => {
    setOpenPostcode(true);
  };

  const changeProfileImage = (e: any) => {
    console.log(e.target.files[0].name);
    const accessToken = localStorage.getItem("accessToken");
    setUserImage(URL.createObjectURL(e.target.files[0]));
    axios.put(
      "http://localhost:5000/user/updateUserProfile",
      {
        profile_image: URL.createObjectURL(e.target.files[0]),
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log("hi");
  };

  if (user.isLoading) {
    return <>Loading ...</>;
  }

  return (
    <UserInfoContainer>
      <hr />
      {/* <SSRsafeSuspense/> */}
      <div onClick={updateUser}>12312312312312</div>
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
            <IconImage
              src={userImage === "" ? user.data.profile_image : userImage}
            />
          </label>
        </div>
        <label htmlFor="imageFile"></label>
      </UserNickNameIcon>
      <hr />
      <InfoContainer>
        <div style={{ display: "flex" }}>
          {/* {query.data ? (<Name>123</Name>): <Loading/>} */}
          <Name>{user.data.nickname}</Name> //nickname
          {openNickName ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <UserName>{nickName}</UserName>
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
      {/* <InfoContainer>
        <TitleName>받는사람정보</TitleName>

        <PostalCodeButton onClick={() => setFixAdr(true)}>
          수정
        </PostalCodeButton>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <DaumAdrr
            onComplete={onComplete}
            openHandler={openHandler}
            closeHandler={closeHandler}
            openPostcode={openPostcode}
          />
          <Name>이름</Name>

          {fixAdr ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <PostalCode>정구민</PostalCode>
          )}
        </div>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Name>주소</Name>

            <PostalCode>{curAddr}</PostalCode>
          </div>
          <PostalCodeButton onClick={openHandler}>주소설정</PostalCodeButton>
        </div>
      </InfoContainer>

      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>상세주소</Name>
          {fixAdr ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <PostalCode>삼환로즈빌 106동 801호</PostalCode>
          )}
        </div>
      </InfoContainer>
      <InfoContainer>
        <div style={{ display: "flex" }}>
          <Name>추가요청사항</Name>

          {fixAdr ? (
            <InputNickNameHolder autoFocus type="text"></InputNickNameHolder>
          ) : (
            <PostalCode>경비실에 맡겨주세요</PostalCode>
          )}
        </div>
      </InfoContainer> */}
      <AddressDetailModal />
      <AddressSummary
        address={user.data.addresses ? user.data.addresses[0].adress : "sdsd"}
      />
    </UserInfoContainer>
  );
}
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

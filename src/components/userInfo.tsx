import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import DaumAdr from './daumAdr'





function UserInfo() {
    const [openModal, setOpenModal] = useState(false);
    const [curAddr, setCurAddr] = useState('')
    const onComplete = (data: any) => {
        console.log(data);
        setCurAddr(data.address);
    }
    const openPostal = () => {
        setOpenModal(!openModal)
    }
    return (
        <UserInfoContainer>
            <InfoContainer>
                <Name>닉네임</Name>
                <UserName>
                </UserName>
                <UserNameButton>
                    닉네임설정
                </UserNameButton>
            </InfoContainer>


            {openModal ?
                <div style={{ position: 'absolute' }}>
                    <DaumAdr onComplete={onComplete} />
                </div>
                :
                null
            }
            <InfoContainer>

                <TitleName>받는사람정보</TitleName>
            </InfoContainer>


            <InfoContainer>
                <Name>이름</Name>
                <PostalCode>
                </PostalCode>
            </InfoContainer>

            <InfoContainer>
                <Name>주소</Name>
                <PostalCode>
                    {curAddr}
                </PostalCode>
                <PostalCodeButton onClick={openPostal}>
                    주소설정
                    </PostalCodeButton>
            </InfoContainer>

            <InfoContainer>
                <Name>상세주소</Name>
                <PostalCode>
                </PostalCode>
            </InfoContainer>
            <InfoContainer>
                <Name>추가요청사항</Name>
                <PostalCode>
                </PostalCode>
            </InfoContainer>


        </UserInfoContainer>

    );
}
const UserInfoContainer = styled.div`
  
    margin-top: 20px;

`
const InfoContainer = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    display: flex;
    margin-bottom: 20px;
`
const Name = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    width: 100px;
`
const TitleName = styled.div`
    font-size: 25px;
    margin-left: 20px;
`

const UserName = styled.div`
    width: 200px;
    height: 30px;
    background-color: white;
`
const UserNameButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
`
const PostalCode = styled.div`
    width: 500px;
    height: 30px;
    background-color: white;
    text-align: left;
`
const PostalCodeButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
`


export default UserInfo;
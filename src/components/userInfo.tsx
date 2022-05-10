import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import DaumAdr from './daumAdr'


function UserInfo() {
    const [openModal, setOpenModal] = useState(false);
    const onComplete = (data: any) => { console.log(data); }

    return (
        <UserInfoContainer>
            <table >
                <tr>
                    <td>닉네임</td>
                    <UserName>
                    </UserName>
                    <UserNameButton>
                        닉네임설정
                    </UserNameButton>
                </tr>
                {openModal ?
                    <DaumAdr />
                    :
                    null
                }
                <tr>
                    <td>받는사람정보</td>

                </tr>
                <tr>
                    <td>주소</td>
                    <PostalCode>
                    </PostalCode>
                    <PostalCodeButton>
                        주소설정
                    </PostalCodeButton>
                </tr>

            </table>
        </UserInfoContainer>

    );
}
const UserInfoContainer = styled.div`
  
    margin-top: 20px;

`
const UserNameContainer = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    margin-top: 20px;
    display: flex;
    justify-content: center;
`
const PostalCodeContainer = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

const UserName = styled.td`
    width: 200px;
    height: 30px;
    background-color: white;
`
const UserNameButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
`
const PostalCode = styled.td`
    width: 500px;
    height: 30px;
    background-color: white;
`
const PostalCodeButton = styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
`


export default UserInfo;
import React, { useState } from 'react';
import styled from 'styled-components';
function Reply() {
    const [overFlowY, setOverFlowY] = useState("hidden");
    const expand = () => {
        setOverFlowY("visible")
    }
    return (
        <RplyContainer>
            <IconImage src="mockImage/icon.jpeg" />
            <ReplySummary>
                <UserNameDateContianer>
                    <UserName>
                        아무개
                    </UserName>
                    <Date>
                        2022/12/31
                        </Date>
                </UserNameDateContianer>
                <ReplyText>
                    와 정말싸요 ##########################################!
                </ReplyText>
                <ReplyToReply>답글보기</ReplyToReply>
            </ReplySummary>
        </RplyContainer>
    );
}


const RplyContainer = styled.div`
    display :flex ;
    margin: 20px auto 0 auto;
    width: 100%;
   
   // border: 1px solid black;
`
const IconImage = styled.img`
    border-radius: 100%;
    height: 70px;
        margin-left: 15px;

`
const ReplySummary = styled.div`
    border-radius: 100%;
    font-size: 24px;
    text-align: left;
    margin-left: 20px;
    font-family: NotoSans-Bold;
`
const UserNameDateContianer = styled.div`
    display: flex;
`
const UserName = styled.div`
    border-radius: 100%;
    font-size: 24px;
    font-family: NotoSans-Bold;
`
const Date = styled.div`
    margin-left: 20px;
    font-size: 16px;
    color: gray;
    line-height: 32px;

`
const ReplyText = styled.div`
    border-radius: 100%;
   // height: 70px;
   font-family: notoSans-Medium;
    font-size: 18px;
    word-break: break-all;
`
const ReplyToReply = styled.div`
    font-family: notoSans-Medium;
    font-size: 16px;
    cursor: pointer;
    color: blue;
`
export default Reply;
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { ReplyType } from "../../../types/Reply";
interface Props {
  data: ReplyType;
}
function formatData(params: Date) {
  const string = params.toString();
  let array = string.split("");
  array.splice(10);
  const returnString = array.join("");
  return returnString;
}
function Reply(props: Props) {
  const [overFlowY, setOverFlowY] = useState("hidden");
  const expand = () => {
    setOverFlowY("visible");
  };
  return (
    <RplyContainer>
      <IconImage src={props.data.user.profile_image} />
      <ReplySummary>
        <UserNameDateContianer>
          <UserName>{props.data.user.nickname}</UserName>
          <Date>{formatData(props.data.time)}</Date>
        </UserNameDateContianer>
        <ReplyText>{props.data.content}</ReplyText>
      </ReplySummary>
    </RplyContainer>
  );
}

const RplyContainer = styled.div`
  display: flex;
  margin: 20px auto 0 auto;
  width: 100%;

  // border: 1px solid black;
`;
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
  width: 70px;
  margin-left: 15px;
`;
const ReplySummary = styled.div`
  border-radius: 100%;
  font-size: 24px;
  text-align: left;
  margin-left: 20px;
  font-family: NotoSans-Bold;
`;
const UserNameDateContianer = styled.div`
  display: flex;
`;
const UserName = styled.div`
  border-radius: 100%;
  font-size: 24px;
  font-family: NotoSans-Bold;
`;
const Date = styled.div`
  margin-left: 20px;
  font-size: 16px;
  color: gray;
  line-height: 32px;
`;
const ReplyText = styled.div`
  border-radius: 100%;
  // height: 70px;
  font-family: notoSans-Medium;
  font-size: 18px;
  word-break: break-all;
`;
const ReplyToReply = styled.div`
  font-family: notoSans-Medium;
  font-size: 16px;
  cursor: pointer;
  color: blue;
`;
export default Reply;

import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

function LoadingReply() {
  return (
    <RplyContainer>
      <IconImage />
      <LoadingReplySummary>
        <UserNameDateContianer>
          <UserName></UserName>
          <Date></Date>
        </UserNameDateContianer>
        <LoadingReplyText />
      </LoadingReplySummary>
    </RplyContainer>
  );
}

const RplyContainer = styled.div`
  display: flex;
  margin: 20px auto 0 auto;
  width: 100%;

  // border: 1px solid black;
`;
const IconImage = styled.div`
  border-radius: 100%;
  height: 70px;
  width: 70px;
  margin-left: 15px;
  background-color: #d3d3d3;
`;
const LoadingReplySummary = styled.div`
  border-radius: 100%;
  font-size: 24px;
  text-align: left;
  margin-left: 20px;
  font-family: NotoSans-Bold;
`;
const UserNameDateContianer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const UserName = styled.div`
  height: 20px;
  width: 40px;
  background-color: #d3d3d3;
`;
const Date = styled.div`
  margin-left: 20px;
  height: 15px;
  width: 70px;
  background-color: #d3d3d3;
`;
const LoadingReplyText = styled.div`
  margin-top: 12px;
  height: 14px;
  width: 150px;
  background-color: #d3d3d3;
`;
const LoadingReplyToLoadingReply = styled.div`
  font-family: notoSans-Medium;
  font-size: 16px;
  cursor: pointer;
  color: blue;
`;
export default LoadingReply;

import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import ReplyComPonent from "./reply";
import { ReplyType } from "../../../types/Reply";
import LoadingReply from "./loadingReply";
function getReply(id: any) {
  const getReplyWithAxios = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/product/${id}/reply`
    );
    return data;
  };

  const query = useQuery(`Reply${id}`, getReplyWithAxios);
  return { data: query.data, isLoading: query.isLoading };
}

function ReplyContainer() {
  const [overFlowY, setOverFlowY] = useState("hidden");
  const [showButton, setShowButton] = useState(false);
  const [reply, setReply] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = getReply(id);
  // console.log(reply2);
  const focusEvent = () => {
    setShowButton(!showButton);
    console.log("hi");
  };
  const onEnter = (e: React.KeyboardEvent) => {
    console.log(e);
    if (e.key === "Enter") {
      const token = localStorage.getItem("accessToken");
      axios.post(
        `http://localhost:5000/product/${id}/reply`,
        { content: reply },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setShowButton(false);
      setReply("");
    }
  };
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setReply(e.target.value);
  };
  const onClick = () => {
    const token = localStorage.getItem("accessToken");
    axios.post(
      `http://localhost:5000/product/${id}/reply`,
      { content: reply },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setShowButton(false);
    setReply("");
  };
  return (
    <ReplyContainerContainer>
      <ReplyComposeContainer>
        <IconImage src="mockImage/icon.jpeg" />
        <div style={{ width: "96%" }}>
          <Compose
            placeholder="댓글을입력해주세요"
            value={reply}
            onFocus={focusEvent}
            onBlur={focusEvent}
            onChange={onChange}
            onKeyDown={onEnter}
          ></Compose>
          <Line />
          {showButton ? (
            <ButtonContainer>
              <Button onClick={onClick}>확인</Button>
              <Button>취소</Button>
            </ButtonContainer>
          ) : null}
        </div>
      </ReplyComposeContainer>

      {isLoading
        ? [1, 2, 3, 4].map((ele, key) => <LoadingReply key={key} />)
        : data.map((ele: ReplyType) => (
            <ReplyComPonent key={ele.id} data={ele} />
          ))}
      {/* {[1, 2, 3, 4].map((ele, key) => (
        <LoadingReply key={key} />
      ))} */}
    </ReplyContainerContainer>
  );
}
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
  margin-left: 15px;
  margin-right: 15px;
`;
const ButtonContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  border: none;
  margin-right: 10px;
  // color: white;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
const Line = styled.img`
  width: 96%;
  height: 4px;
  background-color: black;
`;
const Compose = styled.textarea`
  :focus {
    outline: none;
  }
  overflow: hidden;
  resize: none;
  width: 100%;
  border: none;
  font-size: 1rem;
`;
const ReplyContainerContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 780px;
  margin: 20px auto 0 auto;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const ReplyComposeContainer = styled.div`
  // border: 1px solid black;
  margin-top: 30px;
  display: flex;
`;

export default ReplyContainer;

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import styled from "styled-components";
import ReplyComPonent from "./reply";
import { ReplyType } from "../../../types/Reply";
import LoadingReply from "./loadingReply";
import { flatMap } from "lodash";

function useReply(id: number) {
  const query = useInfiniteQuery(
    `reply${id}`,
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get<{ item: ReplyType[]; count: number }>(
        `http://localhost:5000/product/${id}/reply`,
        {
          params: { page: pageParam },
        }
      );
      return { data: data, nextPage: pageParam + 1 };
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    }
  );
  const data = query.data;
  console.log(data);
  return {
    data: flatMap(data?.pages.map(({ data }) => data.item)),
    isLoading: query.isLoading,
    refetch: query.refetch,
    isFetching: query.isFetching,
    fetchNextPage: query.fetchNextPage,
  };
}

function ReplyContainer() {
  const [showButton, setShowButton] = useState(false);
  const [reply, setReply] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const [fetching, setFetching] = useState(false);
  const { data, isLoading, refetch, isFetching, fetchNextPage } = useReply(
    Number(id)
  );
  console.log(data);
  const focusEvent = () => {
    setShowButton(!showButton);
  };

  const onEnter = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const token = localStorage.getItem("accessToken");
      axios.post(
        `http://localhost:5000/product/${id}/reply`,
        { content: reply },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await setShowButton(false);
      await setReply("");
      await refetch();
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setReply(e.target.value);
  };

  const onClick = async () => {
    const token = localStorage.getItem("accessToken");
    await axios.post(
      `http://localhost:5000/product/${id}/reply`,
      { content: reply },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    await setShowButton(false);
    await setReply("");
    await refetch();
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight + 1 >= scrollHeight && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      fetchNextPage();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <ReplyContainerContainer>
      <ReplyComposeContainer>
        <IconImage src="mockImage/icon.jpeg" />
        <div style={{ width: "96%" }}>
          <Compose
            placeholder="댓글을입력해주세요"
            value={reply}
            onFocus={focusEvent}
            onChange={onChange}
            onKeyDown={onEnter}
          ></Compose>
          <Line />
          {showButton ? (
            <ButtonContainer>
              <Button onClick={onClick}>확인</Button>
              <Button onClick={() => refetch()}>취소</Button>
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

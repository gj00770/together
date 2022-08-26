import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import styled from "styled-components";
import ReplyComPonent from "./reply";
import { ReplyType } from "../../../types/Reply";
import LoadingReply from "./loadingReply";
import { flatMap } from "lodash";
import { createReply } from "../../../remotes/reply/createReply";
import { replaceAt } from "react-query/types/core/utils";
import { useUser } from "../../../hooks/useUser";
import { useLoginModal } from "../../../modal/loginModal";

function useReply(id: number) {
  const query = useInfiniteQuery(
    `reply${id}`,
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get<{ item: ReplyType; count: number }>(
        `http://13.209.132.48/product/${id}/reply`,
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
  const [fetching] = useState(false);
  const { data, isLoading, refetch, isFetching, fetchNextPage } = useReply(
    Number(id)
  );

  const user = useUser();
  const onEnter = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && reply.length > 0) {
      await createReply(Number(id), reply);
      await setShowButton(false);
      await setReply("");
      await refetch();
      console.log(reply);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setReply(e.target.value);
  };

  const clickButton = async () => {
    if (reply.length > 0) {
      await createReply(Number(id), reply);
      await setShowButton(false);
      await setReply("");
      await refetch();
    }
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
  }, []);
  const openLoginModal = useLoginModal();
  return (
    <ReplyContainerContainer>
      <ReplyComposeContainer>
        <IconImage
          src={
            user.data
              ? user.data?.profile_image
              : "https://togetheruser.s3.ap-northeast-2.amazonaws.com/1660514035930icon.jpeg"
          }
        />
        <InputHolder>
          <Compose
            placeholder="댓글을입력해주세요"
            value={reply}
            onFocus={() => (user.data ? setShowButton(true) : openLoginModal())}
            onChange={onChange}
            // onKeyDown={onEnter} 2번렌더링오류 처리요망..
          ></Compose>
          <Line />
          {showButton ? (
            <ButtonContainer>
              <ConfirmButton
                onClick={clickButton}
                style={{
                  color: reply.length > 0 ? "white" : "grey",
                  backgroundColor: reply.length > 0 ? "#4aa8d8" : "#EFEFEF",
                }}
              >
                확인
              </ConfirmButton>
              <Button onClick={() => setShowButton(false)}>취소</Button>
            </ButtonContainer>
          ) : null}
        </InputHolder>
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
const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  margin: 5px auto 0 auto;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const IconImage = styled.img`
  border-radius: 100%;
  height: 70px;
  margin-left: 15px;
  margin-right: 15px;
`;
const ButtonContainer = styled.div`
  margin-top: 5px;
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
const ConfirmButton = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
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
const Compose = styled.input`
  :focus {
    outline: none;
  }
  height: 30px;
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

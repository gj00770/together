import axios from "axios";
import { flatMap } from "lodash";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { PurchaseItem } from "../../../types/PurchaseItem";
import { version4 } from "../../../utils/sortByDate";
import PurchaseItemList from "./PurchaseItem";
function usePurchaseItem() {
  const token = localStorage.getItem("accessToken");

  const query = useInfiniteQuery(
    "purchaseItem",
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get<{ item: PurchaseItem[]; count: number }>(
        `http://localhost:5000/purchase`,
        {
          params: { page: pageParam },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { data: data.item, nextPage: pageParam + 1, count: data.count };
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    }
  );
  const data = query.data;

  return {
    data: flatMap(data?.pages.map(({ data }) => data)),
    count: data?.pages[0].count,
    isLoading: query.isLoading,
    refetch: query.refetch,
    isFetching: query.isFetching,
    fetchNextPage: query.fetchNextPage,
  };
}
function PurchaseItemContainer() {
  const [fetching, setFetching] = useState(false);
  const { data, isLoading, refetch, isFetching, fetchNextPage, count } =
    usePurchaseItem();

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
  if (isLoading) {
    return <div>...</div>;
  }
  return (
    <MyCartItemContainer>
      {version4(data).map((ele) => (
        <div>
          <Date>
            {ele.year}년 {ele.month + 1}월 {ele.date}일
          </Date>
          <Line />

          {ele.list.map((ele, key) => (
            <PurchaseItemList product={ele} key={key} />
          ))}
        </div>
      ))}
      {data.length === count ? null : (
        <div onClick={() => fetchNextPage()}>더보기</div>
      )}
    </MyCartItemContainer>
  );
}
const MyCartItemContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 90%;
  height: 3px;
  background-color: black;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Date = styled.div`
  width: 100%;
  margin: 60px 0 15px 0;
  font-size: 22px;
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 400px) {
  }
`;

export default PurchaseItemContainer;

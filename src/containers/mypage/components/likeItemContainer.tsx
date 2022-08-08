import axios from "axios";
import { flatMap } from "lodash";
import React from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { PurchaseItem } from "../../../types/PurchaseItem";
import { version4 } from "../../../utils/sortByDate";
import LikeItem from "./LikeItem";
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
function LikeItemContainer() {
  const { data, isLoading, refetch, isFetching, fetchNextPage, count } =
    usePurchaseItem();
  //console.log(version4(data));
  // 35
  // 3
  // fllor(35)
  //올림
  // 4
  // ㅁㄴㅇ

  // 35
  //
  console.log(count);
  if (isLoading) {
    return <div>...</div>;
  }
  return (
    <MyCartItemContainer>
      {version4(data).map((ele) => (
        <div>
          <Date>
            {ele.year}년 {ele.month}월 {ele.date}일
          </Date>
          <Line />

          {ele.list.map((ele, key) => (
            <LikeItem product={ele} key={key} />
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
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin: 30px 0 10px 0;
`;
const Date = styled.div`
  width: 100%;
  height: 5px;
  margin: 60px 0 10px 0;
  font-size: 2.5rem;
`;

export default LikeItemContainer;

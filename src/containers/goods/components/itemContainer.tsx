import axios from "axios";
import { flatMap } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { Product } from "../../../types/Product";
import Item from "./item";

function useProductList(
  category: string[] | string | undefined,
  search: string[] | string | undefined,
  status: string[] | string | undefined
) {
  console.log(category, search, status);

  const query = useInfiniteQuery(
    category
      ? `category${category}`
      : search
      ? `search${search}`
      : `status${status}`,
    async ({ pageParam = 0 }) => {
      const { data } = await axios.get<{ item: Product[]; count: number }>(
        category
          ? `http://localhost:5000/product/findcategory/${category}`
          : search
          ? `http://localhost:5000/product/findsearch/${search}`
          : `http://localhost:5000/product/findstatus/${status}`,

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
  console.log(flatMap(data?.pages.map(({ data }) => data)));
  return {
    data: flatMap(data?.pages.map(({ data }) => data.item)), // 총개수 flat
    isLoading: query.isLoading,
    refetch: query.refetch,
    isFetching: query.isFetching,
    fetchNextPage: query.fetchNextPage,
  };
}

function ItemContainer() {
  const router = useRouter();
  const { category, search, status } = router.query;
  const [fetching, setFetching] = useState(false);
  const { data, isLoading, refetch, isFetching, fetchNextPage } =
    useProductList(category, search, status);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      console.log(scrollTop + clientHeight, scrollHeight);
      if (scrollTop + clientHeight + 1 >= scrollHeight && fetching === false) {
        // 페이지 끝에 도달하면 추가 데이터를 받아온다
        fetchNextPage();
      }
    };
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (isLoading) {
    return <div>....loading</div>;
  }
  console.log(data);
  return (
    <ItemContainerContainer>
      {data.length > 0 ? (
        data.map((ele: Product) => <Item data={ele} key={ele.id} />)
      ) : (
        <ImageContainer>
          <ImageNotFound src="https://cdn.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png" />
        </ImageContainer>
      )}
    </ItemContainerContainer>
  );
}
const ItemContainerContainer = styled.div`
  display: grid;
  //width: 70vw;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const ImageNotFound = styled.img`
  width: 20vw;
  height: 20vw;
`;
const ImageContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export default ItemContainer;

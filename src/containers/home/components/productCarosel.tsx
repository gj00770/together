import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import styled from "styled-components";
import LoadingSliderItem from "./LoadingSlideritem";
//import { useProduct } from "../hook/useProduct";
import Carosel, { CaroselRef } from "../../../components/carosel";
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
const NUM = ["1", "2", "3", "4", "5", "6"];
import Item from "../../../components/SliderItem";
interface Product {
  id: number;
  productName: string;
  itemImg: string;
  itemInfo: string;
  price: number;
  end_date: number;
}
interface Carosel {
  category: string;
}
function useProductList(category: Carosel) {
  const caroselRef = useRef<CaroselRef>(null);
  const fetchData = async () => {
    const result = await (
      await fetch(`http://localhost:5000/product/findcat/${category}`)
    ).json();

    return result;
    console.log(result);
  };
  const { isLoading, isError, data, error } = useQuery(
    `${category}`,
    fetchData
  );

  return { ref: caroselRef, value: data, loading: isLoading };
}

function ProductCarosel<Carosel>(props: any) {
  const { ref, value, loading } = useProductList(props.category);
  const router = useRouter();
  const { id } = router.query;
  // if (loading) {
  //   return <div>.../sdsd</div>;
  // }
  return (
    <div style={{ marginBottom: "30px" }}>
      <NameContainer>
        <Name>{props.category} </Name>
        <ViewMore
          onClick={() => router.push(`/goods/?category=${props.category}`)}
        >
          더보기
        </ViewMore>
      </NameContainer>
      <ArrowProductContainer>
        <ArrowRight onClick={() => ref.current?.next()}> &gt;</ArrowRight>
        <ArrowLeft onClick={() => ref.current?.prev()}> &lt;</ArrowLeft>

        <Carosel ref={ref} infinity={false} gap={2}>
          {loading
            ? NUM.map((ele) => <LoadingSliderItem key={ele} />)
            : value.map((ele: Product) => <Item data={ele} key={ele.id} />)}
        </Carosel>
      </ArrowProductContainer>
    </div>
  );
}

export default ProductCarosel;

const ArrowProductContainer = styled.div`
  width: 95vw;
  column-gap: 2%;
  max-width: 1120px;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
    //height: 39.166667vw;
    //  column-gap: 4%;
    // height: 400px;
    // border: 1px solid black;
  }
  @media screen and (max-width: 600px) {
    height: 70.166667vw;
    border: 1px solid black;
  }
`;
const NameContainer = styled.div`
  width: 90vw;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: 52px;
  font-family: NotoSansBold;
`;
const ViewMore = styled.div`
  cursor: pointer;
  font-family: NotoSansBold;
  margin-top: auto;
  font-size: 24px;
  margin-right: 20px;
`;

const ArrowRight = styled.div`
  position: absolute;
  cursor: pointer;
  height: 60px;
  width: 60px;
  top: calc(50% - 60px);
  z-index: 5;
  right: 0;
  background-color: white;
  border-radius: 60px;
  text-align: center;
  color: black;
  line-height: 35px;
  box-shadow: 3px 3px 5px;
  font-family: NotoSansBold;
  line-height: 55px;
`;
const ArrowLeft = styled.div`
  position: absolute;
  cursor: pointer;
  left: -0.95vw;
  top: calc(50% - 60px);
  height: 60px;
  width: 60px;
  border-radius: 60px;
  z-index: 5;
  background-color: white;
  text-align: center;
  color: black;
  line-height: 55px;
  box-shadow: 3px 3px 5px;
  font-family: NotoSansBold;
`;

const ProductCaroselList = styled.div`
  width: 100%;
  transition: transform 0.5s ease;
  display: flex;
  column-gap: 2%;
  //transition-property:translateX();
  @media screen and (max-width: 600px) {
    column-gap: 4%;
  }
`;

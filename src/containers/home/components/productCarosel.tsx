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
interface CategoryList {
  화장품: string;
  의류: string;
  가전: string;
  식품: string;
}
const CategorySummary: CategoryList = {
  화장품: "내 피부 관리를 위한 아이템",
  의류: "이런옷 어때요?",
  가전: "집안의 핫 아이템",
  식품: "식탁위 단골 재료",
};
import Item from "../../../components/SliderItem";
import axios from "axios";
import { Product } from "../../../types/Product";

interface Carosel {
  category: string;
}
function useProductList(category: string) {
  const caroselRef = useRef<CaroselRef>(null);
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/product/findcarosel/${category}`,
      {}
    );
    return data;
  };
  const { isLoading, isError, data, error } = useQuery(
    `${category}`,
    fetchData
  );

  return { ref: caroselRef, value: data, loading: isLoading };
}
interface Props {
  category: string;
}
function ProductCarosel({ category }: Props) {
  const { ref, value, loading } = useProductList(category);
  const router = useRouter();
  // if (loading) {
  //   return <div>.../sdsd</div>;
  // }
  return (
    <div style={{ marginBottom: "30px", marginTop: "120px" }}>
      <NameContainer>
        <Name onClick={() => router.push(`/goods/?category=${category}`)}>
          {CategorySummary[category]}{" "}
        </Name>
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
  }
`;
const NameContainer = styled.div`
  width: 90vw;
  max-width: 1120px;
  display: flex;
  justify-content: center;
`;
const Name = styled.div`
  font-size: 32px;
  margin-bottom: 24px;
  font-family: NotoSans;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
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

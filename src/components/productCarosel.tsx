import React, { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import styled from "styled-components";
import { useProduct } from "../hook/useProduct";
import Carosel, { CaroselRef } from "./carosel";
// const dummyNumArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

import Item from "./sliderItem";
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
  // const product = useProduct("가전");
  //console.log(product);
  const fetchData = async () => {
    const result = await (
      await fetch(`http://localhost:5000/product/${category}`)
    ).json();
    return result;
    console.log(result);
  };
  const { isLoading, isError, data, error } = useQuery(
    `${category}`,
    fetchData
  );
  //console.log("123123", data);
  //setDummyArr(data);

  return { ref: caroselRef, value: data, loading: isLoading };
}

function ProductCarosel<Carosel>(props: any) {
  const { ref, value, loading } = useProductList(props.category);

  return (
    <div style={{ marginBottom: "30px" }}>
      <NameContainer>
        <Name>{props.category} </Name>
        <ViewMore>더보기</ViewMore>
      </NameContainer>
      <ArrowProductContainer>
        <ArrowRight onClick={() => ref.current?.next()}> &gt;</ArrowRight>
        <ArrowLeft onClick={() => ref.current?.prev()}> &lt;</ArrowLeft>

        <Carosel ref={ref} infinity={false} gap={2}>
          {!loading &&
            value.map((ele: Product) => <Item img={ele} key={ele.id} />)}
        </Carosel>
      </ArrowProductContainer>
    </div>
  );
}

export default ProductCarosel;
//259px + 259px + 259px + 259px
//260px * 4 = 800 + 240 = 1040
// gap * 4

//1040 80
const ArrowProductContainer = styled.div`
  width: 95vw;
  // 23.75vw
  column-gap: 2%;
  max-width: 1120px;
  position: relative;
  //max-height: 434px;
  display: flex;
  justify-content: center;
  // column-gap: 2%;
  //border: 1px solid black;
  @media screen and (min-width: 600px) {
    //height: 39.166667vw;
    //  column-gap: 4%;
    // height: 400px;
    // border: 1px solid black;
  }
  @media screen and (max-width: 600px) {
    height: 70.166667vw;
    // height: 400px;
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
  font-family: InkLipquid;
`;
const ViewMore = styled.div`
  font-family: InkLipquid;
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

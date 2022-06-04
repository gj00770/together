import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import Carosel, { CaroselRef } from "./NWEWEWN";
const dummyNumArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

import Item from "./sliderItem";

function ProductCarosel() {
  const caroselRef = useRef<CaroselRef>(null);
  //console.log(caroselRef);

  return (
    <div style={{ marginBottom: "30px" }}>
      <NameContainer>
        <Name>오늘의 최고의 상품 </Name>
        <ViewMore>더보기</ViewMore>
      </NameContainer>
      <ArrowProductContainer>
        <ArrowRight onClick={() => caroselRef.current?.next()}>
          {" "}
          &gt;
        </ArrowRight>
        <ArrowLeft onClick={() => caroselRef.current?.prev()}> &lt;</ArrowLeft>
        {/* <ProductCaroselContainer ref={containerRef}>
          <ProductCaroselList
            style={{
              transform: `translateX( ${-counter * 100}%) `,
              marginRight: "0%",
            }}
            ref={contentRef}
          >
            {dummyArr.map((ele, key) => (
              <Item img={ele} key={key} />
            ))}
          </ProductCaroselList>
        </ProductCaroselContainer> */}
        <Carosel ref={caroselRef}>
          {dummyNumArr.map((ele, key) => (
            <Item img={ele} key={key} />
          ))}
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

  max-width: 1140px;
  position: relative;
  max-height: 434px;
  display: flex;
  justify-content: center;

  //border: 1px solid black;
  @media screen and (min-width: 600px) {
    height: 39.166667vw;
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
  font-size: 2rem;
`;
const ViewMore = styled.div`
  font-size: 16px;
  margin-right: 20px;
`;
const ProductCaroselContainer = styled.div`
  //display: flex;
  max-width: 1120px;
  max-height: 434px;
  overflow-x: hidden;
  width: 95vw;
  float: left;
  display: flex;
  position: relative;
  //  border: 1px solid red;
  @media screen and (max-width: 600px) {
    // width: 100%;
    height: 70.166667vw;
  }
  @media screen and (min-width: 600px) {
    height: 39.166667vw;
    // height: 400px;
    //  border: 1px solid black;
  }
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
`;
const ArrowLeft = styled.div`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: calc(50% - 60px);
  height: 60px;
  width: 60px;
  border-radius: 60px;
  z-index: 5;
  background-color: white;
  text-align: center;
  color: black;
  line-height: 35px;
  box-shadow: 3px 3px 5px;
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

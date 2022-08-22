import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const arr = [1, 2, 3, 4, 5];
const dummyNumArrColor = ["pink", "green", "pink", "green", "yellow"];
import Carosel2, { CaroselRef } from "./carosel";
interface Props {
  number: number;
}
function CaroselEle(props: Props) {
  return (
    <CaroselEleS
      style={{ backgroundColor: ` ${dummyNumArrColor[props.number - 1]}` }}
      src={`mockImage/sliderEle/${props.number}.webp`}
    ></CaroselEleS>
  );
}
function InfinityCarosel() {
  const caroselRef = useRef<CaroselRef>(null);

  return (
    <CaroselContainer>
      <ArrowRight onClick={() => caroselRef.current?.next()}> &gt;</ArrowRight>
      <ArrowLeft onClick={() => caroselRef.current?.prev()}> &lt;</ArrowLeft>

      <Carosel2 ref={caroselRef} infinity={true} gap={0}>
        {arr.map((ele, key) => (
          <CaroselEle key={key} number={ele} />
        ))}
      </Carosel2>
    </CaroselContainer>
  );
}

export default InfinityCarosel;

const CaroselContainer = styled.div`
  //display: flex;
  max-width: 1900px;
  max-height: 440px;
  overflow-x: hidden;
  width: 100vw;
  height: 30vw;
  float: left;
  display: flex;
  position: relative;
`;

const ArrowRight = styled.div`
  position: absolute;
  // left: 80%;
  cursor: pointer;
  height: 40px;
  width: 40px;
  top: 50%;
  z-index: 5;
  right: 0;
  opacity: 0.5;
  background-color: black;
  border-radius: 20px;
  margin-right: 10%;
  text-align: center;
  color: white;
  line-height: 35px;
`;
const ArrowLeft = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50%;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  z-index: 5;
  opacity: 0.5;
  background-color: black;
  margin-left: 10%;
  text-align: center;
  color: white;
  line-height: 35px;
`;
const CaroselEleS = styled.img`
  flex: none;
  box-sizing: content-box;
  width: 100vw;
  //height: 30vw;
  max-width: 1900px;
  //max-height: 3px;
`;

const CaroselList = styled.div`
  transition: transform 0.5s ease;
  display: flex;
  //transition-property:translateX();
`;

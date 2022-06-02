import React, { useState, useEffect } from "react";

import styled from "styled-components";
const dummyNumArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5];
const dummyNumArrColor = ["pink", "green", "pink", "green", "yellow"];
function CaroselEle(props: any) {
  return (
    <CaroselEleS
      style={{ backgroundColor: ` ${dummyNumArrColor[props.number - 1]}` }}
      //src="mockImage/sliderEle/`${props.number}`.webp"
      src={`mockImage/sliderEle/${props.number}.webp`}
    >
      {/* <Image src="mockImage/sliderIMG.webp" /> */}
    </CaroselEleS>
  );
}

function Carosel() {
  ``;
  const [position, setPosition] = useState(0);
  const [dummyArr, setDummyArr] = useState(dummyNumArr);
  const [counter, setCounter] = useState(dummyNumArr.length / 3);
  const [left, setLeft] = useState(-500);
  // let dummyList: any = dummyArr.map((ele, key) => (<CaroselEle key={key} number={ele} horizontalValue={horizontalValue} />));

  const ClickRightArr = () => {
    console.log(counter);
    if (dummyNumArr.length - 1 === counter) {
      //  console.log(sliceArr)

      setCounter(10);
      setLeft(left + 500);

      setPosition(position - (1 / dummyNumArr.length) * 100);
    } else {
      setCounter(counter + 1);
      setPosition(position - (1 / dummyNumArr.length) * 100);
    }
  };

  const ClickLeftArr = () => {
    if (counter === 0) {
      setCounter(4);
      setLeft(left - 500);
      setPosition(position + (1 / dummyNumArr.length) * 100);
    } else {
      setPosition(position + (1 / dummyNumArr.length) * 100);
      setCounter(counter - 1);
    }
  };

  // useEffect(() => {
  // }, [dummyArr])

  return (
    <CaroselContainer>
      <ArrowRight onClick={ClickRightArr}> &gt;</ArrowRight>
      <ArrowLeft onClick={ClickLeftArr}> &lt;</ArrowLeft>
      <CaroselList
        style={{
          transform: `translateX( ${position}%) `,
          marginLeft: `${left}%`,
          marginRight: "0%",
        }}
      >
        {dummyArr.map((ele, key) => (
          <CaroselEle key={key} number={ele} />
        ))}
      </CaroselList>
    </CaroselContainer>
  );
}

export default Carosel;

const CaroselContainer = styled.div`
  //display: flex;
  max-width: 1900px;
  max-height: 390px;
  margin: 20px;
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
  height: 30vw;
  max-width: 1900px;
  max-height: 390px;
`;

const CaroselList = styled.div`
  transition: transform 0.5s ease;
  display: flex;
  //transition-property:translateX();
`;

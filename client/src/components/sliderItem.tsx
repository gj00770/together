import React, { useState } from "react";
import styled from "styled-components";

function SliderItem(img: any) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [mouseOver, setMoseOver] = useState(false);
  console.log(img);
  const onMouseEvent = () => {
    console.log("his");
    // setBorder("2px 2px 2px 2px #D3D3D3");
    //   setOpacity("0.5");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setMoseOver(true);
  };

  const outMouseEvent = () => {
    setBorder("none");
    // setOpacity("1.0");
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };

  return (
    <SliderItemContainer
      onMouseEnter={onMouseEvent}
      onMouseLeave={outMouseEvent}
      style={{
        boxShadow: border,
        opacity: opacity,
        backgroundColor: backgroundColor,
      }}
    >
      <Image src={`mockImage/productThumbnail/${img.img}.jpeg`} />

      <Name>and22jsr</Name>
      <Price>32600원</Price>
      {mouseOver ? (
        <MouseOverContainer style={{}}>
          <div>
            <Date>2022/12/31</Date>
            <People>26/32명</People>
          </div>
          <CartHeartContainer>
            <CartContainer>
              <Cart src={`mockImage/shopping-cart.png`} />
            </CartContainer>
            <Heart src={`mockImage/heart.png`} />
          </CartHeartContainer>
        </MouseOverContainer>
      ) : null}
    </SliderItemContainer>
  );
}

const SliderItemContainer = styled.div`
  width: 23%;
  //height: 100%;

  //background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 7;
  @media screen and (max-width: 600px) {
    width: 46%;
  }
`;
const MouseOverContainer = styled.div`
  //width: 260px;
  width: 23%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 6;
  @media screen and (max-width: 600px) {
    width: 46%;
  }
`;
const CartHeartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //width: 260px;
`;
const Cart = styled.img`
  //width: 260px;
  width: 60%;
  height: 60%;
`;
const CartContainer = styled.div`
  //width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 4vw;
  border-radius: 100%;
  background-color: #4aa8d8;
`;
const Heart = styled.img`
  //width: 260px;
  width: 4vw;
  height: 4vw;
`;
const Image = styled.img`
  //width: 260px;
  width: 100%;

  height: 320px;
  // border-radius: 10px;
  z-index: 2;
`;
const Name = styled.div`
  margin-top: 10px;
  margin-right: auto;
  word-break: break-word;
  text-align: left;
  font-size: 1.2rem;
`;

const Price = styled.div`
  margin-top: 5px;
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 1.2rem;
  @media screen and (max-width: 600px) {
    // width: 100%;
  }
`;
const Date = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  text-align: left;
  color: white;
`;

const People = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  text-align: left;
  color: white;
`;
export default SliderItem;

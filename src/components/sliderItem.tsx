import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

function SliderItem(img: any) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [mouseOver, setMoseOver] = useState(false);
  console.log(img.img.id);
  //console.log(img.img.itemImg);
  const onMouseEvent = () => {
    //  console.log("his");
    // setBorder("2px 2px 2px 2px #D3D3D3");
    //   setOpacity("0.5");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setMoseOver(true);
  };
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const outMouseEvent = () => {
    setBorder("none");
    // setOpacity("1.0");
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };

  return (
    <SliderItemContainer
      onClick={() => router.push(`/product/?id=${img.img.id}`)}
      onMouseEnter={onMouseEvent}
      onMouseLeave={outMouseEvent}
      style={{
        boxShadow: border,
        opacity: opacity,
        backgroundColor: backgroundColor,
      }}
    >
      <Image src={`${img.img.itemImg}`} />

      <Name>{img.img.productName}</Name>
      <Price>{img.img.price}</Price>
      {mouseOver ? (
        <MouseOverContainer style={{}}>
          <div></div>
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
  height: 23vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 6;
  text-align: center;
  @media screen and (min-width: 1600px) {
    height: 320px;
  }
  @media screen and (max-width: 600px) {
    height: 46vw;
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
  width: 30%;
  height: 90%;
  border-radius: 100%;
  background-color: #4aa8d8;
`;
const Heart = styled.img`
  //width: 260px;

  width: 30%;
  height: 90%;
`;
const Image = styled.img`
  //width: 260px;
  width: 100%;
  border: 0.5px solid #d3d3d3;
  height: 23vw;
  // border-radius: 10px;
  z-index: 2;
  @media screen and (min-width: 1600px) {
    height: 320px;
  }
  @media screen and (max-width: 600px) {
    height: 46vw;
  }
`;
const Name = styled.div`
  font-family: Notosans;
  margin-top: 10px;
  margin-right: auto;
  word-break: break-word;
  text-align: left;
  font-size: 20px;
`;

const Price = styled.div`
  font-family: InkLipquid;
  //font-family: NotoSans;
  color: #4aa8d8;
  font-size: 30px;
  margin-top: 5px;
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  @media screen and (max-width: 600px) {
    // width: 100%;
  }
`;
const Date = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  text-align: center;
  color: white;
`;

const People = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  text-align: center;
  color: white;
`;
export default SliderItem;

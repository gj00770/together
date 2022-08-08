import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { createCartItem } from "../remotes/cartItem";
import { Product } from "../types/Product";
import { formatComma } from "../utils/formatComma";
import { useSlashDate } from "../utils/useSlashDate";
interface Props {
  data: Product;
}
function SliderItem(props: Props) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [mouseOver, setMoseOver] = useState(false);
  const onMouseEvent = () => {
    setMoseOver(true);
  };
  const router = useRouter();

  const outMouseEvent = () => {
    setBorder("none");
    setMoseOver(false);
  };
  const addCartItem = (e: any) => {
    console.log("hi");
    e.stopPropagation();
    createCartItem(props.data.id, 1);
  };
  return (
    <SliderItemContainer
      onClick={() => router.push(`/product/?id=${props.data.id}`)}
      onMouseEnter={onMouseEvent}
      onMouseLeave={outMouseEvent}
      style={{
        boxShadow: border,
        opacity: opacity,
        backgroundColor: backgroundColor,
      }}
    >
      <Image src={`${props.data.itemImg}`} />

      <Name>{props.data.productName}</Name>
      <Price>{formatComma(props.data.price)}</Price>
      {mouseOver ? (
        <MouseOverContainer style={{}}>
          <div></div>
          <div>
            <Date> {useSlashDate(props.data.end_date)}</Date>
          </div>
          <CartHeartContainer>
            <CartContainer>
              <Cart src={`mockImage/shopping-cart.png`} onClick={addCartItem} />
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
  z-index: 99;
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
  height: 258px;
  border-radius: 10px;
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
  font-family: NotoSansBold;
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

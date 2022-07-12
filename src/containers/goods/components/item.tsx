import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Product } from "../../../types/Product";

function Item(props: Product, key: number) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [mouseOver, setMoseOver] = useState(false);
  const router = useRouter();
  const onMouseEvent = () => {
    console.log("his");
    setMoseOver(true);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };

  const outMouseEvent = () => {
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };
  // id: number;
  // productName: string;
  // price: number;
  // end_date: number;
  // itemImg: string;
  // itemInfo: string;
  return (
    <ItemContainer
      onMouseEnter={onMouseEvent}
      onMouseLeave={outMouseEvent}
      style={{
        boxShadow: border,
        opacity: opacity,
        backgroundColor: backgroundColor,
      }}
      onClick={() => router.push(`/product/?id=${props.data.id}`)}
    >
      <Image src={`${props.data.itemImg}`} />
      <Name>{props.data.productName}</Name>
      <Price>{props.data.price}</Price>

      {mouseOver ? (
        <MouseOverContainer>
          <div></div>
          <div>
            <Date>{props.data.end_date}</Date>
          </div>
          <CartHeartContainer>
            <CartContainer>
              <Cart src={`mockImage/shopping-cart.png`} />
            </CartContainer>
            <Heart src={`mockImage/heart.png`} />
          </CartHeartContainer>
        </MouseOverContainer>
      ) : null}
    </ItemContainer>
  );
}
const ItemContainer = styled.div`
  width: 260px;
  height: 434px;
  //background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  //box-shadow: 4px 8px 8px 4px  #D3D3D3;
  /* opacity: 0.3;
  background-color: grey; */
  z-index: 7;
`;

const Image = styled.img`
  //width: 260px;
  width: 260px;
  height: 320px;
  border-radius: 10px;
  z-index: 2;
`;
const Name = styled.div`
  margin-top: 10px;
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  word-break: break-word;
  text-align: left;
`;
const Price = styled.div`
  margin-top: 5px;
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 25px;
`;
const Date = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  color: blue;
  text-align: left;
`;

const People = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  color: blue;
  text-align: left;
`;
const MouseOverContainer = styled.div`
  //width: 260px;
  width: 260px;
  height: 434px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 6;
  text-align: center;
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
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: #4aa8d8;
`;
const Heart = styled.img`
  //width: 260px;

  width: 30%;
  height: 90%;
`;
export default Item;

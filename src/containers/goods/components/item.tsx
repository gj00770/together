import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { formatComma } from "../../../utils/formatComma";
import { Product } from "../../../types/Product";
import Cart from "../../../svgs/cart-shopping-solid.svg";
import { createCartItem } from "../../../remotes/cartItem";
import {
  useCartItemAlarm,
  useCartItemAlarmClose,
} from "../../../modal/cartItemAlarm";
import { useLoginModal } from "../../../modal/loginModal";
function Item(props: { data: Product }) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  const [mouseOver, setMoseOver] = useState(false);
  const router = useRouter();
  const onMouseEvent = () => {
    setMoseOver(true);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };

  const outMouseEvent = () => {
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };
  const openModal = useCartItemAlarm(props.data);
  const coloseModal = useCartItemAlarmClose();
  const openLoginModal = useLoginModal();
  const addCartItem = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
    createCartItem(props.data.id, 1);
    const token = localStorage.getItem("accessToken");
    if (token) {
      openModal();
      setTimeout(() => {
        coloseModal();
      }, 3000);
    } else {
      openLoginModal();
    }
  };

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
      <ImageCartContainer>
        <Image src={`${props.data.itemImg}`} />
        <CartContainer onClick={addCartItem}>
          {/* <CartContainer onClick={() => openModal()}> */}
          <Cart fill="white" width="28px" />
        </CartContainer>
      </ImageCartContainer>
      <Name>{props.data.productName}</Name>
      <Price>{formatComma(props.data.price)}원</Price>
    </ItemContainer>
  );
}
const ItemContainer = styled.div`
  width: 338px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 7;
  margin-bottom: 50px;
`;
const ImageCartContainer = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 338px;
  height: 445px;
  z-index: 2;
`;
const Name = styled.div`
  margin-top: 10px;
  width: 260px;
  margin-right: auto;
  word-break: break-word;
  text-align: left;
  font-size: 20px;
`;
const Price = styled.div`
  margin-top: 5px;
  width: 260px;
  margin-right: auto;
  text-align: left;
  font-size: 18px;
  font-family: NotosansBold;
  color: #4aa8d8;
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

const Heart = styled.img`
  //width: 260px;

  width: 30%;
  height: 90%;
`;
const CartContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #4aa8d8;
  opacity: 0.7;
  bottom: 10px;
  right: 10px;
`;
export default Item;

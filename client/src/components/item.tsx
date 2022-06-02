import React, { useState } from "react";
import styled from "styled-components";

function Item(img: any) {
  const [border, setBorder] = useState("0.5px solid #D3D3D3");
  const [opacity, setOpacity] = useState("0.5px solid #D3D3D3");
  const [backgroundColor, setBackgroundColor] = useState("none");
  console.log(img);
  const onMouseEvent = () => {
    console.log("his");
    setBorder("2px 2px 2px 2px #D3D3D3");
    setOpacity("0.5");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };

  const outMouseEvent = () => {
    setBorder("none");
    setOpacity("1.0");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
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
    >
      <Image src={`mockImage/productThumbnail/${img.img}.jpeg`} />
      <Name>
        에스투비코퍼레이션 저스트포유 레인보우 커버 무소음 무선 마우스
      </Name>
      <Price>32600원</Price>
      <Date>2022/12/31일까지</Date>
      <People>26/32명</People>
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
export default Item;

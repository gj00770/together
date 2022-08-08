import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
interface propsType {
  categoryName: string;
}
function MenueItem(props: propsType) {
  const [mouseOver, setMoseOver] = useState(false);
  const onMouseHandler = () => {
    console.log("his");
    setMoseOver(true);
  };
  const router = useRouter();
  const outMouseHandler = () => {
    setMoseOver(false);
  };
  return (
    <Item
      onClick={() => router.push(`/goods/?category=${props.categoryName}`)}
      onMouseEnter={onMouseHandler}
      onMouseLeave={outMouseHandler}
      style={{
        backgroundColor: mouseOver ? "#d3d3d3" : "white",
        color: mouseOver ? "#4aa8d8" : "grey",
      }}
    >
      {" "}
      {props.categoryName}
    </Item>
  );
}

const Item = styled.div`
  cursor: pointer;
  padding-top: 5px;
  font-size: 18px;
  padding-left: 10px;
`;

export default MenueItem;

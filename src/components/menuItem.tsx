import React, { useState } from "react";
import styled from "styled-components";
interface propsType {
  categoryName: string;
}
function MenueItem(props: propsType) {
  const [mouseOver, setMoseOver] = useState(false);
  const onMouseHandler = () => {
    console.log("his");
    // setBorder("2px 2px 2px 2px #D3D3D3");
    //   setOpacity("0.5");
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
    setMoseOver(true);
  };

  const outMouseHandler = () => {
    // setOpacity("1.0");
    setMoseOver(false);
    // setBackgroundColor("rgba(0, 0, 0, 0.5)");
  };
  return (
    <Item
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

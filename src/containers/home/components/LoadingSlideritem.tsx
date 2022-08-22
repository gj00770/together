import React from "react";
import styled from "styled-components";

function LoadingSliderItem() {
  //("2342342", useSlashDate(img.img.end_date), img.img.end_date);
  return (
    <LoadingSliderItemContainer>
      <Image />

      <Name></Name>
      <Price></Price>
    </LoadingSliderItemContainer>
  );
}

const LoadingSliderItemContainer = styled.div`
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

const Image = styled.div`
  //width: 260px;
  width: 100%;
  height: 258px;
  border-radius: 10px;
  background-color: #d3d3d3;
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
  background-color: #d3d3d3;
  width: 260px;
  height: 18px;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    width: 46%;
  }
`;

const Price = styled.div`
  font-family: NotoSansBold;
  //font-family: NotoSans;
  background-color: #d3d3d3;
  width: 100px;
  height: 33px;
  margin-right: auto;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    // width: 100%;
  }
`;

export default LoadingSliderItem;

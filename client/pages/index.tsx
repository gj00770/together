import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import styled from "styled-components";
import Carosel from "../src/components/carosel";
//import ComboBox from '../src/components/combobox'
import ComboBox from "../src/components/comboBox";
import ItemContainer from "../src/components/itemContainer";
import ProductCarosel from "../src/components/productCarosel";
const Home: NextPage = () => {
  return (
    <MainContainer>
      <Carosel />
      <ComboBox />
      <ProductCarosel />
      <ProductCarosel />
      <Banner src={`mockImage/banner/1.webp`} />
      <ProductCarosel />
      <ProductCarosel />
      <Banner src={`mockImage/banner/1.webp`} />
      {/* <ItemContainer /> */}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.img`
  //width: 260px;
  width: 90vw;
  max-width: 1120px;
  border-radius: 10px;
  z-index: 2;
  margin-bottom: 40px;
`;
export default Home;

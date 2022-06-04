import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import styled from "styled-components";
import Carosel from "../components/carosel";
//import ComboBox from '../components/combobox'
import ComboBox from "../components/comboBox";
import ItemContainer from "../components/itemContainer";
import ProductCarosel from "../components/productCarosel";
const Home: NextPage = () => {
  return (
    <MainContainer>
      <ItemContainer />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import InfinityCarosel from "../src/components/infinityCarosel";
//import ComboBox from '../src/components/combobox'
import ComboBox from "../src/components/comboBox";
import ItemContainer from "../src/components/itemContainer";
import ProductCarosel from "../src/components/productCarosel";
import MenueBox from "../src/components/menueBox";
import MenueList from "../src/modal/menueList";
import { PortalConsumer } from "../src/contexts/PortalProvider";

const Home: NextPage = () => {
  // fetch("http://localhost:5000/user").then(function (res) {
  //   console.log(res.json());
  // });
  const wrapperRef = useRef(null);
  const el2 = useRef(null);
  const [isOpen, setOpen] = useState(false);

  // const handleClickOutside = (event: any) => {
  //   if (wrapperRef.current) {
  //     if (wrapperRef && !wrapperRef.current.contains(event.target)) {
  //       setOpen(false);
  //     } else {
  //       setOpen(true);
  //     }
  //   }
  // };

  // const handleOpenModal = (e: any) => {
  //   setOpen(true);
  //   console.log(isOpen);
  // };
  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // });
  return (
    <MainContainer>
      <InfinityCarosel />
      <div>
        <PortalConsumer>
          <div>sdsdsdsdsdsds</div>
        </PortalConsumer>
      </div>

      {/* <Logo> together</Logo> */}
      {/* {isOpen ? (
          <div ref={wrapperRef}>
            <MenueList />
          </div>
        ) : null} */}
      <ProductCarosel category="화장품" />
      <ProductCarosel category="의류" />

      <Banner src={`mockImage/banner/1.webp`} />

      <ProductCarosel category="가전" />
      <ProductCarosel category="식품" />

      <Banner src={`mockImage/banner/1.webp`} />
      {/* <ItemContainer /> */}
    </MainContainer>
  );
};
const Logo = styled.div`
  color: #4aa8d8;
  font-size: 42px;
  background-color: white;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBox = styled.div`
  display: flex;
  position: relative;
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

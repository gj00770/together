import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import InfinityCarosel from "../../components/InfinityCarosel";
import { useModal } from "../../contexts/ModalProvider";
//import ComboBox from '../src/components/combobox'
import { PortalConsumer } from "../../contexts/PortalProvider";
import ProductCarosel from "./components/productCarosel";

const Home: NextPage = () => {
  // fetch("http://localhost:5000/user").then(function (res) {
  //   (res.json());
  // });
  const wrapperRef = useRef(null);
  const el2 = useRef(null);
  const [isOpen, setOpen] = useState(false);
  console.log(useModal());
  return (
    <MainContainer>
      <InfinityCarosel />
      <div>
        <PortalConsumer>
          <div>sdsdsdsdsdsds</div>
        </PortalConsumer>
      </div>

      <ProductCarosel category={"화장품"} />
      <ProductCarosel category={"의류"} />

      <Banner src={`mockImage/banner/1.webp`} />

      <ProductCarosel category={"가전"} />
      <ProductCarosel category={"식품"} />

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
  z-index: 2;
  margin-bottom: 40px;
`;
export default Home;

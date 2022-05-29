import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import styled from "styled-components";
import Carosel from '../src/components/carosel'
//import ComboBox from '../src/components/combobox'
import ComboBox from '../src/components/comboBox'
import ItemContainer from '../src/components/itemContainer'
const Home: NextPage = () => {

  return (
    <MainContainer>
      <Carosel />
      <ComboBox />
      <ItemContainer />
    </MainContainer>
  )
}
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Home

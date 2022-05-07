import React from 'react';
import styled from 'styled-components';
import Carosel from '../components/carosel'
import ItemContainer from '../components/ItemContainer'
import ComboBox from '../components/comboBox'
function Main() {
    return (
        <MainContainer>
            <Carosel />
            <ComboBox />
            <ItemContainer />
        </MainContainer>
    );
}
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Main;
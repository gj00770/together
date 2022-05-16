import React from 'react';
import styled from 'styled-components';
import MyCartItem from './myCartItem'
import TotalPrice from './totalPrice'

function MyCartItemContainer() {
    return (
        <MyCartItemContainerContainer>
            <MyCartItem />
            <MyCartItem />
            <MyCartItem />
            <TotalPrice />
        </MyCartItemContainerContainer>
    );
}
const MyCartItemContainerContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 100%;
    }  
`



export default MyCartItemContainer;
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
    background-color: honeydew;

  
`



export default MyCartItemContainer;
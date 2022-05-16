import React from 'react';
import styled from 'styled-components';
import Item from './item'

function ItemContainer() {
    return (
        <ItemContainerContainer>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

        </ItemContainerContainer>
    );
}
const ItemContainerContainer = styled.div`
    display: grid;
    //width: 70vw;
    column-gap: 20px;
    row-gap: 20px;
    @media screen and (max-width: 2500px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        
    }
    @media screen and (max-width: 1800px) {
        grid-template-columns: 1fr 1fr 1fr;
        
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr ;
        
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr ;
       
    }
`
export default ItemContainer;
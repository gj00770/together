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
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    width: 70vw;
`
export default ItemContainer;
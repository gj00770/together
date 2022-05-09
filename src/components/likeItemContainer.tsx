import React from 'react';
import styled from 'styled-components';
import LikeItem from './likeItem'


function LikeItemContainer() {
    return (
        <MyCartItemContainer>
            <LikeItem />
            <LikeItem />
            <LikeItem />
            <LikeItem />
            <LikeItem />
        </MyCartItemContainer>
    );
}
const MyCartItemContainer = styled.div`
    width: 800px;
    background-color: honeydew;

  
`

export default LikeItemContainer;
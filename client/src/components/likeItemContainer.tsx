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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 100%;
    }

  
`

export default LikeItemContainer;
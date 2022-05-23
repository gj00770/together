import React from 'react';
import styled from 'styled-components';



function TotalPrice() {
    return (
        <TotalPriceContainer>
            33000원
        </TotalPriceContainer>
    );
}
const TotalPriceContainer = styled.div`
    margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px;
`



export default TotalPrice;
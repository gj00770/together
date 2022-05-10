import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';



function DaumAdr() {
    const onComplete = (data: any) => { console.log(data); }

    return (
        <DaumAdrContainer>
            <DaumPostcode />
        </DaumAdrContainer>

    );
}
const DaumAdrContainer = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    position: absolute;
    background-color: white;
    z-index: 5;
    border: 0.5px solid #D3D3D3;
`



export default DaumAdr;
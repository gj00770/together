import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

type UserProps = {
    onComplete(id: any): void // 파라미터가 있고 함수의 return이 없을 경우
}

function DaumAdr({ onComplete }: UserProps) {

    return (
        <DaumAdrContainer>
            <DaumPostcode onComplete={onComplete} />
        </DaumAdrContainer>

    );
}
const DaumAdrContainer = styled.div`
    /* margin : 20px 20px 20px auto;
    width: 120px;
    background-color: white;
    text-align: left;
    font-size: 24px; */
    width: 500px;
    z-index: 5;
    border: 0.5px solid #D3D3D3;
`



export default DaumAdr;
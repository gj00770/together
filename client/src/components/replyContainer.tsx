import React, { useState } from 'react';
import styled from 'styled-components';
import Reply from './reply'
function ReplyContainer() {
    const [overFlowY, setOverFlowY] = useState("hidden");
    const expand = () => {
        setOverFlowY("visible")
    }
    return (
        <ReplyContainerContainer>
            <Reply />
            <Reply />
            <Reply />
            <Reply />
        </ReplyContainerContainer>
    );
}


const ReplyContainerContainer = styled.div`
   // border: 1px solid black;
    align-items: center;
    display :flex ;
    flex-direction: column;
    width: 780px;
    margin: 20px auto 0 auto;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`


export default ReplyContainer;
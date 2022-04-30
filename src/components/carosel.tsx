import React, { useState } from 'react';

import styled from 'styled-components';
const dummyNumArr = [1, 2, 3, 4, 5]
const dummyNumArrColor = ['pink', 'green', 'pink', 'green', 'pink']
function CaroselEle(props: any) {

    return (
        <CaroselEleS style={{ backgroundColor: ` ${dummyNumArrColor[props.number - 1]}` }}>
            {props.number}

        </CaroselEleS>
    );
}


function Carosel() {
    const [verticalValue, setVerticalValue] = useState(0);
    const dummyList: any = dummyNumArr.map((ele, key) => (<CaroselEle key={key} number={ele} verticalValue={verticalValue} />));




    const ClickRightArr = () => {
        setVerticalValue(verticalValue - 70)
        console.log(verticalValue)
    }

    const ClickLeftArr = () => {
        setVerticalValue(verticalValue + 70)
        console.log(verticalValue)
    }

    return (
        <CaroselContainer>
            <ArrowRight onClick={ClickRightArr}> &gt;</ArrowRight>
            <ArrowLeft > &lt;</ArrowLeft>
            <CaroselList style={{ transform: `translateX( ${verticalValue}vw) ` }}>
                {dummyList}
            </CaroselList>
        </CaroselContainer>
    );
}



export default Carosel;


const CaroselContainer = styled.div`
    //display: flex;
	margin: 20px;
    margin-left: 15vw;
    overflow-x: hidden;
    width: 70vw;
    height: 30vw;
    float: left;
    display: flex;
`

const ArrowRight = styled.div`
    position: absolute;
    right: 15vw;
    cursor: pointer;
    top: calc(15vw + 40px);
    z-index: 5;
`
const ArrowLeft = styled.div`
    position: absolute;
    cursor: pointer;
    top: calc(15vw + 40px);
    z-index: 5;

`
const CaroselEleS = styled.div`
    flex:none;
    box-sizing: content-box;
	width: 70vw;
    height: 30vw;
  
    `

const CaroselList = styled.div`
    display: flex;
    `
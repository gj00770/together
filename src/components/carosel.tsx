import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
const dummyNumArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5]
const dummyNumArrColor = ['pink', 'green', 'pink', 'green', 'yellow']
function CaroselEle(props: any) {

    return (
        <CaroselEleS style={{ backgroundColor: ` ${dummyNumArrColor[props.number - 1]}` }}>
            {props.number}

        </CaroselEleS>
    );
}


function Carosel() {
    const [horizontalValue, setHorizontalValue] = useState(-350);
    const [dummyArr, setDummyArr] = useState(dummyNumArr);
    const [counter, setCounter] = useState(dummyNumArr.length / 3);
    const [left, setLeft] = useState(0);
    // let dummyList: any = dummyArr.map((ele, key) => (<CaroselEle key={key} number={ele} horizontalValue={horizontalValue} />));




    const ClickRightArr = () => {

        console.log(counter)
        if (dummyNumArr.length - 1 === counter) {
            let sliceArr = dummyArr.slice(5, 15);
            console.log(sliceArr)

            setCounter(10);
            setLeft(left + 350);
            setHorizontalValue(horizontalValue - 70)

            setDummyArr([...sliceArr, ...arr]);
        }
        else {
            setCounter(counter + 1);
            setHorizontalValue(horizontalValue - 70)
        }

    }

    const ClickLeftArr = () => {

        if (counter === 0) {
            let sliceArr = dummyArr.slice(5, 15);
            console.log(sliceArr)

            setCounter(4);
            setLeft(left - 350);
            setHorizontalValue(horizontalValue + 70)

            setDummyArr([...arr, ...sliceArr]);
        }
        else {
            setHorizontalValue(horizontalValue + 70)
            setCounter(counter - 1);
        }
    }

    // useEffect(() => {
    // }, [dummyArr])

    return (
        <CaroselContainer>

            <ArrowRight onClick={ClickRightArr}>  &gt;</ArrowRight>
            <ArrowLeft onClick={ClickLeftArr}> &lt;</ArrowLeft>
            <CaroselList style={{ transform: `translateX( ${horizontalValue}vw) `, marginLeft: `${left}vw` }}>

                {dummyArr.map((ele, key) => <CaroselEle key={key} number={ele} horizontalValue={horizontalValue} />)}
            </CaroselList>
        </CaroselContainer>
    );
}



export default Carosel;


const CaroselContainer = styled.div`
    //display: flex;
    max-width: 1280px;
    max-height:720px;
	margin: 20px;
    overflow-x: hidden;
    width: 70vw;
    height: 30vw;
    float: left;
    display: flex;
`

const ArrowRight = styled.div`
    position: absolute;
    right: 15vw;
   // left: 80%;
    cursor: pointer;
    height: 20px;
    top: calc(15vw + 40px);
    z-index: 5;
`
const ArrowLeft = styled.div`
    position: absolute;
    cursor: pointer;
    top: calc(15vw + 40px);
    z-index: 5;
    height: 20px;
  //  left: 1%;
`
const CaroselEleS = styled.div`
    flex:none;
    box-sizing: content-box;
	width: 70vw;
    height: 30vw;
    max-width: 1280px;
    max-height:640px;
    `

const CaroselList = styled.div`
    transition: transform 0.5s ease;
    display: flex;
    //transition-property:translateX();
    `
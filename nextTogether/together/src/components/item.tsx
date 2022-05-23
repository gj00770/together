import React, { useState } from 'react';
import styled from 'styled-components';


function Item() {
    const [border, serBorder] = useState('0.5px solid #D3D3D3')

    const onMouseEvent = () => {
        console.log('his')
        serBorder('2px 2px 2px 2px #D3D3D3')

    }

    const outMouseEvent = () => {
        serBorder('none')


    }

    return (
        <ItemContainer onMouseEnter={onMouseEvent} onMouseLeave={outMouseEvent} style={{ boxShadow: `${border}` }}>
            <Image src="mockImage/mockimage.png" />
            {/* <img src="mockImage /mockimage.png" alt="" /> */}
            <Name>
                에스투비코퍼레이션 저스트포유 레인보우 커버 무소음 무선 마우스
            </Name>
            <Price>
                32600원
            </Price>
            <Date>
                2022/12/31일까지
            </Date>
            <People>
                26/32명
            </People>
        </ItemContainer>
    );
}
const ItemContainer = styled.div`
  width: 300px;
  height: 350px;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  //box-shadow: 4px 8px 8px 4px  #D3D3D3;

`

const Image = styled.img`
  //width: 260px;
  width: 180px;
  height: 180px;
  margin-top:10px;
  border-radius: 10px;
`
const Name = styled.div`
 margin-top: 10px;
 width: 260px;
 margin-left: auto;
 margin-right: auto;
 word-break:break-word;
 text-align: left;
`
const Price = styled.div`
 margin-top: 5px;
 width: 260px;
 margin-left: auto;
 margin-right: auto;
 text-align: left;
 font-size: 25px;
 
`
const Date = styled.div`
 width: 260px;
 margin-left: auto;
 margin-right: auto;
font-size: 14px;
color: blue;
text-align: left;
`

const People = styled.div`
 width: 260px;
 margin-left: auto;
 margin-right: auto;
font-size: 14px;
color: blue;
text-align: left;
`
export default Item;
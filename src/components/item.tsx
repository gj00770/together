import React from 'react';
import styled from 'styled-components';


function Item() {
    return (
        <ItemContainer>
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
                26/32
                </People>
        </ItemContainer>
    );
}
const ItemContainer = styled.div`
  width: 300px;
  height: 350px;
  background-color: salmon;
  border-radius: 15px;
  
`

const Image = styled.img`
  width: 260px;
  height: 200px;
  margin-top:10px;
  border-radius: 10px;
  border: 0.5px solid #D3D3D3;
`
const Name = styled.div`
 margin-top: 10px;
 width: 280px;
 margin-left: 10px;
 word-break:break-word;
 text-align: left;
`
const Price = styled.div`
 margin-top: 10px;
 width: 280px;
 margin-left: 10px;
 text-align: left;
 font-size: 25px;
`
const Date = styled.div`
width: 280px;
margin-left: 10px;
font-size: 14px;
color: blue;
text-align: left;
`

const People = styled.div`
width: 280px;
margin-left: 10px;
font-size: 14px;
color: blue;
text-align: left;
`
export default Item;
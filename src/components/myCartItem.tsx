import React from 'react';
import styled from 'styled-components';



function MyCartItem() {




    return (
        <MyCartItemContainer>
            <Image src="mockImage/mockimage.png" />
            <InfoContainer>
                <ItemName>
                    에스투비코퍼레이션 저스트포유 레인보우 커버 무소음 무선 마우스
                </ItemName>
                <AmountPriceContainer>
                    <ItemPrice>
                        32600
                    </ItemPrice>
                    <ItemAmount>
                        3
                    </ItemAmount>
                    <ArrowContainer>
                        <ArrowBTN>
                            &#9650;
                        </ArrowBTN>
                        <ArrowBTN>
                            &#9660;
                        </ArrowBTN>
                    </ArrowContainer>
                </AmountPriceContainer>
            </InfoContainer>

        </MyCartItemContainer>
    );
}
const MyCartItemContainer = styled.div`
    width: 90%;
    max-width: 720px;
    margin-top: 20px;
    height: 150px;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    
    
`
const Image = styled.img`
    width : 140px;
    height: 120px;
    margin-left: 10px;
    border: 0.5px solid #D3D3D3;
`
const InfoContainer = styled.div`
   // width :580px;
    height: 120px;
    margin-left: 10px;
    width: 100%;
`
const ItemName = styled.div`
    width :560px;
    height: 60px;
    background-color: #ffffff;
    margin:10px 10px 0px 10px ;
    text-align: left;
    font-size: 22px;
    @media screen and (max-width: 800px) {
        font-size:14px;
        width :80%;
    }
    @media screen and (max-width: 350px) {
        font-size:8px;
        width :70%;
    }
`

const ItemPrice = styled.div`
    background-color: #ffffff;
   // width :100px;
    margin:10px 0px 0px 0px ;
    font-size: 28px;
    color:red;
    font-family:NotoSans-Bold ;
   // border: 0.5px solid #D3D3D3;
   @media screen and (max-width: 800px) {
        font-size:20px;
    }
`
const AmountPriceContainer = styled.div`
    display: flex;
    margin-left: auto;

    width: 200px;
`

const ItemAmount = styled.div`
    background-color: #ffffff;
    width :35px;
    margin:10px 10px 0px 10px ;
    font-size: 24px;
    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    border: 0.2px solid #D3D3D3;
    @media screen and (max-width: 800px) {
        font-size:20px;
      //  width: 20px;
     //   height: 28px;
    }
`

const ArrowContainer = styled.div`
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        font-size:8px;
    }
`

const ArrowBTN = styled.button`
    background-color: white;
    box-shadow:  1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    border: 0.2px solid #D3D3D3;
`

export default MyCartItem;
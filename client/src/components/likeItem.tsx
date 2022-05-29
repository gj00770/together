import React from 'react';
import styled from 'styled-components';



function LikeItem() {
    return (
        <MyCartItemContainer>
            <Image src="mockImage/mockimage.png" />
            <InfoContainer>

                <ItemName>
                    에스투비코퍼레이션 저스트포유 레인보우 커버 무소음 무선 마우스
                </ItemName>
                <AmountPriceContainer>
                    <CurrentStatus>
                        배송중
                    </CurrentStatus>
                    <PriceAmount>
                        <ItemPrice>
                            32600
                        </ItemPrice>
                        <ItemAmount>
                            3
                        </ItemAmount>
                    </PriceAmount>
                </AmountPriceContainer>
            </InfoContainer>

        </MyCartItemContainer>
    );
}
const MyCartItemContainer = styled.div`
    width: 90%;
    min-width: 280px;
    margin-top: 20px;
    height: 150px;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
`
const Image = styled.img`
    width : 120px;
    height: 120px;
    margin-left: 10px;
    border: 0.5px solid #D3D3D3;
`
const InfoContainer = styled.div`
    width :580px;
    height: 120px;
   // background-color: #D3D3D3;
    margin-left: 10px;
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
        width :90%;
    }
    @media screen and (max-width: 350px) {
        font-size:8px;
        width :70%;
    }
`

const ItemPrice = styled.div`
    background-color: #ffffff;
    margin:10px 10px 0px 10px ;
    font-size: 28px;
    color:red;
    font-family:NotoSans-Bold ;
    @media screen and (max-width: 800px) {
        font-size:26px;
        margin:10px 0px 10px 0px;
    }
    @media screen and (max-width: 300) {
        font-size:22px;
        margin:10px 0px 10px 0px;
    }
`
const AmountPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemAmount = styled.div`
    background-color: #ffffff;
    width :30px;
    margin:10px 10px 0px 10px ;
    font-size: 24px;
    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    border: 0.2px solid #D3D3D3;
    @media screen and (max-width: 800px) {
        font-size:24spx;
        width: 20px;
        margin:10px 8px 10px 0px;
    }
`

const CurrentStatus = styled.div`
    font-size: 30px;
    margin-left: 20px;
    line-height: 45px;
    color: green;
    @media screen and (max-width: 800px) {
        font-size:22px;
        margin-left: 0px;
    }
`
const PriceAmount = styled.div`
    display: flex;
`


export default LikeItem;
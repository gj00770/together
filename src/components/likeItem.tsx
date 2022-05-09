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
    width: 760px;
    margin-top: 20px;
    height: 150px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
`
const Image = styled.img`
    width : 120px;
    height: 120px;
    margin-left: 10px;
    border: 0.5px solid #D3D3D3
`
const InfoContainer = styled.div`
    width :580px;
    height: 120px;
    background-color: #D3D3D3;
    margin-left: 10px;
`
const ItemName = styled.div`
    width :560px;
    height: 60px;
    background-color: #ffffff;
    margin:10px 10px 0px 10px ;
    text-align: left;
    font-size: 22px;
`

const ItemPrice = styled.div`
    background-color: #ffffff;
    width :100px;
    margin:10px 10px 0px 10px ;
    font-size: 24px;
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
`

const CurrentStatus = styled.div`
    font-size: 30px;
    margin-left: 20px;
    line-height: 45px;
    color: green;
`
const PriceAmount = styled.div`
    display: flex;
`


export default LikeItem;
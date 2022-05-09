import React from 'react';
import styled from 'styled-components';



function MyCartItem() {
    return (
        <MyCartItemContainer>
            <Image>
            </Image>
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
                        <div>
                            &#9650;
                        </div>
                        <div>
                            &#9660;
                        </div>
                    </ArrowContainer>
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
const Image = styled.div`
    width : 120px;
    height: 120px;
    background-color: #D3D3D3;
    margin-left: 10px;
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
    text-align: left;
    font-size: 24px;
`
const AmountPriceContainer = styled.div`
    display: flex;
    margin-left: auto;
    width: 200px;
`

const ItemAmount = styled.div`
    background-color: #ffffff;
    width :30px;
    margin:10px 10px 0px 10px ;
    text-align: left;
    font-size: 24px;
`

const ArrowContainer = styled.div`
    text-align: left;
    font-size: 24px;
`
export default MyCartItem;
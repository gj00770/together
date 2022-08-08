import React from 'react';
import styled from 'styled-components';
function SellerInfo() {
    return (
        <SellerInfoContainer >

            <Row>
                <Name >판매자</Name>
                <Summary>에이스</Summary>
            </Row>
            <Row>
                <Name >상호자/대표자</Name>
                <Summary>(주)에이스챔대중부공장 | 안성호</Summary>
            </Row>
            <Row>
                <Name >사업자구분</Name>
                <Summary>법인사업자</Summary>
            </Row>
            <Row>
                <Name >고객문의 대표번호</Name>
                <Summary>010-3333-3333</Summary>
            </Row>
            <Row>
                <Name >사업자등록번호</Name>
                <Summary>323232323</Summary>
            </Row>
            <Row>
                <Name >통신판매업신고</Name>
                <Summary>제 2014-충북음성군-81호</Summary>
            </Row>
            <Row>
                <Name >E-Mail</Name>
                <Summary>xxxxx@naver.com</Summary>
            </Row>
            <Row>
                <Name >영업소재지</Name>
                <Summary>충청북도 음성군 삼성면 상곡로 55-35 </Summary>
            </Row>

        </SellerInfoContainer>
    );
}

const SellerInfoContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    font-size: 24px;
    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`
const Row = styled.tr`
    width: 800px;
    height: 80px;
    border-bottom:1px solid #eee; 
    @media screen and (max-width: 800px) {
        width: 100%;
    }

`
const Name = styled.th`
    text-align: center;
    width: 25%;
    line-height: 80px;
    background-color: #eee;
    
`
const Summary = styled.td`
    width: 600px;
    line-height: 80px;    
    text-align: center;
`
export default SellerInfo;

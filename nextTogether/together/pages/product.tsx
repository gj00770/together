import React, { useState } from 'react';
import styled from 'styled-components';
// import ItemSummary from '../components/itemSummary'
import ItemSummary from '../src/components/itemSummary'
import Summary from '../src/components/Summary'
import ReplyContainer from '../src/components/replyContainer'
import SellerInfo from '../src/components/sellerInfo'
// import ReplyContainer from '../components/replyContainer'
// import SellerInfo from '../components/sellerInfo'
function Product() {
    const [boxShadowItemInfo, setBoxShadowItemInfo] = useState('inset 3px 2px 1px 1px rgba(0, 0, 0, 0.3)');
    const [boxShadowReply, setBoxShadowReply] = useState('3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
    const [boxShadowAsk, setBoxShadowAsk] = useState('3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
    const [curTab, setCurTab] = useState('itemInfo')
    const setCur = (e: any) => {
        // console.log(e.target.dataset)
        //setCurrent(e.target.dataset.name);
        setCurTab(e.target.dataset.name);
        if (e.target.dataset.name === 'itemInfo') {
            setBoxShadowItemInfo('inset 3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowReply('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowAsk('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
        }
        else if (e.target.dataset.name === 'reply') {
            setBoxShadowItemInfo('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowReply('inset 3px 2px 1px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowAsk('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
        }
        else if (e.target.dataset.name === 'ask') {
            setBoxShadowItemInfo('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowReply('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowAsk('inset 3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
        }

    }


    return (
        <ProductContainer>
            <ImageItemSummaryContainer>
                <Image src="mockImage/mockimage.png" />
                <ItemSummary />
            </ImageItemSummaryContainer>
            <SummaryTab onClick={setCur}>
                <Tab data-name='itemInfo' style={{ boxShadow: `${boxShadowItemInfo}` }} > 삼품정보</Tab>
                <Tab data-name='reply' style={{ boxShadow: `${boxShadowReply}` }} >댓글</Tab>
                <Tab data-name='ask' style={{ boxShadow: `${boxShadowAsk}` }} >문의사항</Tab>

            </SummaryTab>
            {
                curTab === "itemInfo" ?
                    <Summary />
                    :
                    curTab === "reply" ?
                        <ReplyContainer />
                        :
                        curTab === "ask" ?
                            <SellerInfo />
                            :
                            null

            }
        </ProductContainer >
    );
}
const SummaryTab = styled.div`
    
    display: flex;
    width: 800px;
    margin: 0 auto 0 auto;
    justify-content: space-between;
    font-size: 24px;
    position: sticky;
    @media screen and (max-width: 700px) {
        width: 100%;
     }
    `
const Tab = styled.div`
    width: 32%;
    border: 0.5px solid #D3D3D3;
    cursor: pointer;

`

const ProductContainer = styled.div`
    padding-top:20px;
    background-color: white;
    
`
const ImageItemSummaryContainer = styled.div`
      display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr ;
        flex-direction: column;
        align-items: center;
    }
`
const Image = styled.img`
  width: 300px;
  height: 400px;
  margin-top:10px;
  border-radius: 10px;
  background-color: red;
  @media screen and (max-width: 700px) {
      border: none;
    }
`
// width: 260px;
// height: 200px;
export default Product;
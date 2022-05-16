import React, { useState } from 'react';
import styled from 'styled-components';
import LikeItemCointainer from '../components/likeItemContainer'
import MyCartItemContainer from '../components/myCartItemContainer'

import UserInfo from '../components/userInfo'

function MyPage() {
    const [current, setCurrent] = useState('cartItem');
    const [boxShadowMypage, setBoxShadowMypage] = useState('3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
    const [boxShadowCartItem, setBoxShadowCartItem] = useState('3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
    const [boxShadowBuyList, setBoxShadowBuyList] = useState('3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
    const setCur = (e: any) => {
        console.log(e.target.dataset)
        setCurrent(e.target.dataset.name);

        if (e.target.dataset.name === 'mypage') {
            setBoxShadowMypage('inset 3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowCartItem('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowBuyList('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
        }
        else if (e.target.dataset.name === 'cartItem') {
            setBoxShadowMypage('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowCartItem('inset 3px 2px 1px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowBuyList('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
        }
        else if (e.target.dataset.name === 'buyList') {
            setBoxShadowMypage('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowCartItem('3px 3px 2px 1px rgba(0, 0, 0, 0.3)')
            setBoxShadowBuyList('inset 3px 3px 2px 1px rgba(0, 0, 0, 0.3)');
        }

        console.log(boxShadowMypage)
        console.log(boxShadowMypage)
        console.log(boxShadowMypage)
    }
    const onMouseOverTab = (e: any) => {

    }
    return (
        <MyPageContainer>
            <TabMenu>

                <TabMenuItem data-name='mypage' onClick={setCur} style={{ boxShadow: `${boxShadowMypage}` }} onMouseOver={onMouseOverTab}>
                    마이페이지
                </TabMenuItem>
                <TabMenuItem data-name='cartItem' onClick={setCur} style={{ boxShadow: `${boxShadowCartItem}` }}>
                    장바구니
                </TabMenuItem>
                <TabMenuItem data-name='buyList' onClick={setCur} style={{ boxShadow: `${boxShadowBuyList}` }}>
                    구매목록
                </TabMenuItem>
            </TabMenu>
            {/* <MyCartItemContainer /> */}

            {current === "mypage" ?
                <UserInfo />
                :
                null
            }
            {current === "cartItem" ?
                <MyCartItemContainer />
                :
                null
            }
            {current === "buyList" ?
                <LikeItemCointainer />
                :
                null
            }

        </MyPageContainer>
    );
}
const MyPageContainer = styled.div`
    margin-top: 80px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
  //  background-color: #6FADCF;
  background-color: #f9f9f9;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
const TabMenu = styled.div`
     display: flex;
     justify-content: space-around;
     
    
     
`
const TabMenuItem = styled.div`
    margin-top: 32px;
    cursor: pointer;
    width: 30%;
    height: 40px;
    font-size: 22px;
    line-height: 40px;
    border: 0.3px solid #D3D3D3;
    background-color: white;
    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`
const ItemContainer = styled.div`

`
export default MyPage;
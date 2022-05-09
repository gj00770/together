import React from 'react';
import styled from 'styled-components';
import LikeItemCointainer from '../components/likeItemContainer'
import MyCartItemContainer from '../components/myCartItemContainer'
import MyCartItem from '../components/myCartItem'


function MyPage() {
    return (
        <MyPageContainer>
            <TabMenu>
                <TabMenuItem>
                    마이페이지
                </TabMenuItem>
                <TabMenuItem>
                    장바구니
                </TabMenuItem>
                <TabMenuItem>
                    구매목록
                </TabMenuItem>
            </TabMenu>
            {/* <MyCartItemContainer /> */}
            <LikeItemCointainer />
        </MyPageContainer>
    );
}
const MyPageContainer = styled.div`
    margin-top: 200px;
    width: 800px;
    background-color: honeydew;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 40px;
`
const TabMenu = styled.div`
  display: flex;
`
const TabMenuItem = styled.div`
    cursor: pointer;
    width: 33%;
    height: 40px;
    font-size: 22px;
    line-height: 40px;
    border: 1px solid grey;
`
const ItemContainer = styled.div`

`
export default MyPage;
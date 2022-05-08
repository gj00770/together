import React from 'react';
import styled from 'styled-components';

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
            <MyCartItemContainer />
        </MyPageContainer>
    );
}
const MyPageContainer = styled.div`
    margin-top: 200px;
    width: 800px;
    background-color: honeydew;
    margin-left: auto;
    margin-right: auto;
`
const TabMenu = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`
const TabMenuItem = styled.div`
    width: 150px;
    height: 30px;
    font-size: 22px;
`
const ItemContainer = styled.div`

`
export default MyPage;
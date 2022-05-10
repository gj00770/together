import React, { useState } from 'react';
import styled from 'styled-components';
import LikeItemCointainer from '../components/likeItemContainer'
import MyCartItemContainer from '../components/myCartItemContainer'
import UserInfo from '../components/userInfo'

function MyPage() {
    const [current, setCurrent] = useState('cartItem');

    const setCur = (e: any) => {
        console.log(e.target.dataset)
        setCurrent(e.target.dataset.name);
    }
    return (
        <MyPageContainer>
            <TabMenu>

                <TabMenuItem data-name='mypage' onClick={setCur}>
                    마이페이지
                </TabMenuItem>
                <TabMenuItem data-name='cartItem' onClick={setCur}>
                    장바구니
                </TabMenuItem>
                <TabMenuItem data-name='buyList' onClick={setCur}>
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
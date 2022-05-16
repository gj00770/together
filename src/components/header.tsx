import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";


function Header() {
    return (
        <HeaderContainer>
            <Link to='/mypage' >ㅁㄴㅇㄴㅁ</Link>
            <Logo>

                <Link to='/' >Together</Link>
            </Logo>
            <LoginSignUpContainer>
                <Link to='/product' >
                    <Login>로그인</Login>
                </Link>
            </LoginSignUpContainer>
        </HeaderContainer>
    );
}
const HeaderContainer = styled.div`
	width: 100vw;
    background-color: #4AA8D8;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;


`
const Logo = styled.div`
 margin-left: 80px;
 font-size: 24px;
 color:white;
`
const LoginSignUpContainer = styled.div`
    display: flex;
    color: white;
    font-size: 18px;
    margin-right: 80px;
`
const Login = styled.div`


`
const SignUp = styled.div`


`
export default Header;
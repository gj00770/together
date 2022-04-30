import React from 'react';
import styled from 'styled-components';



function Header() {
    return (
        <HeaderContainer>
            Together
        </HeaderContainer>
    );
}
const HeaderContainer = styled.div`
	width: 100vw;
    background-color: #4AA8D8;
    height: 40px;
    line-height: 40px;
`
export default Header;
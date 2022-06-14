import React from 'react';
import styled from 'styled-components';
//import SearchIcon from '../icons/searchIcon.svg';
//import SearchIcon from '../svgs/searchIcon.svg';

function ComboBox() {
    return (
        <ComboBoxContainer>
            <Search>
                {/* <SearchIcon width={"20px"} height={'20px'} /> */}
            </Search>
            <InputBox>
            </InputBox>
        </ComboBoxContainer>
    );

}
const ComboBoxContainer = styled.div`
    border-radius: 33px;
    border: 2px solid #4AA8D8;
    height: 60px;
    width: 40vw;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    background-color: white;
`

const InputBox = styled.input`
border-radius: 33px;
    border: none;
    height: 88%;
    width: 80%;
 //   background-color: #f9f9f9;
    outline: none;
    font-size: 22px;
`
const Search = styled.div`
    margin-left: 20px;
    margin-right: 10px;
`
export default ComboBox;
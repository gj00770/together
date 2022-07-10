import React from "react";
import styled from "styled-components";
//import SearchIcon from '../icons/searchIcon.svg';
import SearchIcon from "../svgs/searchIcon.svg";

function ComboBox() {
  return (
    <ComboBoxContainer>
      <Search>
        <SearchIcon width={"20px"} height={"20px"} />
      </Search>
      <InputBox></InputBox>
    </ComboBoxContainer>
  );
}
const ComboBoxContainer = styled.div`
  border: 2px solid #4aa8d8;
  height: 35px;
  width: 25vw;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 33px;
`;

const InputBox = styled.input`
  border: none;
  height: 88%;
  width: 60%;
  //   background-color: #f9f9f9;
  outline: none;
  font-size: 22px;
`;
const Search = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 20px;
`;
export default ComboBox;

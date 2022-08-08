import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../svgs/searchIcon.svg";

function ComboBox() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleInputValue = (e: any) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("do validate");
      router.push(`/goods/?search=${inputValue}`);
    }
  };
  return (
    <ComboBoxContainer>
      <InputBox
        onChange={handleInputValue}
        onKeyDown={handleKeyDown}
      ></InputBox>
      <Search>
        <SearchIcon width={"20px"} height={"20px"} />
      </Search>
    </ComboBoxContainer>
  );
}
const ComboBoxContainer = styled.div`
  border: 1px solid #4aa8d8;
  height: 50px;
  width: 400px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const InputBox = styled.input`
  border: none;
  height: 40px;
  width: 300px;
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

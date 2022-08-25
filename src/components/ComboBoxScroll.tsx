import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../svgs/searchIcon.svg";

function ComboBoxScroll() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      router.push(`/goods/?search=${inputValue}`);
      setInputValue("");
    }
  };
  const onClick = () => {
    router.push(`/goods/?search=${inputValue}`);
    setInputValue("");
  };
  return (
    <ComboBoxScrollContainer>
      <InputBox
        onChange={handleInputValue}
        onKeyDown={handleKeyDown}
      ></InputBox>
      <Search onClick={onClick}>
        <SearchIcon width={"17px"} height={"17px"} />
      </Search>
    </ComboBoxScrollContainer>
  );
}
const ComboBoxScrollContainer = styled.div`
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  justify-content: space-between;
  background-color: #f7f7f7;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const InputBox = styled.input`
  border: none;
  height: 30px;
  width: 160px;
  background-color: #f7f7f7;
  //   background-color: #f9f9f9;
  outline: none;
  font-size: 22px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
`;
export default ComboBoxScroll;

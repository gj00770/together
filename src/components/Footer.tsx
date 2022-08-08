import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
//import useClientValue from "../hooks/useClientValue";
import { useUser } from "../hooks/useUser";
import LoginModal from "../modal/loginModal";
import MenueList from "../modal/menueList";
import HamburgerIcon from "../svgs/bars-solid.svg";
import SearchIcon from "../svgs/searchIcon.svg";
import HouseIcon from "../svgs/house-solid.svg";
import UserIcon from "../svgs/user-solid.svg";
//import userPersistence from "../hook/usePersistentContext";
function Header() {
  //  const username = useClientValue("username", "");
  //console.log("auth...", username);
  const { data: user, refetch: refetch } = useUser();
  console.log(user);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [mouseOver, setMoseOver] = useState(false);
  const [mouseOverUser, setMoseOverUser] = useState(false);
  const onMouseHandler = () => {
    setMoseOver(true);
  };

  const outMouseHandler = () => {
    setMoseOver(false);
  };
  const onClose = () => {
    setIsOpenModal(!isOpenModal);
  };
  const onMouseUserHandler = () => {
    setMoseOverUser(true);
  };
  const outMouseUserHandler = () => {
    setMoseOverUser(false);
  };

  return (
    <div>
      <HeaderContainer>
        <Link href="category">
          <a>
            <HamburgerIcon width="28" style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="/goods">
          <a>
            <SearchIcon width={"60px"} height={"30px"} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <HouseIcon width="28" style={{ cursor: "pointer" }} />
          </a>
        </Link>
        <Link href="/mypage">
          <a>
            <UserIcon width="28" style={{ cursor: "pointer" }} />
          </a>
        </Link>
        {/* <MenueList /> */}
      </HeaderContainer>
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100vw;
  background-color: white;
  height: 80px;
  line-height: 40px;

  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default Header;

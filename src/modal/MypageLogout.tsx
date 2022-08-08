import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import MenueItem from "../components/menuItem";
interface Props {
  refetch: () => void;
}
function MypageLogout(props: Props) {
  const [mouseOver, setMoseOver] = useState(false);
  const onMouseHandler = () => {
    console.log("his");
    setMoseOver(true);
  };
  const router = useRouter();
  const outMouseHandler = () => {
    setMoseOver(false);
  };
  const logOut = () => {
    localStorage.removeItem("accessToken");
    props.refetch();
    router.push("/");
  };
  return (
    <MypageLogoutContainer>
      <Link href="/mypage">
        <Menue
          onMouseEnter={onMouseHandler}
          onMouseLeave={outMouseHandler}
          style={{
            backgroundColor: mouseOver ? "#d3d3d3" : "white",
            color: mouseOver ? "#4aa8d8" : "grey",
          }}
        >
          마이페이지
        </Menue>
      </Link>

      <Menue
        onClick={logOut}
        onMouseEnter={onMouseHandler}
        onMouseLeave={outMouseHandler}
        style={{
          backgroundColor: mouseOver ? "#d3d3d3" : "white",
          color: mouseOver ? "#4aa8d8" : "grey",
        }}
      >
        로그아웃
      </Menue>
    </MypageLogoutContainer>
  );
}
const MypageLogoutContainer = styled.div`
  position: absolute;
  top: 35px;
  background-color: white;
  width: 90px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const Menue = styled.div`
  margin-left: 10px;
`;

export default MypageLogout;

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import MenueItem from "../components/MenuItem";
interface Props {
  refetch: () => void;
}
function MypageLogout(props: Props) {
  const [mouseOver, setMoseOver] = useState<string>();

  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    props.refetch();
    router.push("/");
  };
  return (
    <MypageLogoutContainer>
      <Link href="/mypage">
        <Menue
          onMouseEnter={() => setMoseOver("mypage")}
          onMouseLeave={() => setMoseOver(undefined)}
          style={{
            backgroundColor: mouseOver === "mypage" ? "#fafafa" : "white",
            color: mouseOver === "mypage" ? "#4aa8d8" : "grey",
          }}
        >
          마이페이지
        </Menue>
      </Link>

      <Menue
        onClick={logOut}
        onMouseEnter={() => setMoseOver("logout")}
        onMouseLeave={() => setMoseOver(undefined)}
        style={{
          backgroundColor: mouseOver === "logout" ? "#fafafa" : "white",
          color: mouseOver === "logout" ? "#4aa8d8" : "grey",
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
  text-align: center;
`;

export default MypageLogout;

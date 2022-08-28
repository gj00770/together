import DaumPostcode from "react-daum-postcode";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useModal } from "../contexts/ModalProvider";
import { Product } from "../types/Product";
interface Props {
  data: Product;
}
function CartItemAlarm(props: Props) {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    // scroll event listener 등록
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 104) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 104) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <RelativeContainer active={isScroll}>
      <Modalcontainer>
        <Modal>
          {" "}
          <Image src={`${props.data.itemImg}`} />
          <SummaryContainer>
            <ItemName> {props.data.productName}</ItemName>
            <Summary>장바구니에 상품을 담았습니다.</Summary>
          </SummaryContainer>
        </Modal>
      </Modalcontainer>
    </RelativeContainer>
  );
}
const RelativeContainer = styled.div<{ active: boolean }>`
  z-index: 99;
  position: ${(props) => (props.active ? "fixed " : "absolute")};
  width: 100vw;
  top: ${(props) => (props.active ? "-25px " : "5px")};
  @media screen and (max-width: 800px) {
    top: ${(props) => (props.active ? "-25px " : "-35px")};
  }
`;
const Modalcontainer = styled.div`
  max-width: 1050px;
  width: 90vw;
  height: 20px;
  top: 0px;
  margin: 0 auto 0 auto;
  position: relative;
  //margin-left: auto;
`;
const Image = styled.img`
  width: 46px;
  height: 60px;
  margin: 15px 15px 15px 15px;
`;
const ItemName = styled.div`
  color: grey;
`;
const SummaryContainer = styled.div`
  font-size: 14px;
  font-family: NotoSans;
  display: flex;
  flex-direction: column;
`;
const Summary = styled.div``;
const Modal = styled.div`
  //left: 140px;
  //background-color: #fafafa;

  align-items: center;
  display: flex;
  position: absolute;
  top: 80px;
  right: -22px;
  @media screen and (max-width: 800px) {
    right: 8px;
  }
  background-color: #ffffff;
  border: rgb(221, 221, 221) solid 1px;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  font-family: NotoSans;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  position: absolute;
  width: 346px; //200
  z-index: 100;
  &:after {
    border-color: #ffffff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 306px; //156
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  &:before {
    border-color: rgb(221, 221, 221) transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 306px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;

export default CartItemAlarm;
export function useCartItemAlarm(data: Product) {
  const { open, close } = useModal();
  return useCallback(() => open(<CartItemAlarm data={data} />), [open, close]);
}
export function useCartItemAlarmClose() {
  const { open, close } = useModal();
  return useCallback(() => close(), [open, close]);
}

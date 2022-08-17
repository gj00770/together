import DaumPostcode from "react-daum-postcode";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
interface Props {
  onComplete: (data: any) => void;
  closePostHandler: () => void;
}
function CartItemAlarm() {
  // const colseHandler = (data: any) => {
  //   setCurAddr(data.address);
  // };

  return <Modalcontainer>상품이 장바구니에 담겼습니다.</Modalcontainer>;
}
const Modalcontainer = styled.div`
  //left: 140px;
  //background-color: #fafafa;
  right: -20px;
  background-color: #ffffff;
  border: rgb(221, 221, 221) solid 1px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  font-family: NotoSans;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  position: absolute;
  width: 180px;
  z-index: 100;
  &:after {
    border-color: #ffffff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 140px;
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
    left: 140px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;
const CloseButton = styled.div`
  margin-left: 400px;
  color: white;
  cursor: pointer;
`;
export default CartItemAlarm;
export function useLoginModal() {
  const { open, close } = CartItemAlarm();
  return useCallback(() => open(<CartItemAlarm />), [open, close]);
}

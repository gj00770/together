import React from "react";
import styled from "styled-components";
import { cartItem } from "../../../types/CartItem";
import OrderItem from "./../components/OrderItem";
interface Props {
  data: cartItem[];
  refetch: () => void;
}
function Order(props: Props) {
  return (
    <div>
      <OrderContainer>
        <OrderName>주문</OrderName>
        {props.data.map((ele: any) => (
          <OrderItem data={ele} key={ele.id} refetch={props.refetch} />
        ))}
      </OrderContainer>
    </div>
  );
}

const OrderContainer = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const OrderName = styled.div`
  font-family: NotoSansBold;
  font-size: 32px;
  width: 90%;
  max-width: 720px;
`;
const Sum = styled.div`
  font-family: NotoSansBold;
  font-size: 32px;
`;
export default Order;

import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { createCartItem } from "../../../remotes/cartItem/createCartItem";
import { deleteCartItem } from "../../../remotes/cartItem/deletecartItem";
import CheckBox from "../../../svgs/circle-check-solid.svg";
import Xbutton from "../../../svgs/x-solid.svg";
import { CartItemEntity } from "../../../types/CartItem";
import { formatComma } from "../../../utils/formatComma";
interface Props {
  data: CartItemEntity;
  refetch: () => void;
  setItemSum: (price: number) => void;
  itemSum: number;
  setProduct: (product: CartItemEntity[] | undefined) => void;
  product: CartItemEntity[] | undefined;
}
function MyCartItem(props: Props) {
  //const queryClient = useQueryClient();
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(props.data.count);
  const router = useRouter();
  const plusOnclick = async () => {
    await createCartItem(props.data.product.id, 1);
    //await props.refetch();
    props.setItemSum(props.itemSum + props.data.product.price);
    setCount(count + 1);
  };
  const minusOnClick = async () => {
    await createCartItem(props.data.product.id, -1);

    setCount(count - 1);
  };
  const onClick = async () => {
    await deleteCartItem(props.data.id);
    await props.refetch();
  };
  const ClickCheck = () => {
    if (check) {
      props.setItemSum(props.itemSum - props.data.product.price);
      const arr = props.product?.filter((ele) => {
        return ele.product.id !== props.data.product.id;
      });
      props.setProduct(arr);
      props.setItemSum(props.itemSum - count * props.data.product.price);
      setCheck(false);
    } else if (!check) {
      props.setItemSum(props.itemSum + count * props.data.product.price);
      //edit later
      const arr = props.product;
      arr?.push(props.data);
      props.setProduct(arr);
      setCheck(true);
    }
  };
  return (
    <MyCartItemContainer>
      <div style={{ display: "flex" }}>
        {check ? (
          <CheckBox
            width="22px"
            fill="#4aa8d8"
            onClick={ClickCheck}
            style={{ marginRight: "10px" }}
          />
        ) : (
          <CheckBox
            width="22px"
            onClick={ClickCheck}
            fill="#D3D3D3"
            style={{ marginRight: "10px" }}
          />
        )}
        <FirstContainer
          onClick={() => router.push(`/product/?id=${props.data.product.id}`)}
        >
          <Image src={`${props.data.product.itemImg}`} />
          <ItemName>{props.data.product.productName}</ItemName>
        </FirstContainer>
      </div>
      <SecondContainer>
        <ArrowContainer>
          <ArrowBTN onClick={minusOnClick}> -</ArrowBTN>
          <ArrowNumber>{count}</ArrowNumber>
          <ArrowBTN onClick={plusOnclick}>+</ArrowBTN>
        </ArrowContainer>
        <ItemPrice>{formatComma(count * props.data.product.price)}</ItemPrice>
      </SecondContainer>
      <ButtonContainer>
        <Xbutton
          onClick={onClick}
          fill="#d3d3d3"
          width="12px"
          style={{ cursor: "pointer" }}
        />
      </ButtonContainer>
    </MyCartItemContainer>
  );
}
const FirstContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media screen and (max-width: 400px) {
    width: 72px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 20px;
    justify-content: flex-end;
    margin-right: auto;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: 400px) {
    align-items: flex-start;
  }
`;

const MyCartItemContainer = styled.div`
  max-width: 720px;
  margin-top: 20px;
  // background-color: white;
  display: flex;
  //align-items: center;
  border-bottom: 0.1px solid #d3d3d3;
  background-color: white;
  //height: 140px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;
const Image = styled.img`
  width: 60px;
  height: 78px;
  // border: 0.5px solid #d3d3d3;

  @media screen and (max-width: 350px) {
  }
`;

const ItemName = styled.div`
  margin-left: 12px;
  width: 345px;
  text-align: left;
  font-size: 16px;
  font-family: NotoSans;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    width: 30vw;
    font-size: 8px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 0px;
    width: 80vw;
    font-size: 8px;
  }
`;

const ItemPrice = styled.div`
  // width :100px;
  font-size: 13px;
  font-family: NotoSans;
  margin-right: 12px;
  // border: 0.5px solid #D3D3D3;
  text-align: left;
`;

const ArrowContainer = styled.div`
  float: left;
  text-align: left;
  height: 28px;
  font-size: 14px;
  display: flex;
  border: 0.2px solid #d3d3d3;
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    font-size: 8px;
  }
`;

const ArrowBTN = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  width: 28px;
  @media screen and (max-width: 800px) {
    width: 20px;
  }
`;
const ArrowNumber = styled.button`
  border: none;
  background-color: white;
  width: 31px;
  @media screen and (max-width: 800px) {
    width: 20px;
  }
`;

export default MyCartItem;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import AddressListContainer from "../../modal/AddressListContainer";
import { AddressEntity } from "../../types/Address";
import { cartItem } from "../../types/CartItem";
import { SumPrice } from "../../utils/sumPrice";
import CartItem from "./components/CartItem";
import SideBar from "./components/SideBar";

function findDefaultAddress(
  addressList: AddressEntity[] | undefined,
  defaultId: number | undefined
) {
  return addressList?.find((ele: AddressEntity) => ele.id === defaultId);
}
function useCartItem() {
  // Perform localStorage action
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const getCartItemWithAxios = async () => {
    const { data } = await axios.get(`http://localhost:5000/cartItem`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  };
  const query = useQuery(`cartItem1212${token}`, getCartItemWithAxios, {});
  return {
    data: query.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}

function MyCartItemContainer() {
  const { data, isLoading, refetch } = useCartItem();
  const user = useUser();
  const [addressSelect, setAddressSelect] = useState(false);
  const [itemSum, setItemSum] = useState<number>(0);
  const [product, setProduct] = useState<cartItem[]>();

  useEffect(() => {
    if (data) {
      setItemSum(SumPrice(data));
      setProduct(data);
    }
  }, [data]);
  if (isLoading || user.isLoading) {
    return <div>...lodaifgn</div>;
  }

  return (
    <div>
      <MyCartItemContainerContainer>
        <TitleItemContainer>
          <Title>장바구니</Title>

          {data.map((ele: cartItem) => (
            // <CheckBox width="22px" />
            <CartItem
              data={ele}
              key={ele.id}
              refetch={refetch}
              setItemSum={(price) => setItemSum(price)}
              itemSum={itemSum}
              setProduct={(product) => setProduct(product)}
              product={product}
            />
          ))}
        </TitleItemContainer>
        <SideBar
          onClick={() => setAddressSelect(true)}
          defaultAddress={findDefaultAddress(
            user.data?.addresses,
            user.data?.default_address
          )}
          itemSum={itemSum}
          product={product}
        />
      </MyCartItemContainerContainer>
      {addressSelect ? (
        <AddressListContainer
          onClose={() => setAddressSelect(false)}
          user={user.data}
          refetch={user.refetch}
          loading={user.isLoading}
        />
      ) : null}
    </div>
  );
}
const MyCartItemContainerContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin: 0px;
  }
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
const TitleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-family: NotoSans;
`;
export default MyCartItemContainer;

import React, { useState } from "react";
import styled from "styled-components";
//if (typeof window !== "undefined") {
//here `window` is available
import Addresses from "../components/Address";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import { useUser } from "../hooks/useUser";
import { AddressEntity } from "../types/Address";
import AddAdress from "./addAdress";
import AddressDetailModal from "./addressDetailModal";
import DaumAdrr from "../modal/daumAdrr";
import axios from "axios";
import { User } from "../types/User";

interface Props {
  onClose: () => void;
  user: User;
  refetch: () => void;
  loading: boolean;
}
function AddressListContainer(props: Props) {
  const [addAddress, setAddAddress] = useState<boolean>(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  const [addressSelect, setAddressSelect] = useState(false);
  const [active, setActive] = useState(true);

  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [curAddr, setCurAddr] = useState<string>();

  // const saveAddress = async () => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   await axios.put(
  //     `http://localhost:5000/user/my/address/${props.address.id}`,

  //     {
  //       name: name,
  //       adressDetaile: adressDetaile,
  //       request: request,
  //     },
  //     {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     }
  //   );
  //   props.onClose;
  //   await user.refetch();
  // };

  //const user = useUser();
  if (props.loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  console.log(props.user);
  const onComplete = (data: any) => {
    setCurAddr(data.address);
    setOpenPostcode(false);
    props.refetch();
  };
  const onCompleteAdd = (data: any) => {
    setCurAddr(data.address);
    setOpenPostcode(false);
    setActive(false);
    setAddAddress(true);
  };

  return (
    <div>
      <AddressListRoot active={active}>
        <AddressContainer>
          <CloseButton onClick={props.onClose}>x</CloseButton>
          <SelectAddress>배송지 선택</SelectAddress>
          {props.user.addresses
            ? props.user.addresses.map((ele: AddressEntity) => (
                <Addresses
                  address={ele}
                  key={ele.id}
                  onEdit={() => {
                    setSelectedAddressId(ele.id);
                    setActive(false);
                  }}
                  refetch={props.refetch}
                  onClose={props.onClose}
                />
              ))
            : null}
          <div onClick={() => setOpenPostcode(true)}>추가하기</div>
        </AddressContainer>
      </AddressListRoot>
      {selectedAddressId ? (
        <AddressDetailModal
          onClose={() => {
            setSelectedAddressId(undefined);
            setCurAddr(undefined);
            setActive(true);
          }}
          address={props.user.addresses.find(
            (ele: AddressEntity) => ele.id === selectedAddressId
          )}
          openPostcode={() => setOpenPostcode(true)}
          curAddr={curAddr}
        />
      ) : null}
      {openPostcode ? (
        <DaumAdrr
          selectedAddressId={selectedAddressId}
          onComplete={onComplete}
          openPostcode={() => setOpenPostcode(true)}
          closePostHandler={() => setOpenPostcode(false)}
          onCompleteAdd={onCompleteAdd} //새로추가할때
        />
      ) : null}
      {/* {addAddress ? (
        <AddAdress
          cityName={curAddr}
          closeAddAddressHandler={closeAddAddressHandler}
        />
      ) : null} */}

      {addAddress ? (
        <AddAdress
          cityName={curAddr}
          closeAddAddressHandler={() => {
            setAddAddress(false);
            setActive(true);
          }}
          refetch={props.refetch}
        />
      ) : null}
    </div>
  );
}
const CloseButton = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
const AddressListRoot = styled.div<{ active: boolean }>`
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: ${(props) => (props.active ? "flex " : "none")};
  // display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AddressContainer = styled.div`
  //position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: white;
  font-size: 24px;
  height: 60vh;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 0;
    top: 0%;
    left: 0%;
  }
`;
const Name = styled.div``;
const SelectAddress = styled.div`
  font-size: 32px;
  font-family: NotoSansBold;
  margin-bottom: 12px;
`;
export default AddressListContainer;

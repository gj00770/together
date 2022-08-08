import React, { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import { useUser } from "../../../hooks/useUser";
import AddAdress from "../../../modal/addAdress";
import AddressDetailModal from "../../../modal/addressDetailModal";
import DaumAdrr from "../../../modal/daumAdrr";
import { deleteAddress } from "../../../remotes/address/deleteAddress";
import { updateUserDefaultAdress } from "../../../remotes/user";
import { AddressEntity } from "../../../types/Address";
import AddressSummary from "./AddressSummary";

function AdressList() {
  const user = useUser();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [curAddr, setCurAddr] = useState<string>("서울시 구로구 경인로 343");
  const [addAddress, setAddAddress] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [openDaumAdr, setOpenDaumAdr] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  const [currentId, setCurrentId] = useState<number | undefined>();
  //user.data?.default_address
  const onComplete = (data: any) => {
    setCurAddr(data.address);
    setOpenPostcode(false);
    setAddAddress(true);
  };

  const closeAddAddressHandler = async () => {
    await setAddAddress(false);
    await user.refetch();
    console.log(isEditModalOpen);
  };
  const handleAddressClick = async (id: number) => {
    setCurrentId(id);
    await updateUserDefaultAdress(id);
  };

  if (user.isLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  return (
    <div>
      {addAddress ? (
        <AddAdress
          cityName={curAddr}
          closeAddAddressHandler={closeAddAddressHandler}
        />
      ) : null}
      {openPostcode ? (
        <DaumAdrr
          onComplete={onComplete}
          openPostcode={() => setOpenPostcode(true)}
          closePostHandler={() => setOpenPostcode(false)}
        />
      ) : null}

      <ShippingAddressContainer>
        <ShippingAddress>배송지</ShippingAddress>
        <AddShippingAddress onClick={() => setOpenPostcode(true)}>
          +
        </AddShippingAddress>
        {/* {openDaumAdr ? <DaumAdrr /> : null} */}
      </ShippingAddressContainer>

      {user.data?.addresses
        ? user.data.addresses.map((ele: AddressEntity) => (
            <AddressSummary
              onClick={() => handleAddressClick(ele.id)}
              checked={
                (currentId ?? user.data?.default_address) === ele.id
                // currentId
                //   ? currentId === ele.id
                //   : user.data?.default_address === ele.id
              }
              address={ele}
              key={ele.id}
              onEdit={() => {
                setSelectedAddressId(ele.id);
              }}
              onDelete={() => deleteAddress(ele.id)}
            />
          ))
        : null}
      {selectedAddressId ? (
        <AddressDetailModal
          onClose={() => {
            setSelectedAddressId(undefined);
          }}
          address={user.data?.addresses.find(
            (ele: AddressEntity) => ele.id === selectedAddressId
          )}
          curAddr={undefined}
          openPostcode={() => {}}
        />
      ) : null}
    </div>
  );
}
const ShippingAddressContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShippingAddress = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
  font-family: NotoSans;
  font-size: 24px;
`;
const AddShippingAddress = styled.div`
  cursor: pointer;
  font-size: 30px;
`;
export default AdressList;

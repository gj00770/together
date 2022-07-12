import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Product } from "../../../types/Product";
import Item from "./item";
const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ItemContainer() {
  const router = useRouter();
  const { category } = router.query;
  const fetchData = async () => {
    const result = await (
      await fetch(`http://localhost:5000/product/${category}`)
    ).json();
    return result;
    console.log(result);
  };
  const { isLoading, isError, data, error } = useQuery(
    `${category}`,
    fetchData
  );
  if (isLoading) {
    return <div>....loading</div>;
  }
  console.log(data);

  return (
    <ItemContainerContainer>
      {data.map((ele: Product) => (
        <Item data={ele} key={ele.id} />
      ))}
    </ItemContainerContainer>
  );
}
const ItemContainerContainer = styled.div`
  display: grid;
  //width: 70vw;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default ItemContainer;

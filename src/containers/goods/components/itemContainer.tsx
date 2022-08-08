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
  const { search } = router.query;
  const fetchData = async () => {
    const result = await (
      await fetch(`http://localhost:5000/product/findcat/${category}`)
    ).json();
    return result;
    console.log(result);
  };

  const fetchData2 = async () => {
    const result = await (
      await fetch(`http://localhost:5000/product/findsearch/${search}`)
    ).json();
    return result;
    console.log(result);
  };

  const { isLoading, isError, data, error } = useQuery(
    category ? `${category}bys` : `search${search}`,
    category ? fetchData : fetchData2
  );
  if (isLoading) {
    return <div>....loading</div>;
  }
  console.log(category);
  console.log(search);
  return (
    <ItemContainerContainer>
      {data.length > 0 ? (
        data.map((ele: Product) => <Item data={ele} key={ele.id} />)
      ) : (
        <ImageContainer>
          <ImageNotFound src="https://cdn.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png" />
        </ImageContainer>
      )}
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
const ImageNotFound = styled.img`
  width: 20vw;
  height: 20vw;
`;
const ImageContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export default ItemContainer;

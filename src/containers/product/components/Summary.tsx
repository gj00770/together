import React, { useState } from "react";
import styled from "styled-components";
import { Product } from "../../../types/Product";

function Summary(props: { data: Product }) {
  const [overFlowY, setOverFlowY] = useState("hidden");
  const expand = () => {
    setOverFlowY("visible");
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <SummaryContainer style={{ overflow: `${overFlowY} ` }}>
        <Image src={`${props.data.itemInfo}`} />
      </SummaryContainer>

      <ExpandBtn
        style={{ display: overFlowY === "visible" ? "none" : "block" }}
        onClick={expand}
      >
        펼치기
      </ExpandBtn>
    </div>
  );
}

const SummaryContainer = styled.div`
  margin-top: 20px;
  height: 780px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const ExpandBtn = styled.button`
  font-size: 24px;
  width: 400px;
  height: 50px;
  margin: 30px auto 30px auto;
  color: white;
  border: none;
  font-family: NotoSans-Bold;
  font-size: 20px;
  padding-bottom: 3px;
  cursor: pointer;
  background-color: #4aa8d8;
`;
const Image = styled.img`
  margin-top: 10px;
  border-radius: 10px;
  border: 0.5px solid #d3d3d3;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export default Summary;

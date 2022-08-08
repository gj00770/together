import React, { useState } from "react";
import styled from "styled-components";
import Spinner from "../../svgs/spinner.svg";

function LoadingSpinner() {
  return (
    <LoadingContainer>
      <Spinner fill={"#4aa8d8"} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  // border: 1px solid black;
  margin: auto auto auto auto;
  width: 25%;
  animation: rotate 1.2s ease-in-out infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;

import React, {
  ForwardedRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export interface CaroselRef {
  next(): void;
  prev(): void;
}
export const Carosel = React.forwardRef<CaroselRef, Props>(function Carosel(
  props: Props,
  ref: ForwardedRef<CaroselRef>
) {
  const [counter, setCounter] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null); // ***** 전체 길이
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      next: next,
      prev: prev,
    };
  });

  function getMaxSlideCount() {
    if (contentRef.current == null || containerRef.current == null) {
      throw new Error("slider elements does not rendered");
    }
    const whole = contentRef.current.scrollWidth;
    const part = containerRef.current.getBoundingClientRect().width;
    const max = Math.floor(whole / part) - 1;
    return max;
  }

  const next = () => {
    const max = getMaxSlideCount();
    if (counter == max) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const prev = () => {
    const max = getMaxSlideCount();
    if (counter == 0) {
      setCounter(max);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <CaroselContainer ref={containerRef}>
      <InnerContainer
        style={{
          transform: `translateX( ${-counter * 100}%) `,
          marginRight: "0%",
        }}
        ref={contentRef}
      >
        {props.children}
      </InnerContainer>
    </CaroselContainer>
  );
});

export default Carosel;

const CaroselContainer = styled.div`
  //display: flex;
  max-width: 1120px;
  max-height: 434px;
  overflow-x: hidden;
  width: 95vw;
  float: left;
  display: flex;
  position: relative;
  //  border: 1px solid red;
  @media screen and (max-width: 600px) {
    // width: 100%;
    height: 70.166667vw;
  }
  @media screen and (min-width: 600px) {
    height: 39.166667vw;
    // height: 400px;
    //  border: 1px solid black;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  transition: transform 0.5s ease;
  display: flex;
  column-gap: 2%;
  //transition-property:translateX();
  @media screen and (max-width: 600px) {
    column-gap: 4%;
  }
`;

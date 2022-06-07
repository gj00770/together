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
  isInfinity: boolean;
  infinitySliderLength: number;
  gap: number;
}

export interface CaroselRef {
  next(): void;
  prev(): void;
}

export const Carosel = React.forwardRef<CaroselRef, Props>(function Carosel(
  props: Props,
  ref: ForwardedRef<CaroselRef>
) {
  const [counter, setCounter] = useState(props.infinitySliderLength || 0);
  const contentRef = useRef<HTMLDivElement>(null); // ***** 전체 길이
  const containerRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [InfinityLength, setInfinityLength] = useState(4);
  const [position, setPosition] = useState(0);
  console.log(props.gap);
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
    const max = Math.floor(whole / part);
    return max;
  }

  const next = () => {
    const max = getMaxSlideCount();
    if (props.isInfinity === false) {
      console.log(counter);
      if (counter == max) {
        setCounter(0);
        setPosition(0);
      } else {
        setCounter(counter + 1);
        setPosition(position + 100);
      }
    } else {
      if (counter === 14) {
        console.log("hi");
        setLeft(left + 500);
        setCounter(10);
        setPosition(position + 100);
      } else {
        setCounter(counter + 1);
        setPosition(position + 100);
      }
    }
  };

  const prev = () => {
    const max = getMaxSlideCount();

    if (props.isInfinity === false) {
      if (counter == 0) {
        setCounter(max);
        setPosition(max * 100);
      } else {
        setCounter(counter - 1);
        setPosition(position - 100);
      }
    } else {
      if (counter === 0) {
        console.log("hi");
        setLeft(left - 500);
        setCounter(counter - 1);
        setInfinityLength(InfinityLength - 5);
      } else {
        setCounter(counter - 1);
      }
    }
  };

  return (
    <CaroselContainer ref={containerRef} style={{}}>
      <InnerContainer
        colGap={props.gap}
        style={{
          marginLeft: props.isInfinity ? `${left}%` : `null`,
          transform: `translateX( ${-position}%) `,
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
interface ContainerProps {
  colGap: number;
}
const CaroselContainer = styled.div`
  //display: flex;
  overflow-x: hidden;
  float: left;
  display: flex;
  position: relative;
`;

const InnerContainer = styled.div<ContainerProps>`
  width: 100%;
  transition: transform 0.5s ease;
  display: flex;
  column-gap: ${(props) => props.colGap}%;

  @media screen and (max-width: 600px) {
    column-gap: ${(props) => props.colGap * 2}%;
  }
`;

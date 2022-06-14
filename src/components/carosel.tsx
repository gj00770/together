import React, {
  ForwardedRef,
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { range } from "lodash";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
interface Props {
  children: ReactElement[];
  infinity: boolean; // 무한켈인지아닌지
  gap: number; // gap 간격을 얼마나 설정할지
}

export interface CaroselRef {
  next(): void;
  prev(): void;
}

export const Carosel = React.forwardRef<CaroselRef, Props>(function Carosel(
  props: Props,
  ref: ForwardedRef<CaroselRef>
) {
  const children = props.infinity
    ? range(0, props.children.length * 3).map((item) =>
        React.cloneElement(props.children[item % props.children.length], {
          key: `item-${item}`,
        })
      )
    : props.children;
  const [count, setCount] = useState(
    props.infinity ? props.children.length + 1 : 0
  );
  //const [count, setCount] = useState(0);
  const [negative, setNegative] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // ***** 전체 길이
  const containerRef = useRef<HTMLDivElement>(null);

  const [leftAni, api] = useSpring(() => ({
    transform: `translateX(${props.infinity ? -500 : 0}%)`,
    config: { duration: 0 },
  }));

  // startAnimattion= ()=>{

  // }

  const [left, setLeft] = useState(-500);
  const [position, setPosition] = useState(props.infinity ? 500 : 0);
  const x = [{ marginLeft: `${left}%` }];
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
    console.log(count);
    const max = getMaxSlideCount();
    if (props.infinity === false) {
      console.log(count);
      if (count == max) {
        setCount(0);
        api.start({
          transform: `translateX(${0}%)`,
          config: { duration: 300 },
        });
      } else {
        setCount(count + 1);
        api.start({
          transform: `translateX(${(count + 1) * -100}%)`,
          config: { duration: 300 },
        });
        //setPosition(position + 100);
      }
    } else {
      // console.log(count);
      if (count === children.length) {
        // 마지막요소 10 11 12 13 14 마지막요소
        console.log("hi");
        setCount(5); // counter 복기하고
        api.start({
          transform: `translateX(${4 * -100}%)`,
          config: { duration: 0 },
        });
        // api.start({
        //   transform: `translateX(${5 * -100}%)`,
        //   config: { duration: 100 },
        // });
      } else {
        console.log(count);
        setCount(count + 1);
        api.start({
          transform: `translateX(${count * -100}%)`,
          config: { duration: 300 },
        });
      }
    }
  };

  const prev = () => {
    const max = getMaxSlideCount();
    console.log("[rev");
    if (props.infinity === false) {
      if (count == 0) {
        setCount(max);
        setPosition(max * 100);
      } else {
        setCount(count - 1);
        setPosition(position - 100);
      }
    } else {
      console.log(left);
      console.log(children.length / 3);
      if (count === 0) {
        console.log("hi");
        setLeft(left - 500);
        setCount(children.length / 3);
        setPosition(position - 100);
        //  setInfinityLength(InfinityLength - 5);
      } else {
        setCount(count - 1);
        setPosition(position - 100);
      }
    }
  };

  return (
    <CaroselContainer ref={containerRef} style={{}}>
      <InnerContainer
        colGap={props.gap}
        // style={{
        //   marginLeft: props.infinity ? `${left}%` : `null`,
        //   transform: `translateX( ${-position}%) `,
        //   marginRight: "0%",
        // }}
        style={{ ...leftAni }}
        ref={contentRef}
      >
        {children}
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

const InnerContainer = styled(animated.div)<ContainerProps>`
  width: 100%;
  //transition: transform 0.5s ease;
  display: flex;
  column-gap: ${(props) => props.colGap}%;

  @media screen and (max-width: 600px) {
    column-gap: ${(props) => props.colGap * 2}%;
  }
`;

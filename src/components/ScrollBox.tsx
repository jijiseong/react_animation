import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const BigBox = styled.div`
  height: 70vh;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    box-shadow: 10;
    border-radius: 10px;
    width: 8px;
    padding: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(255, 134, 255);
    border-radius: 10px;
    box-shadow: inset 0px 0px 4px white;
  }
`;

export default function ScrollBox() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: targetRef });
  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0.3, 1, 0.3]
  );

  const makeBox = (num: number) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Box style={{ scale: scrollScale }}></Box>);
    }
    return arr;
  };

  return <BigBox ref={targetRef}>{makeBox(50)}</BigBox>;
}

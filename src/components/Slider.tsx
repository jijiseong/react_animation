import { AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlideList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVars: Variants = {
  entry: (value: boolean) => {
    console.log("entry", value);
    return {
      x: value ? -350 : 350,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (value: boolean) => {
    console.log("exit", value);
    return {
      x: value ? 350 : -350,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    };
  },
};

export default function Slider() {
  const [visibleIdx, setVisibleIdx] = useState(1);
  const [back, setBack] = useState<{ value: boolean }>({ value: false });

  const nextPlease = () => {
    setBack({ value: false });
  };
  const prevPlease = () => {
    setBack({ value: true });
  };

  useEffect(() => {
    if (back.value) {
      setVisibleIdx((cur) => (cur !== 1 ? cur - 1 : cur));
    } else {
      setVisibleIdx((cur) => (cur !== 10 ? cur + 1 : cur));
    }
  }, [back]);

  return (
    <Container>
      <SlideList>
        <AnimatePresence mode="sync" custom={back.value}>
          <Box
            custom={back.value}
            style={{ position: "absolute", top: "100px" }}
            variants={boxVars}
            initial="entry"
            exit="exit"
            animate="center"
            key={visibleIdx}
          >
            {visibleIdx}
          </Box>
        </AnimatePresence>
      </SlideList>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Container>
  );
}

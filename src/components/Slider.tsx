import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SlideList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  border: 0;
  background-color: inherit;
  color: white;
  font-size: 100px;
  margin-left: 200px;
  margin-right: 200px;
`;

const boxVars: Variants = {
  entry: (value: boolean) => {
    if (value === null) {
      return {
        x: 0,
        opacity: 0,
      };
    }
    return {
      x: value ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (value: boolean | null) => {
    if (value === null) {
      return {
        x: 0,
        opacity: 0,
      };
    }

    return {
      x: value ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    };
  },
};

const buttonVars: Variants = {
  hover: {
    scale: 1.2,
    cursor: "pointer",
  },
  click: (value) => ({
    x: value,
  }),
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Slider() {
  const [visibleIdx, setVisibleIdx] = useState(1);
  const [back, setBack] = useState<{ value: boolean | null }>({ value: null });

  const nextPlease = () => {
    setBack({ value: true });
  };
  const prevPlease = () => {
    setBack({ value: false });
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
      <Button
        custom={-20}
        variants={buttonVars}
        whileHover="hover"
        whileTap="click"
        style={{ left: 100 }}
        onClick={nextPlease}
        initial="initial"
        animate="visible"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <SlideList>
        <AnimatePresence mode="sync" custom={back.value}>
          <Box
            custom={back.value}
            style={{ position: "absolute", transform: "translate(-50%, -50%)" }}
            variants={boxVars}
            initial="entry"
            exit="exit"
            animate="center"
            key={visibleIdx}
          >
            <span>{visibleIdx}</span>
          </Box>
        </AnimatePresence>
      </SlideList>
      <Button
        custom={20}
        variants={buttonVars}
        whileHover="hover"
        whileTap="click"
        style={{ right: 100 }}
        onClick={prevPlease}
        initial="initial"
        animate="visible"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Container>
  );
}

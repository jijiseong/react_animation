import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const dragVariants: Variants = {
  drag: {
    backgroundColor: "rgba(255, 159, 243,1.0)",
  },
};

const bigBoxVars: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const BigBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default function PrisonBox() {
  const bigBoxRef = useRef<HTMLDivElement>(null);

  return (
    <BigBox
      ref={bigBoxRef}
      variants={bigBoxVars}
      initial="hidden"
      animate="visible"
    >
      <Box
        drag
        dragSnapToOrigin // 원래 자리로
        dragElastic={0.2} // 당기는 힘 낮을 수록 강함
        dragConstraints={bigBoxRef}
        variants={dragVariants}
        whileDrag="drag"
      >
        <span>
          Please take me out <br />
          ㅠㅠ
        </span>
      </Box>
    </BigBox>
  );
}

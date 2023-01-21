import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default function DragXBox() {
  const x = useMotionValue(0); // this is not state.
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg,rgb(7, 212, 202),rgb(45, 134, 250))",
      "linear-gradient(135deg,rgb(255, 134, 255),rgb(148, 7, 212))",
      "linear-gradient(135deg,rgb(212, 208, 7),rgb(250, 45, 45))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, position: "absolute" }}
        drag="x"
        dragSnapToOrigin
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span>Drag me!</span>
      </Box>
    </Wrapper>
  );
}

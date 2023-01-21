import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  height: 200px;
  border-radius: 40px;
  background-color: white;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

const vars: Variants = {
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

export function OverlayBox() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid variants={vars} initial="initial" animate="visible">
        {["1", "2", "3", "4"].map((value) => (
          <Box key={value} onClick={() => setId(value)} layoutId={value} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box
              onClick={() => setId(null)}
              style={{ width: "400px", height: "200px" }}
              layoutId={id}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

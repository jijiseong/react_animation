import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Welcome = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Frame = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.2);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
`;

const Span = styled(motion.span)`
  font-weight: bold;
  font-size: 7em;
  text-align: center;
`;

const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  text-shadow: 2px 2px rgba(255, 255, 255, 0.2);
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.03,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  const welcome = ["W", "E", "L", "C", "O", "M", "E"];
  const dropRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper ref={dropRef}>
      <Welcome variants={container} initial="hidden" animate="visible">
        {welcome.map((text) => (
          <Text drag dragConstraints={dropRef} variants={item} dragElastic={1}>
            <Span>{text}</Span>
          </Text>
        ))}
      </Welcome>
      <Frame variants={container} initial="hidden" animate="visible">
        {welcome.map((text) => (
          <Text variants={item}>
            <Span>{text}</Span>
          </Text>
        ))}
      </Frame>
    </Wrapper>
  );
}

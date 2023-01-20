import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "./components/Logo";
import TouchBox from "./components/TouchBox";
import PrisonBox from "./components/PrisonBox";
import ScrollBox from "./components/ScrollBox";
import { useRecoilValue } from "recoil";
import { bgGradientState } from "./atoms";
import DragXBox from "./components/DragXBox";
import Slider from "./components/Slider";

const Wrapper = styled(motion.div)`
  height: 800vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  background: linear-gradient(135deg, rgb(255, 134, 255), rgb(148, 7, 212));
`;

function App() {
  const bgGradient = useRecoilValue(bgGradientState);
  return (
    <Wrapper style={{ background: bgGradient }}>
      {/* logo */}
      <Logo />
      {/* scroll animation */}
      <ScrollBox />
      {/* Click Touch animation */}
      <TouchBox />
      {/* Drag background change animation */}
      <DragXBox />
      {/* Drag prison animation */}
      <PrisonBox />
      {/* appear, disappear animation */}
      <Slider />
    </Wrapper>
  );
}

export default App;

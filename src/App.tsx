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
import { OverlayBox } from "./components/OverlayBox";
import NavBar from "./components/NavBar";
import { Link, Outlet } from "react-router-dom";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(255, 134, 255), rgb(148, 7, 212));
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OutletBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 600px;
`;

function App() {
  const bgGradient = useRecoilValue(bgGradientState);
  return (
    <Wrapper style={{ background: bgGradient }}>
      <Container>
        <NavBar />
        <OutletBox>
          <Outlet />
        </OutletBox>
      </Container>
    </Wrapper>
  );
}

export default App;

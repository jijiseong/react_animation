import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  position: absolute;
  top: 0;
  width: 60vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 100;
`;

const Highlight = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 5px;
  border-radius: 10px;
  background: linear-gradient(90deg, rgb(245, 112, 112), rgb(240, 41, 41));
`;

const StyleLink = styled(Link)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 60px;
  font-size: 30px;
`;

export default function NavBar() {
  const { pathname } = useLocation();

  const pathList: { [key: string]: string } = {
    home: "/",
    logo: "/logo",
    prison: "/prison",
    scroll: "/scroll",
    slider: "/slider",
    dragx: "/dragx",
    overlay: "/overlay",
  };

  return (
    <Nav>
      {Object.keys(pathList).map((key) => (
        <StyleLink to={pathList[key]}>
          {pathList[key] === pathname ? (
            <Highlight key={key} layoutId="h"></Highlight>
          ) : null}
          {key}
        </StyleLink>
      ))}
    </Nav>
  );
}

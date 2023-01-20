import { Variants } from "framer-motion";
import { Box } from "./Box";

const gestureVariants: Variants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    borderRadius: "50%",
  },
};

export default function TouchBox() {
  return (
    <Box variants={gestureVariants} whileHover="hover" whileTap="click">
      <span>Touch and Click me!</span>
    </Box>
  );
}

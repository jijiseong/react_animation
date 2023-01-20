import {
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useSetRecoilState } from "recoil";
import { bgGradientState } from "../atoms";
import { Box } from "./Box";

export default function DragXBox() {
  const setBgGradient = useSetRecoilState(bgGradientState);
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

  useMotionValueEvent(gradient, "change", (value) => {
    setBgGradient(value);
  });

  return (
    <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin>
      <span>Drag me!</span>
    </Box>
  );
}

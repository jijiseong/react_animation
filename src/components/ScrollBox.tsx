import { useScroll, useTransform } from "framer-motion";
import { Box } from "./Box";

export default function ScrollBox() {
  const { scrollYProgress } = useScroll();

  const scrollScale = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 0]);
  return <Box style={{ scale: scrollScale }}></Box>;
}

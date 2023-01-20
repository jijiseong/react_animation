import { MotionValue } from "framer-motion";
import { atom } from "recoil";

export const bgGradientState = atom<string>({
  key: "bgGradient",
  default: undefined,
});

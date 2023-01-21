import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DragXBox from "./components/DragXBox";
import Home from "./components/Home";
import Logo from "./components/Logo";
import { OverlayBox } from "./components/OverlayBox";
import PrisonBox from "./components/PrisonBox";
import ScrollBox from "./components/ScrollBox";
import Slider from "./components/Slider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "prison",
          element: <PrisonBox />,
        },
        {
          path: "logo",
          element: <Logo />,
        },
        {
          path: "prison",
          element: <PrisonBox />,
        },
        {
          path: "scroll",
          element: <ScrollBox />,
        },
        {
          path: "dragx",
          element: <DragXBox />,
        },
        {
          path: "overlay",
          element: <OverlayBox />,
        },
        {
          path: "slider",
          element: <Slider />,
        },
      ],
    },
  ],
  { basename: "/react_animation" }
);

export default router;

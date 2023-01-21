import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
      <Outlet />
    </RecoilRoot>
  </StrictMode>
);

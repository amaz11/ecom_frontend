import { createBrowserRouter } from "react-router-dom";
import Client from "../layout/client/Client";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Auth from "../layout/auth/Auth";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    errorElement: "",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Authentication />,
      },
      {
        path: "registration",
        element: <Authentication />,
      },
    ],
  },
]);

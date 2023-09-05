import { createBrowserRouter } from "react-router-dom";
import Client from "../layout/client/Client";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Auth from "../layout/auth/Auth";
import ProtectedPage from "../pages/ProtectedPage";
import { authTokenCheck } from "../utils/auth";
import { CartPage } from "./LazyLoad";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    errorElement: <>Error</>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/protected",
        element: <ProtectedPage />,
        loader: () => authTokenCheck,
      },
      {
        path: "/carts",
        element: <CartPage />,
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

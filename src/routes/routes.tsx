import { createBrowserRouter } from "react-router-dom";
import Client from "../layout/client/Client";
import Home from "../pages/Home";

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
      {
        path: "",
        element: "",
      },
    ],
  },
]);

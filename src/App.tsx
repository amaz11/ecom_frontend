import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setToken } from "./app/authSlice/authSlice";
import { Suspense, useEffect } from "react";
import { setCarts } from "./app/cartSlice/cartSlice";
import { currentCarts } from "./utils/carts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    const currentUser = localStorage.getItem("currentUser");
    const carts = currentCarts();
    if (currentUser !== null && access_token !== null) {
      const user = JSON.parse(currentUser);
      const data = { access_token, user };
      if (user || access_token) {
        dispatch(setToken(data));
      }
    }
    if (carts !== null) {
      dispatch(setCarts(carts));
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<>Loading....</>}>
        <RouterProvider router={routers} />
      </Suspense>
    </>
  );
}

export default App;

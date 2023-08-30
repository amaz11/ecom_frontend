import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setToken } from "./app/authSlice/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser !== null && access_token !== null) {
      const user = JSON.parse(currentUser);
      const data = { access_token, user };
      if (user || access_token) {
        dispatch(setToken(data));
      }
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;

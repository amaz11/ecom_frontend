import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Client = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Client;

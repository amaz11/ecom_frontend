import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Client = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Client;

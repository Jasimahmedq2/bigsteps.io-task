import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className=" pt-4 sm:pt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

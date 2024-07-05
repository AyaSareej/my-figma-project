import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;

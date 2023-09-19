import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/home/Navbar/Navbar";
import Banner from "../pages/home/Banner/Banner";

const MainLayout = () => {
   const location = useLocation();

   return (
      <>
         <header className="header">
            <Navbar></Navbar>
            {location.pathname === "/" && <Banner></Banner>}
         </header>
         <Outlet></Outlet>
      </>
   );
};

export default MainLayout;

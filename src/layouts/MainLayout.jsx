import { Outlet, useLocation } from "react-router-dom";
import Banner from "../home/Banner/Banner";
import Navbar from "../home/Navbar/Navbar";

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

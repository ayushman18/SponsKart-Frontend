import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/home/Navbar/Navbar";
import Banner from "../pages/home/Banner/Banner";
import Loading from "../components/Loading/Loading";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
   const { loading } = useAuth();

   const location = useLocation();

   if (loading) {
      return <Loading />;
   }
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

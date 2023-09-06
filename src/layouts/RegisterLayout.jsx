import { Link, Outlet } from "react-router-dom";
import background from "./../assets/register/background.png";

const RegisterLayout = () => {
   return (
      <>
         <div
            className="min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${background}')` }}
         >
            <div className="min-h-screen bg-opacity-50 flex justify-center items-center bg-black">
               <div className="lg:w-3/4 bg-white py-11 rounded-3xl lg:pl-20 px-14 relative">
                  <Link to={"/"}>
                     <img src="./logo.png" alt="" className="w-72 mx-auto" />
                  </Link>
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </>
   );
};

export default RegisterLayout;

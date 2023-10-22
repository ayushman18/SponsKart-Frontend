import { Link, Outlet } from "react-router-dom";
import background from "./../assets/register/background.png";

const RegisterLayout = () => {
   return (
      <>
         <div
            className="min-h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${background}')` }}
         >
            <div className="bg-opacity-50 bg-black">
               <div className="mx-auto container flex justify-center items-center min-h-screen ">
                  <div className="p-10 rounded-2xl text-center bg-white relative">
                     <div>
                        <Link to={"/"}>
                           <img src="./logo.png" alt="" className="w-72 mx-auto" />
                        </Link>
                        <Outlet></Outlet>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default RegisterLayout;

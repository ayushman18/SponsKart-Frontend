import { Link } from "react-router-dom";
import Navbar from "../../pages/home/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Error = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg p-8">
               <h1 className="text-5xl font-bold text-red-500">404 Page not found</h1>
               <p className="text-xl text-gray-700 mt-4">
                  The page or route you are trying to browse was not found.
               </p>
               <Link
                  to="/"
                  className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 inline-block"
               >
                  Go back to Sponskart
               </Link>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Error;

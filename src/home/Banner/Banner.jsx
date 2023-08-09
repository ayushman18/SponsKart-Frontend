import { Link } from "react-router-dom";
import bannerImg from "./../../assets/home/sponskart.png";
import { FaSearch } from "react-icons/fa";
import arrow from "./../../assets/home/arrow.png";

const Banner = () => {
   return (
      <div className="container flex items-center mx-auto gap-10 pl-52 pt-11">
         <div className="space-y-4 w-[60%]">
            <h2 className="text-7xl">
               Bazaar of <span>Sponsors.</span>
            </h2>
            <div className="mb-10">
               <span>Popular: </span>
               <Link to={"/"} className="text-blue-400">
                  Digital Marketing,{" "}
               </Link>
               <Link to={"/"} className="text-blue-400">
                  Video Animation,{" "}
               </Link>
               <Link to={"/"} className="text-blue-400">
                  Music & Audio,{" "}
               </Link>
               <Link to={"/"} className="text-blue-400">
                  Programming & Tech,{" "}
               </Link>
               <Link to={"/"} className="text-blue-400">
                  Business{" "}
               </Link>
            </div>
            <div className="relative">
               <input
                  type="text"
                  placeholder="Search"
                  className="input w-full px-14 bg-[#cfef5062] rounded-full focus:outline-none text-xl py-8"
               />
               <FaSearch className="w-6 absolute opacity-50 right-6 top-1/3 h-6"></FaSearch>
            </div>
            <div className="flex justify-center items-center pt-7">
               <Link to="/register" className="py-2 px-8 bg-[#53C929] text-white rounded-full w-fit">
                  Sign Up
               </Link>
            </div>
            <div className="w-2/3 mx-auto ">
               <img src={arrow} alt="" className="w-20 ml-32 h-20 mx-auto" />
               <h2 className="text-xl ml-16 opacity-50">Book Your Meet Now!</h2>
            </div>
         </div>
         <div>
            <img src={bannerImg} alt="" className="h-[80vh] w-[800px] z-50" />
         </div>
      </div>
   );
};

export default Banner;

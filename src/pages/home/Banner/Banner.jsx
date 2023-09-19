import { Link } from "react-router-dom";
import bannerImg from "./../../../assets/home/sponskart.png";
import arrow from "./../../../assets/home/arrow.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
   return (
      <div className="container lg:flex items-center mx-auto gap-10 px-5 lg:pl-52 pt-11">
         <div className="space-y-4 lg:w-[60%]">
            <h2 className="text-4xl lg:text-7xl">
               Bazaar <br /> of{" "}
               <span className="text-[#94E331E3]">
                  <Typewriter
                     words={["SPONSORS", "EVENTS", "BRANDS", "CREATORS"]}
                     loop={Infinity}
                     typeSpeed={100}
                     deleteSpeed={50}
                     delaySpeed={1000}
                  />
               </span>
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

            <div className="flex justify-center items-center pt-7">
               <Link to="/register" className="py-2 px-8 bg-[#53C929] text-white rounded-full w-fit">
                  Sign Up
               </Link>
            </div>
            <div className="lg:w-2/3 mx-auto">
               <img src={arrow} alt="" className="w-16 h-16 mx-auto" />
               <h2 className="text-xl ml-16 opacity-50">Book Your Meet Now!</h2>
            </div>
         </div>
         <div className="hidden lg:block">
            <img src={bannerImg} alt="" className="h-[80vh] w-[800px] z-50" />
         </div>
      </div>
   );
};

export default Banner;

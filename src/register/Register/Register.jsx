import { FaSearch } from "react-icons/fa";
import strimming from "./../../assets/register/strimming.png";
import "./Register.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
   const [userRole, setUserRole] = useState("organizer");

   useEffect(() => {
      console.log(userRole);
   }, [userRole]);

   return (
      <>
         {" "}
         <p className="lg:w-1/2 py-5 text-xl px-10 rounded-full bg-[#cfef5062] mb-6">
            <FaSearch className="w-6 opacity-75 h-6 inline-block"></FaSearch> Looking for Sponsorship?
         </p>
         <p className="text-4xl font-semibold mb-6">
            I want to join <span className="uppercase text-green-400">Sponskart</span> as:
         </p>
         <div className="form-control">
            <label
               className="label justify-normal gap-8 cursor-pointer"
               onClick={() => setUserRole("organizer")}
            >
               <input
                  type="radio"
                  name="role"
                  className="radio checked:bg-green-500"
                  value="organizer"
                  defaultChecked
               />
               <span className="text-xl">Event Organizer</span>
            </label>
         </div>
         <div className="form-control">
            <label
               className="label justify-normal gap-8 cursor-pointer"
               onClick={() => setUserRole("content-creator")}
            >
               <input
                  type="radio"
                  name="role"
                  className="radio checked:bg-green-500"
                  value="content-creator"
               />
               <span className="text-xl">Content Creator</span>
            </label>
         </div>
         <div className="form-control">
            <label className="label justify-normal gap-8 cursor-pointer" onClick={() => setUserRole("brand")}>
               <input type="radio" name="role" className="radio checked:bg-green-500" value="brand" />
               <span className="text-xl">Brand</span>
            </label>
         </div>
         <div>
            <Link to={userRole}>
               <button className="py-4 px-16 bg-[#53C929] text-white rounded-full w-fit my-20">Next</button>
            </Link>
         </div>
         <img src={strimming} alt="" className="absolute top-0 -z-20 -right-10" />
      </>
   );
};

export default Register;

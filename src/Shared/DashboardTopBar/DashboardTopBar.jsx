import { FaCalendarAlt, FaRegBell, FaSearch, FaUser } from "react-icons/fa";

import moment from "moment";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const DashboardTopBar = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [smallDevice, setSmallDevice] = useState(false);

   useEffect(() => {
      if (screen.width < 650) setSmallDevice(true);
   }, [smallDevice]);

   const { user } = useAuth();

   const search = (e) => {
      e.preventDefault();
      const text = e.target.text.value;

      const category = e.target.category.value;

      navigate(`/search?text=${text}&category=${category}`);
   };

   return (
      <div className="bg-white rounded-xl md:p-6 py-4 md:flex gap-4 flex-wrap justify-between items-center">
         <div className="border-r pr-4 mb-6 pl-3 lg:pl-0 lg:mb-0 flex items-center gap-4 justify-start">
            <div className="avatar">
               <div className="w-16 rounded-full bg-slate-200">
                  {user.data.logo ? (
                     <>
                        <img src={"https://sponskart-hkgd.onrender.com/" + user.data.logo} alt="" />
                     </>
                  ) : (
                     <FaUser className="w-16 h-16"></FaUser>
                  )}
               </div>
            </div>
            <div>
               <p className="text-xl font-semibold">
                  {user.user.type === "organizer"
                     ? user?.data?.organizationName || "No Name"
                     : user.user.type === "brand"
                     ? user.data.brandName
                     : user.data.firstname + " " + user.data.lastname}
               </p>
               <p>{user.data.location},India</p>
            </div>
         </div>
         <div className="flex-grow flex justify-between flex-col md:flex-row gap-4 items-center pl-4">
            <div className="flex items-center gap-2">
               <FaCalendarAlt></FaCalendarAlt> {moment().format("Do MMM YY")}
            </div>
            <div>
               <div>
                  <form className="relative mr-4 text-center" onSubmit={search}>
                     <div className="join">
                        <div>
                           <div>
                              <input
                                 className="input bg-gray-100 input-bordered join-item focus:outline-none rounded-none"
                                 name="text"
                                 placeholder="Search"
                              />
                           </div>
                        </div>
                        <select
                           className="select select-bordered bg-gray-100 join-item w-28 md:w-40 focus:outline-none rounded-none"
                           name="category"
                        >
                           <option value="brand">Brand</option>
                           <option value="Organizer">Event-Organization</option>
                           <option value="user">Content-Creator</option>
                        </select>
                        <div className="indicator hidden md:block">
                           <button
                              className="btn join-item border-green-500 bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded-none"
                              type="submit"
                           >
                              <FaSearch></FaSearch>
                           </button>
                        </div>
                     </div>
                     <button
                        className="md:hidden my-2 btn join-item border-green-500 bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded-none"
                        type="submit"
                     >
                        <FaSearch></FaSearch>
                     </button>
                  </form>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Link
                  to={`/dashboard/${smallDevice ? "mobile-messages" : "messages"}`}
                  className={`btn btn-circle  ${
                     location.pathname === "/dashboard/messages" ? "bg-[#B9DE6A]" : " bg-gray-100"
                  } rounded-full`}
               >
                  <AiOutlineMessage className=" text-xl"></AiOutlineMessage>
               </Link>
               <button className="btn btn-circle bg-gray-100 rounded-full">
                  <FaRegBell className=" text-xl"></FaRegBell>
               </button>
            </div>
         </div>
      </div>
   );
};

export default DashboardTopBar;

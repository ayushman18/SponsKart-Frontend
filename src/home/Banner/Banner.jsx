import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Banner = () => {
   const [category, setCategory] = useState("freelancer");

   return (
      <div className="container flex items-center mx-auto gap-10 pl-52 pt-11">
         <div className="space-y-4">
            <p className="px-4 py-2 bg-gray-800 w-fit rounded font-semibold text-white">Over 1M & Counting</p>
            <p className="text-3xl">Search & Get Inspired With Our</p>
            <p className="text-4xl font-semibold">Top NotchContent Writers</p>
            <p className="text-gray-400">
               Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore ad minim eniam
               quis nostrud exercitation ullamco laborisn nisi ut aliquip.
            </p>
            <div className="p-3 text-xl my-11 rounded-lg shadow-2xl flex items-center bg-white w-full">
               <div className="w-full">
                  <div>
                     <input
                        className="input input-bordered join-item border-none focus:outline-none active:outline-none"
                        placeholder="Search"
                     />
                  </div>
               </div>

               <div className="dropdown dropdown-hover">
                  <label tabIndex={0}>
                     <AiFillCaretDown className="w-16" />
                  </label>
                  <ul
                     tabIndex={0}
                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li className={`${category === "item 1" ? "bg-gray-100" : ""}`}>
                        <Link
                           onClick={() => setCategory("item 1")}
                           className="flex justify-between items-center"
                        >
                           Item 1
                           {category === "item 1" && (
                              <span className="text-green-400 text-xl">
                                 <TiTick></TiTick>
                              </span>
                           )}
                        </Link>
                     </li>
                     <li className={`${category === "item 2" ? "bg-gray-100" : ""}`}>
                        <Link
                           onClick={() => setCategory("item 2")}
                           className="flex justify-between items-center"
                        >
                           Item 2
                           {category === "item 2" && (
                              <span className="text-green-400 text-xl">
                                 <TiTick></TiTick>
                              </span>
                           )}
                        </Link>
                     </li>
                     <li className={`${category === "item 3" ? "bg-gray-100" : ""}`}>
                        <Link
                           onClick={() => setCategory("item 3")}
                           className="flex justify-between items-center"
                        >
                           Item 3
                           {category === "item 3" && (
                              <span className="text-green-400 text-xl">
                                 <TiTick></TiTick>
                              </span>
                           )}
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="indicator">
                  <button className="btn btn-warning text-white">Search</button>
               </div>
            </div>
            <div>
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
         </div>
         <div>
            <img src="https://i.ibb.co/fGPzTY2/Booknow.png" alt="" className="h-[80vh] w-[800px]" />
         </div>
      </div>
   );
};

export default Banner;

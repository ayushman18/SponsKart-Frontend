import { Link, useLocation } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { useEffect } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = () => {
   const location = useLocation();
   useEffect(() => {
      if (location.pathname === "/") {
         window.addEventListener("scroll", () => {
            const navbar = document.getElementById("navbar");
            navbar.classList.toggle("fixed", window.scrollY > 40);
            navbar.classList.toggle("bg-white", window.scrollY > 40);
            navbar.classList.toggle("shadow-lg", window.scrollY > 40);
         });
      }
   }, [location]);
   // todo: active link class name

   // const pathname = location.pathname;

   return (
      <nav
         id="navbar"
         className={`navbar justify-between items-center top-0 z-[100000] lg:px-10 py-1 duration-700`}
      >
         <div>
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                  <li>
                     <a>Browse</a>
                     <ul className="p-2">
                        <li>
                           <a>Submenu 1</a>
                        </li>
                        <li>
                           <a>Submenu 2</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a>Past Events</a>
                     <ul className="p-2">
                        <li>
                           <a>Submenu 1</a>
                        </li>
                        <li>
                           <a>Submenu 2</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a>Contact Us</a>
                     <ul className="p-2">
                        <li>
                           <a>Submenu 1</a>
                        </li>
                        <li>
                           <a>Submenu 2</a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
            <Link to="/" className="normal-case text-lg text-gray-500">
               <img src="logo.png" alt="" className="h-auto lg:h-20" />
            </Link>
         </div>
         <div className="hidden lg:flex">
            <div className="flex items-center justify-center">
               <div className="dropdown dropdown-hover dropdown-bottom">
                  <label
                     tabIndex={1}
                     className="flex hover:border-b border-orange-400 rounded-none hover:text-orange-400 hover:bg-transparent gap-3 py-3 px-5 justify-center items-center"
                  >
                     Browse <FaChevronDown></FaChevronDown>
                  </label>
                  <ul
                     tabIndex={1}
                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Item 2</a>
                     </li>
                  </ul>
               </div>
               <div className="dropdown dropdown-hover dropdown-bottom">
                  <label
                     tabIndex={2}
                     className="flex hover:border-b border-orange-400 rounded-none hover:text-orange-400 hover:bg-transparent gap-3 py-3 px-5 justify-center items-center"
                  >
                     Past Events <FaChevronDown></FaChevronDown>
                  </label>
                  <ul
                     tabIndex={2}
                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Item 2</a>
                     </li>
                  </ul>
               </div>
               <div className="dropdown dropdown-hover dropdown-bottom">
                  <label
                     tabIndex={3}
                     className="flex hover:border-b border-orange-400 rounded-none hover:text-orange-400 hover:bg-transparent gap-3 py-3 px-5 justify-center items-center"
                  >
                     Contact Us <FaChevronDown></FaChevronDown>
                  </label>
                  <ul
                     tabIndex={3}
                     className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Item 2</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <div className="relative text-white mr-4">
                     <input
                        type="text"
                        placeholder="Search"
                        className="input w-full px-6 bg-black rounded-lg focus:outline-none text-xl py-3"
                     />
                     <FaSearch className="w-6 absolute opacity-75 right-5 top-1/4 h-6"></FaSearch>
                  </div>
               </div>
            </div>
            <div className="w-[2px]  h-8 bg-gray-500"></div>
            <div className="ml-4 flex justify-center items-center">
               <Link
                  to="sign-in"
                  className="btn h-10 btn-success hover:shadow-lg text-white font-bold  normal-case"
               >
                  <LuLogIn /> Sign In
               </Link>
               <Link
                  to="/register"
                  className="btn h-10 btn-warning text-white font-bold  normal-case ml-4 hover:shadow-lg"
               >
                  Join Now
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

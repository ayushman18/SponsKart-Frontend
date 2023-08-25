import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { useEffect } from "react";
import { FaPowerOff, FaRegBell, FaRegStar, FaRegUser, FaSearch, FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
   const { user, logOut } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (location.pathname === "/") {
            const navbar = document.getElementById("navbar");
            navbar.classList.toggle("fixed", window.scrollY > 40);
            navbar.classList.toggle("bg-white", window.scrollY > 40);
            navbar.classList.toggle("shadow-lg", window.scrollY > 40);
         }
      });
   }, [location]);

   const search = (e) => {
      e.preventDefault();
      const text = e.target.text.value;

      const category = e.target.category.value;
      navigate(`/search?text=${text}&category=${category}`);
   };

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
                     <a>Careers</a>
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
                     <Link to="live-events">Live Events</Link>
                  </li>
                  <li>
                     <Link to="contact-us">Contact Us</Link>
                  </li>
                  {user ? (
                     <>
                        <div className="dropdown dropdown-end">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                 <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                           </label>
                           <ul
                              tabIndex={0}
                              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                           >
                              <li>
                                 <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                 </a>
                              </li>
                              <li>
                                 <a>Settings</a>
                              </li>
                              <li>
                                 <button onClick={logOut}>Logout</button>
                              </li>
                           </ul>
                        </div>
                     </>
                  ) : (
                     <li className="ml-4 flex justify-center items-center">
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
                     </li>
                  )}
               </ul>
            </div>
            <Link to="/" className="normal-case text-lg text-gray-500">
               <img src="logo.png" alt="" className="h-auto lg:h-20" />
            </Link>
         </div>
         <div className="hidden lg:flex">
            <div className="flex items-center justify-center">
               <ul className="menu menu-horizontal px-1">
                  <li tabIndex={0} className="bg-none">
                     <details>
                        <summary className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300">
                           Careers
                        </summary>
                        <ul className="p-2 w-52">
                           <li>
                              <a>Submenu 1</a>
                           </li>
                           <li>
                              <a>Submenu 2</a>
                           </li>
                        </ul>
                     </details>
                  </li>
                  <li>
                     <a className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300">
                        Live Events
                     </a>
                  </li>
                  <li>
                     <a className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300">
                        Contact Us
                     </a>
                  </li>
               </ul>
               <div>
                  <form className="relative mr-4" onSubmit={search}>
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
                           className="select select-bordered bg-gray-100 join-item w-20 focus:outline-none rounded-none"
                           name="category"
                        >
                           {/* <option value="brand">Brands</option> */}
                           <option value="Organizer">Event-Organization</option>
                           <option value="user">Content-Creator</option>
                        </select>
                        <div className="indicator">
                           <button
                              className="btn join-item border-green-500 bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded-none"
                              type="submit"
                           >
                              <FaSearch></FaSearch>
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div className="w-[2px]  h-8 bg-gray-500"></div>
            {user ? (
               <>
                  <div className="w-14 ml-4 bg-gray-400 h-14 flex justify-center items-center rounded-full border">
                     <FaRegBell className="text-2xl"></FaRegBell>
                  </div>
                  <div className="dropdown dropdown-end ml-4">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-16 rounded-full flex justify-center items-center">
                           {user.img ? (
                              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                           ) : (
                              <FaUser className="text-5xl"></FaUser>
                           )}
                        </div>
                     </label>
                     <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-auto"
                     >
                        <li>
                           <a className="justify-between">
                              <div className="flex gap-5 border-b pb-6">
                                 <div className="avatar online">
                                    <div className="w-12 border rounded-full">
                                       {user.img ? (
                                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                       ) : (
                                          <FaUser className="text-5xl mx-auto"></FaUser>
                                       )}
                                    </div>
                                 </div>
                                 <div>
                                    <h2>{user.organizer ? user.organizer.organizationName : ""}</h2>
                                    <p className="flex">{user.email}</p>
                                 </div>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a>
                              <div className="badge badge-warning badge-xs"></div> Status
                           </a>
                        </li>
                        <li>
                           <Link to="/dashboard">
                              <FaRegUser></FaRegUser> Dashboard
                           </Link>
                        </li>
                        <li>
                           <a>
                              <FaRegStar></FaRegStar> Past Events
                           </a>
                        </li>
                        <li>
                           <a>
                              <AiFillSetting></AiFillSetting> Settings
                           </a>
                        </li>
                        <li>
                           <a onClick={logOut}>
                              <FaPowerOff></FaPowerOff> Log Out
                           </a>
                        </li>
                     </ul>
                  </div>
               </>
            ) : (
               <>
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
               </>
            )}
         </div>
      </nav>
   );
};

export default Navbar;

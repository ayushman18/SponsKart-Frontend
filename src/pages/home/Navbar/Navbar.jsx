import { Link, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { useEffect } from "react";
import { FaPowerOff, FaRegBell, FaRegStar, FaRegUser, FaSearch, FaUser } from "react-icons/fa";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Navbar = () => {
   const { user, logOut } = useAuth();
   const navigate = useNavigate();
   const [online, setOnline] = useState(true);

   const handelStatus = () => {
      setOnline(!online);
      axios
         .post("https://sponskart-hkgd.onrender.com/status", { status: "online" })
         .then((res) => {
            console.log(res.data);
         })
         .catch((err) => console.log(err));
   };

   useEffect(() => {
      const scroll = window.addEventListener("scroll", () => {
         const navbar = document.getElementById("navbar");
         navbar?.classList.toggle("fixed", window.scrollY > 40);
         navbar?.classList.toggle("bg-white", window.scrollY > 40);
         navbar?.classList.toggle("shadow-lg", window.scrollY > 40);
      });
      return scroll;
   }, []);

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
               <div className="drawer lg:hidden z-50">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                  <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
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

                  <div className="drawer-side w-full">
                     <label htmlFor="my-drawer" className="drawer-overlay"></label>
                     <div className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
                        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button bg-gray-300">
                           <AiOutlineClose></AiOutlineClose>
                        </label>
                        {/* Sidebar content here */}
                        <div className="flex justify-between items-center">
                           <h2 className="text-3xl my-4 text-green-400">Sponskart</h2>
                           {user && (
                              <div className="w-10 ml-4 bg-gray-400 h-10 flex justify-center items-center rounded-full border">
                                 <FaRegBell className="text-xl"></FaRegBell>
                              </div>
                           )}
                        </div>
                        <div>
                           {user && (
                              <>
                                 <div className="bg-white">
                                    <>
                                       <a className="justify-between">
                                          <div className="flex items-center gap-5 border-b py-4">
                                             <div className="avatar online">
                                                <div className="w-12 border rounded-full">
                                                   {user.data.logo ? (
                                                      <img
                                                         src={
                                                            "https://sponskart-hkgd.onrender.com/" +
                                                            user.data.logo
                                                         }
                                                      />
                                                   ) : (
                                                      <FaUser className="text-5xl mx-auto"></FaUser>
                                                   )}
                                                </div>
                                             </div>
                                             <div>
                                                <h2>
                                                   {user.user.type === "organizer"
                                                      ? user.data?.organizationName
                                                      : user.user.type === "creator"
                                                      ? user.data.firstname + " " + user.data.lastname
                                                      : user.data.brandName}
                                                </h2>
                                                <p className="flex">{user.user?.email}</p>
                                             </div>
                                          </div>
                                       </a>
                                    </>
                                    <li onClick={handelStatus}>
                                       <a>
                                          <div
                                             className={`badge  ${
                                                online ? "badge-success" : "badge-warning"
                                             } badge-xs`}
                                          ></div>{" "}
                                          {online ? "Online" : "Offline"}
                                       </a>
                                    </li>
                                    <li>
                                       <Link to={`/dashboard/${user.user.type}/updateProfile`}>
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
                                 </div>
                              </>
                           )}
                        </div>
                        <div className="w-80 min-h-full text-base-content">
                           <ul className="menu menu-vertical px-1">
                              <li tabIndex={0} className="bg-none">
                                 <details>
                                    <summary className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300">
                                       Careers
                                    </summary>
                                    <ul className="p-2 w-52">
                                       <li>
                                          <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Web Developer</a>
                                       </li>
                                       <li>
                                          <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Web Designer</a>
                                       </li>
                                       <li>
                                          <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Marketing Officer</a>
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
                                 <Link
                                    to="/contact-us"
                                    className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300"
                                 >
                                    Contact Us
                                 </Link>
                              </li>
                           </ul>
                        </div>

                        <form className="text-center" onSubmit={search}>
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
                                 className="select select-bordered bg-gray-100 join-item w-28 focus:outline-none rounded-none"
                                 name="category"
                              >
                                 <option value="brand">Brands</option>
                                 <option value="organizer">Event-Organization</option>
                                 <option value="creator">Content-Creator</option>
                              </select>
                           </div>
                           <br />
                           <button
                              className="btn border-green-500 bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded-none mt-3 lg:mt-0"
                              type="submit"
                           >
                              <FaSearch></FaSearch>
                           </button>
                        </form>
                        <div>
                           {!user && (
                              <>
                                 <div className="m-4 flex justify-around items-center">
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
                     </div>
                  </div>
               </div>
            </div>
            <Link to="/" className="normal-case text-lg text-gray-500">
               <img src="logo.png" alt="" className="h-auto lg:h-20" />
            </Link>
         </div>

         {/* computer Navbar */}
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
                              <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Web Developer</a>
                           </li>
                           <li>
                              <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Web Designer</a>
                           </li>
                           <li>
                              <a href="https://forms.gle/qB6Fugzm7rgXsSjaA">Marketing Officer</a>
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
                     <Link
                        to="/contact-us"
                        className="hover:bg-transparent hover:text-green-500 font-medium rounded-none hover:border-b border-green-500 duration-300"
                     >
                        Contact Us
                     </Link>
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
                           className="select select-bordered bg-gray-100 join-item w-40 focus:outline-none rounded-none"
                           name="category"
                        >
                           <option value="brand">Brands</option>
                           <option value="organizer">Event-Organization</option>
                           <option value="creator">Content-Creator</option>
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
                           {user.data.logo ? (
                              <img src={"https://sponskart-hkgd.onrender.com/" + user.data.logo} />
                           ) : (
                              <FaUser className="text-5xl"></FaUser>
                           )}
                        </div>
                     </label>
                     <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-auto bg-white"
                     >
                        <li>
                           <a className="justify-between">
                              <div className="flex items-center gap-5 border-b py-4">
                                 <div className="avatar relative">
                                    <div className="w-14 border rounded-full">
                                       <div
                                          className={`h-4 w-4 rounded-full ${
                                             online ? "bg-success" : "bg-warning"
                                          }  border-2 border-white absolute top-0 right-0`}
                                       ></div>
                                       {user.data.logo ? (
                                          <img
                                             src={"https://sponskart-hkgd.onrender.com/" + user.data.logo}
                                          />
                                       ) : (
                                          <FaUser className="text-5xl mx-auto"></FaUser>
                                       )}
                                    </div>
                                 </div>
                                 <div>
                                    <h2>
                                       {user.user.type === "organizer"
                                          ? user.data?.organizationName
                                          : user.user.type === "creator"
                                          ? user.data.firstname + " " + user.data.lastname
                                          : user.data.brandName}
                                    </h2>
                                    <p className="flex">{user.user?.email}</p>
                                 </div>
                              </div>
                           </a>
                        </li>
                        <li onClick={handelStatus}>
                           <a>
                              <div
                                 className={`badge  ${online ? "badge-success" : "badge-warning"} badge-xs`}
                              ></div>{" "}
                              {online ? "Online" : "Offline"}
                           </a>
                        </li>
                        <li>
                           <Link to={`/dashboard/${user.user.type}/updateProfile`}>
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

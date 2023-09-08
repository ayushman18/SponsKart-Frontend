import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import fire from "./../assets/dashboard/fire.png";
import { FaCalendarAlt, FaPowerOff, FaRegBell, FaRegQuestionCircle, FaSearch, FaUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import moment from "moment/moment";

const DashboardLayout = () => {
   const { user, logOut } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   const percent = (Object.keys(user).length / 22) * 100;
   const number = Math.round(percent / (100 / 8));

   const search = (e) => {
      e.preventDefault();
      const text = e.target.text.value;

      const category = e.target.category.value;

      navigate(`/search?text=${text}&category=${category}`);
   };

   return (
      <section className="bg-[#151414] min-h-screen">
         <div className="grid grid-cols-3">
            <div className="m-8 rounded-xl bg-white p-8">
               <img src="./logo.png" alt="" />
               <div className="w-52 h-52 mx-auto rounded-full flex justify-center items-center bg-gray-400">
                  <p>profile picture</p>
               </div>
               <nav className="flex flex-col my-6">
                  <Link to={`/`} className="hover:bg-gray-200 rounded-md p-4">
                     Home
                  </Link>
                  <Link
                     to={`/dashboard/${user.user.type}/profile`}
                     className="hover:bg-gray-200 rounded-md p-4"
                  >
                     Profile
                  </Link>
                  <Link
                     to={`/dashboard/${user.user.type}/updateProfile`}
                     className="hover:bg-gray-200 rounded-md p-4"
                  >
                     Update Profile
                  </Link>
                  <Link
                     to={`/dashboard/${user.user.type}/addPost`}
                     className="hover:bg-gray-200 rounded-md p-4"
                  >
                     Add A Post
                  </Link>
                  <Link
                     to={`/dashboard/${user.user.type}/managePost`}
                     className="hover:bg-gray-200 rounded-md p-4"
                  >
                     Manage Post
                  </Link>
               </nav>
               <div className="w-72 rounded-xl mx-auto text-center bg-gradient-to-b from-green-300 to-green-50 p-4 bg-opacity-50">
                  <h2 className="flex items-center gap-4 text-3xl">
                     Upgrade to Pro <img src={fire} alt="" className="w-10" />
                  </h2>
                  <div className="px-8">
                     <p>Get 1 month of free trial and unlock all pro features</p>
                     <button className="py-2 px-6 mt-8 bg-black text-white rounded-3xl">Upgrade</button>
                  </div>
               </div>
               <div className="my-8">
                  <Link className="flex items-center gap-4 mb-4">
                     <FaRegQuestionCircle></FaRegQuestionCircle> Help & information
                  </Link>
                  <button className="flex items-center gap-4" onClick={logOut}>
                     <FaPowerOff></FaPowerOff> Log Out
                  </button>
               </div>
            </div>
            <div className="col-span-2 p-8">
               <div className="bg-white rounded-xl p-6 flex gap-4 flex-wrap justify-between items-center">
                  <div className="border-r pr-4 flex items-center gap-4 justify-start">
                     <div className="avatar">
                        <div className="w-16 rounded-full bg-slate-200">
                           {user?.img ? (
                              <>
                                 <img src={user?.img} alt="" />
                              </>
                           ) : (
                              <FaUser className="w-16 h-16"></FaUser>
                           )}
                        </div>
                     </div>
                     <div>
                        <p className="text-xl font-semibold">
                           {user.user.type === "Organizer"
                              ? user?.organizer?.organizationName || "No Name"
                              : user.user.type === "brand"
                              ? "Brand Name"
                              : user.firstname + " " + user.lastname}
                        </p>
                        <p>{user.data.email}</p>
                     </div>
                  </div>
                  <div className="flex-grow flex justify-between items-center pl-4">
                     <div className="flex items-center gap-2">
                        <FaCalendarAlt></FaCalendarAlt> {moment().format("Do MMM YY")}
                     </div>
                     <div>
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
                     <div className="flex items-center gap-4">
                        <Link
                           to="/dashboard/messages"
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
               <div className="my-8">
                  <div className="mb-4">
                     <h2 className="text-xl text-white">Profile Updated</h2>
                     <div className="flex gap-2 items-center text-xl">
                        {arr.map((element) => (
                           <div
                              key={element}
                              className={`h-4 w-20 ${
                                 element <= number ? "bg-[#B9DE6A]" : "bg-white"
                              } rounded-full`}
                           ></div>
                        ))}
                        <h2 className="text-white">{Math.round(percent)}%</h2>
                     </div>
                  </div>
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </section>
   );
};

export default DashboardLayout;

import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import fire from "./../assets/dashboard/fire.png";
import { FaPowerOff, FaRegBell, FaRegQuestionCircle, FaSearch, FaUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const DashboardLayout = () => {
   const { user, logOut } = useAuth();

   const navigate = useNavigate();

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
               <nav className="flex flex-col gap-6 my-6">
                  <Link className="">Home</Link>
                  <Link className="">Home</Link>
                  <Link className="">Home</Link>
                  <Link className="">Home</Link>
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
               <div className="bg-white rounded-xl p-6 flex justify-between items-center">
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
                           {user.type === "Organizer"
                              ? user.organizer.organizationName
                              : user.type === "brand"
                              ? "Brand Name"
                              : "User Name"}
                        </p>
                        <p>{user.email}</p>
                     </div>
                  </div>
                  <div className="flex-grow flex justify-between items-center pl-4">
                     <div>date</div>
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
                                    className="select select-bordered bg-gray-100 join-item w-20 focus:outline-none rounded-none"
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
                        <p className="p-5 bg-gray-100 rounded-full">
                           <AiOutlineMessage className=" text-xl"></AiOutlineMessage>
                        </p>
                        <p className="p-5 bg-gray-100 rounded-full">
                           <FaRegBell className=" text-xl"></FaRegBell>
                        </p>
                     </div>
                  </div>
               </div>
               <div className="my-8">
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </section>
   );
};

export default DashboardLayout;

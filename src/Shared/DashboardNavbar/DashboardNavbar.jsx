import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaPowerOff, FaRegQuestionCircle } from "react-icons/fa";
import fire from "../../assets/dashboard/fire.png";

const DashboardNavbar = () => {
   const { user, logOut } = useAuth();

   return (
      <div className="lg:m-8 rounded-xl bg-white lg:p-8 p-4">
         <img src="./logo.png" alt="" />
         <div className="w-52 h-52 mx-auto rounded-full flex justify-center items-center bg-gray-400">
            <p>profile picture</p>
         </div>
         <nav className="flex flex-col my-6">
            <Link to={`/`} className="hover:bg-gray-200 rounded-md p-4">
               Home
            </Link>

            <Link
               to={`/dashboard/${user.user.type}/updateProfile`}
               className="hover:bg-gray-200 rounded-md p-4"
            >
               Update Profile
            </Link>
            <Link to={`/dashboard/${user.user.type}/addPost`} className="hover:bg-gray-200 rounded-md p-4">
               Add A Post
            </Link>
            <Link to={`/dashboard/${user.user.type}/managePost`} className="hover:bg-gray-200 rounded-md p-4">
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
   );
};

export default DashboardNavbar;

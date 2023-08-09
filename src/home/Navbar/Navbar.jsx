import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
   window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("fixed", window.scrollY > 40);
      navbar.classList.toggle("bg-white", window.scrollY > 40);
      navbar.classList.toggle("shadow-lg", window.scrollY > 40);
   });
   // todo: active link class name
   // const location = useLocation();
   // const pathname = location.pathname;

   return (
      <nav id="navbar" className={`navbar justify-between top-0 z-[100000] lg:px-10 py-3 duration-700`}>
         <div className="navbar-start">
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
                     <Link to="how-it-works" className="text-lg text-gray-500">
                        How it works
                     </Link>
                  </li>
                  <li>
                     <Link className="text-lg text-gray-500">View Creators</Link>
                     <ul className="p-2">
                        <li>
                           <Link to="job-listing">Job Listing</Link>
                        </li>
                        <li>
                           <Link to="job-single">Job Single</Link>
                        </li>
                        <li>
                           <Link to="job-proposal">Job Proposal</Link>
                        </li>
                     </ul>
                  </li>

                  <div className="divider">or</div>
                  <div>
                     <Link className="btn">Button</Link>
                  </div>
               </ul>
            </div>
            <Link to="/" className="normal-case text-lg text-gray-500">
               <img src="logo.png" alt="" className="h-20" />
            </Link>
         </div>
         <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               <li>
                  <Link
                     to="how-it-works"
                     className="text-lg hover:border-b border-orange-400 rounded-none hover:text-orange-400 text-gray-500"
                     style={{ background: "none" }}
                  >
                     How it works
                  </Link>
               </li>

               <li tabIndex={0}>
                  <details className="text-lg text-gray-500">
                     <summary
                        className="text-lg hover:border-b border-orange-400 rounded-none hover:text-orange-400 text-gray-500"
                        style={{ background: "none" }}
                     >
                        View Creators
                     </summary>
                     <ul className="p-2 w-60 border-t border-orange-400 rounded-none">
                        <li>
                           <Link to="job-listing">Job Listing</Link>
                        </li>
                        <li>
                           <Link to="job-single">Job Single</Link>
                        </li>
                        <li>
                           <Link to="job-proposal">Job Proposal</Link>
                        </li>
                     </ul>
                  </details>
               </li>
            </ul>
            <div className="w-[2px]  h-8 bg-gray-500"></div>
            <div className="ml-4">
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

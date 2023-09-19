import { Link } from "react-router-dom";
import img1 from "./../../../assets/home/joinNow1.png";
import img2 from "./../../../assets/home/joinNow2.png";
const JoinNow = () => {
   return (
      <div className="lg:grid grid-cols-3 gap-4 container lg:mx-auto">
         <img src={img1} alt="" />
         <div className="my-auto px-6 lg:px-0">
            <p className="text-center text-4xl mb-6 ">Join Now & Start</p>
            <p className="text-gray-500">
               {" "}
               Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore magna
               adminim eniam quis nostrud exercitation ullamco laborisn nisi ut aliquip.
            </p>
            <Link to="/register">
               <button className="w-full py-6 rounded-lg text-xl bg-[#53C929] hover:bg-green-600 text-white my-12">
                  Click Here & Join Now
               </button>
            </Link>
            <p className="text-sm">
               <Link to={"/terms-conditions"} className="link link-primary no-underline">
                  Terms and Conditions
               </Link>{" "}
               applies. read our{" "}
               <Link to={"/privacy-policy"} className="link link-primary no-underline">
                  Privacy Policy{" "}
               </Link>
               to get started.
            </p>
         </div>
         <img src={img2} alt="" />
      </div>
   );
};

export default JoinNow;

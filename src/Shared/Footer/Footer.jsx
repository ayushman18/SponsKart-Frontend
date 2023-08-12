import { FaFacebookF, FaGoogle, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "./../../assets/home/sponskart.png";

const Footer = () => {
   return (
      <footer>
         <div className="bg-slate-800">
            <div className="lg:grid px-8 lg:px-52 py-10 grid-cols-2 mx-auto container">
               <div className="lg:border-r-2 mb-8 lg:mb-0 border-gray-200 pr-6 space-y-6">
                  <Link>
                     <img src="./logo.png" alt="" className="h-24" />
                  </Link>
                  <p className="text-gray-300 text-lg">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium
                     commodi excepturi. Ex incidunt numquam aut aspernatur laudantium. Vel, illo.
                  </p>
                  <div className="text-white flex gap-6 text-2xl">
                     <FaFacebookF></FaFacebookF> <FaTwitter></FaTwitter>{" "}
                     <FaInstagramSquare></FaInstagramSquare> <FaGoogle></FaGoogle> <FaYoutube></FaYoutube>
                  </div>
               </div>
               <div className="grid grid-cols-2 text-xl lg:ml-10">
                  <div className="text-gray-100 ">
                     <h4 className="text-2xl mb-6">Company</h4>
                     <div className="flex flex-col gap-4">
                        <Link>About Us</Link>
                        <Link>How It Works</Link>
                        <Link>Careers</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Trust & Safety</Link>
                        <Link>View All</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-slate-900">
            <div className="lg:flex px-8 lg:px-0 justify-center container mx-auto items-center gap-6 text-white py-6 text-xl">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <button className="px-8 py-2 rounded-lg bg-orange-400 mt-6">Explore More</button>
            </div>
         </div>
         <div className="bg-slate-800 text-white py-4">
            <div className="container mx-auto flex flex-wrap px-10 lg:px-0 pb-8 items-center justify-between">
               <Link>Copyright</Link>
               <img src={img} className="h-20 w-20" alt="" />
               <div className="flex gap-4 justify-center items-center">
                  <Link>About Us</Link>
                  <Link>How It Works</Link>
                  <Link>Careers</Link>
                  <Link>Terms & Conditions</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

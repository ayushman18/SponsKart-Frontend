import { Link } from "react-router-dom";
import linkedin from "./../../../assets/socialIcon/linkedin.png";
import instagram from "./../../../assets/socialIcon/instagram.png";
import twitter from "./../../../assets/socialIcon/twitter.png";
import { FaUser } from "react-icons/fa";

const ContentCreatorSearchCard = ({ category, data }) => {
   return (
      <div className="card hover:shadow-2xl z-0 bg-[#CFEF504F] shadow-xl">
         <div className="card-body items-center">
            <div className="mx-auto">
               {data.logo ? (
                  <img
                     src={"https://sponskart-hkgd.onrender.com/" + data?.logo}
                     alt=""
                     className="w-24 mx-auto"
                  />
               ) : (
                  <FaUser className="text-6xl mx-auto"></FaUser>
               )}
               <Link to={`/${category}/${data._id}`}>
                  <h2 className="card-title mx-auto w-fit hover:text-gray-400 my-4">
                     {data.firstname + " " + data.lastname}
                  </h2>
               </Link>
               <div className="flex text-gray-600 text-center items-center text-sm ">
                  <p>{data.followers}K Followers</p>
                  <div className="w-[2px] mx-2 h-10 bg-gray-500"></div>
                  <p>{data.state}</p>
                  <div className="w-[2px] mx-2 h-10 bg-gray-500"></div>
                  <p>Rs 1,00,000 per project</p>
               </div>
               <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-xs rounded-full bg-white my-4">Follow</button>
                  <button className="btn btn-outline btn-success ml-3 btn-xs rounded-full bg-white my-4">
                     Send Proposal
                  </button>
               </div>
            </div>

            <div className="text-gray-600 flex gap-10 items-center text-sm mx-auto">
               <Link>
                  <img src={linkedin} alt="" className="w-8" />
               </Link>

               <Link>
                  <img src={instagram} alt="" className="w-8" />
               </Link>

               <Link>
                  <img src={twitter} alt="" className="w-8" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ContentCreatorSearchCard;

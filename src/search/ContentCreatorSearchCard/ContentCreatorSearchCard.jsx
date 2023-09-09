import { Link } from "react-router-dom";
import linkedin from "./../../assets/socialIcon/linkedin.png";
import instagram from "./../../assets/socialIcon/instagram.png";
import twitter from "./../../assets/socialIcon/twitter.png";

const ContentCreatorSearchCard = ({ category, data }) => {
   return (
      <div className="card hover:shadow-2xl z-0 bg-[#CFEF504F] shadow-xl">
         <div className="card-body md:flex-row items-center">
            <div className="w-5/6 mx-auto">
               <img src={linkedin} alt="" className="w-24" />
               <Link to={`/${category}/${data._id}`}>
                  <h2 className="card-title hover:text-gray-400 my-4">
                     {data.firstname + " " + data.lastname}
                  </h2>
               </Link>
               <div className="flex text-gray-600 justify-between items-center text-sm ">
                  <p>{data.followers}K Followers</p>
                  <div className="divider divider-horizontal"></div>
                  <p>{data.state}</p>
                  <div className="divider divider-horizontal"></div>
                  <p>Rs 1,00,000 per project</p>
               </div>
               <button className="btn btn-outline btn-xs rounded-full bg-white my-4">Follow</button>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="text-gray-600 flex md:flex-col gap-10 items-center text-sm mx-auto">
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

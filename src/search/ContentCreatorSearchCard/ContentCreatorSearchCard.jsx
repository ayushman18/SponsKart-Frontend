import { Link } from "react-router-dom";

import linkedin from "./../../assets/socialIcon/linkedin.png";
import instagram from "./../../assets/socialIcon/instagram.png";
import twitter from "./../../assets/socialIcon/twitter.png";

const ContentCreatorSearchCard = ({ category, data }) => {
   return (
      <div className="card w-96 hover:shadow-2xl bg-[#CFEF504F] shadow-xl">
         <div className="card-body">
            <div className="text-center w-5/6 mx-auto">
               <img src={linkedin} alt="" className="w-24 mx-auto" />
               <Link to={`/${category}/${data._id}`}>
                  <h2 className="card-title hover:text-gray-400 w-fit mx-auto my-4">
                     {data.firstname + " " + data.lastname}
                  </h2>
               </Link>
               <div className="flex text-gray-600 justify-between items-center text-sm ">
                  <p>5K Followers</p>
                  <div className="divider divider-horizontal"></div>
                  <p>Mumbai</p>
                  <div className="divider divider-horizontal"></div>
                  <p>Rs 1,00,000 per project</p>
               </div>
               <button className="btn btn-outline btn-xs rounded-full bg-white">Follow</button>
            </div>
            <p>
               Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt mollit
               anim id est laborum. Seden utem perspiciatis undesieu omnis iste natus error…
            </p>
            <div className="flex text-gray-600 items-center text-sm mx-auto">
               <Link>
                  <img src={linkedin} alt="" className="w-8" />
               </Link>
               <div className="divider divider-horizontal"></div>
               <Link>
                  <img src={instagram} alt="" className="w-8" />
               </Link>
               <div className="divider divider-horizontal"></div>
               <Link>
                  <img src={twitter} alt="" className="w-8" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ContentCreatorSearchCard;

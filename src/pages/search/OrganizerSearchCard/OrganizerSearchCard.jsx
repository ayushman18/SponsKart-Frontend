import { Link } from "react-router-dom";
import gmailImg from "./../../../assets/search/gmail.png";
import linkedin from "./../../../assets/socialIcon/linkedin.png";
import instagram from "./../../../assets/socialIcon/instagram.png";
import twitter from "./../../../assets/socialIcon/twitter.png";
import bg from "./../../../assets/organizerbg.png";

const OrganizerSearchCard = ({ data, category }) => {
   return (
      <div className="card max-w-[420px] z-0 hover:shadow-2xl bg-base-100 rounded-2xl shadow-md">
         <figure>
            <img
               src={data.backgroundImage ? data.backgroundImage : bg}
               alt="Background"
               className="h-48 object-fill w-full object-center"
            />
         </figure>
         <div className="card-body relative rounded-b-2xl bg-[#ecffa2] text-center">
            <img
               src={data.logo ? data.logo : gmailImg}
               alt="Logo"
               className="w-32 bg-white px-2 -mt-20 mx-auto z-50"
            />

            <Link to={`/${category}/${data._id}`}>
               <p className="text-4xl hover:text-orange-400">{data?.organizationName || "Organizer"}</p>
            </Link>
            <div className="flex dark:text-gray-50 text-gray-600 justify-between items-center text-sm w-3/4 mx-auto ">
               <p>{data.followers > 1000 ? data.followers / 1000 + "K" : data.followers || 0} Followers</p>
               <div className="divider divider-horizontal"></div>
               <p>{data.location || "Not Updated"}</p>
               <div className="divider divider-horizontal"></div>
               <p>Rs 1,00,000 per project</p>
            </div>

            <div className="flex text-gray-600 justify-center items-center text-sm w-3/4 mx-auto ">
               <Link>
                  <img src={instagram} alt="" className="w-12" />
               </Link>
               <div className="divider divider-horizontal"></div>
               <Link>
                  <img src={linkedin} alt="" className="w-12" />
               </Link>
               <div className="divider divider-horizontal"></div>
               <Link>
                  <img src={twitter} alt="" className="w-12" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OrganizerSearchCard;

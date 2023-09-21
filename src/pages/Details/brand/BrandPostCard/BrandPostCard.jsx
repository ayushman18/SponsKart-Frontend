import moment from "moment/moment";
import { FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { Link } from "react-router-dom";

const BrandPostCard = ({ data }) => {
   // console.log(data);
   return (
      <>
         <div
            className="max-w-[750px] flex items-center p-8 rounded-lg my-10 custom-shadow"
            // style={{ boxShadow: "" }}
         >
            <div className="w-2/3">
               <p className="text-gray-600 text-sm">
                  {data?.payType === "pay" ? "Pay For the product" : "Giveaway a Product"}
               </p>
               <h2 className="text-lg font-semibold">
                  {data?.postfor === "creator" ? "Post For Creators" : "Post For Organizers"}
               </h2>
               {data.pricing && <p className="text-gray-600 text-sm mb-4">Price: {data.pricing} Rupi</p>}
               <p className="text-gray-700">{data.describe?.slice(0, 300) + "..."}</p>
               <div className="flex gap-4 my-2 items-center flex-wrap">
                  <p className="text-sm text-gray-600">Categories:</p>
                  {data.categories?.map((category, index) => (
                     <div
                        className="px-2 rounded-full border border-gray-400 text-center text-sm uppercase"
                        key={index}
                     >
                        {category}
                     </div>
                  ))}
               </div>
               <div className="flex gap-4 my-2 items-center flex-wrap">
                  <p className="text-sm text-gray-600">Platforms:</p>
                  {data.platform?.map((platform, index) => (
                     <div
                        key={index}
                        className="px-2 uppercase rounded-full border border-green-500 text-green-500 text-center text-sm"
                     >
                        {platform}
                     </div>
                  ))}
               </div>
            </div>
            <div className="divider divider-horizontal before:bg-gray-400 after:bg-gray-400"></div>
            <div>
               <h3 className="text-lg text-red-500">
                  {data?.postfor === "creator" ? "Creators" : "Organizer"} Need
               </h3>
               <p className="flex gap-2 items-center my-3">
                  <FaClock className="text-xl text-orange-400"></FaClock> {moment(data.date).fromNow()}
               </p>
               <p className="flex gap-2 items-center my-3">
                  <FaMapMarkerAlt className="text-xl text-blue-500"></FaMapMarkerAlt>{" "}
                  <span>{data.chooseLocation}</span>
               </p>
               <p className="flex gap-2 items-center my-3">
                  <FaUsers className="text-xl text-purple-500"></FaUsers>{" "}
                  <span>{data.miniFollower} Followers</span>
               </p>
               <p className="flex gap-2 items-center my-3">
                  <BiMaleFemale className="text-xl text-red-500"></BiMaleFemale>{" "}
                  <span>{data.targetAudience} Audience</span>
               </p>

               <Link to={`/post/brand/${data?._id}`}>
                  <button className="btn btn-success rounded-full btn-sm text-white hover:text-black">
                     View Post
                  </button>
               </Link>
            </div>
         </div>
      </>
   );
};

export default BrandPostCard;

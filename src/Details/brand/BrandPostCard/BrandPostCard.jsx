import moment from "moment/moment";
import { FaClock, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { FcClock } from "react-icons/fc";

const BrandPostCard = ({ data }) => {
   return (
      <>
         <div
            className="max-w-[750px] flex items-center p-8 rounded-lg my-10 custom-shadow"
            // style={{ boxShadow: "" }}
         >
            <div className="w-3/4">
               <p className="text-gray-600 text-sm">
                  {data?.method === "pay" ? "Pay For the product" : "Giveaway a Product"}
               </p>
               <h2 className="text-lg font-semibold">
                  {data?.postFor === "creator" ? "Post For Creators" : "Post For Organizers"}
               </h2>
               <p className="text-gray-700">
                  {/* {data.descriptions.slice(0,40)+"..."} */}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum atque deserunt quaerat maxime
                  illum quae explicabo aliquam dolore necessitatibus quisquam ratione quam debitis vero, animi
                  esse, at voluptates. Cumque, dolorum.
               </p>
               <div className="flex gap-4 my-2 items-center flex-wrap">
                  <p className="text-sm text-gray-600">Categories:</p>
                  <div className="w-20 rounded-full border border-gray-400 text-center text-sm">Clothing</div>
                  <div className="w-20 rounded-full border border-gray-400 text-center text-sm">
                     Lifestyle
                  </div>
                  <div className="w-20 rounded-full border border-gray-400 text-center text-sm">Others</div>
               </div>
               <div className="flex gap-4 my-2 items-center flex-wrap">
                  <p className="text-sm text-gray-600">Platforms:</p>
                  <div className="w-20 rounded-full border border-green-500 text-green-500 text-center text-sm">
                     Facebook
                  </div>
                  <div className="w-20 rounded-full border border-green-500 text-green-500 text-center text-sm">
                     Youtube
                  </div>
                  <div className="w-20 rounded-full border border-green-500 text-green-500 text-center text-sm">
                     Others
                  </div>
               </div>
            </div>
            <div className="divider divider-horizontal before:bg-gray-400 after:bg-gray-400"></div>
            <div>
               <h3 className="text-lg text-red-500">
                  {data?.postFor === "creator" ? "Creators" : "Organizer"} Need
               </h3>
               <p className="flex gap-2 items-center my-3">
                  <FaClock className="text-xl text-orange-400"></FaClock>{" "}
                  {moment("20230620", "YYYYMMDD").fromNow()}
               </p>
               <p className="flex gap-2 items-center my-3">
                  <FaMapMarkerAlt className="text-xl text-blue-500"></FaMapMarkerAlt> <span>Location</span>
               </p>
               <p className="flex gap-2 items-center my-3">
                  <FaUsers className="text-xl text-purple-500"></FaUsers> <span>20K Followers</span>
               </p>
               <p className="flex gap-2 items-center my-3">
                  <BiMaleFemale className="text-xl text-red-500"></BiMaleFemale> <span>Any Audience</span>
               </p>

               <Link to={`/post/brand/${data?._id || "id"}`}>
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

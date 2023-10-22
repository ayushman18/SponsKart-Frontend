import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BrandSearchCard = ({ data }) => {
   // console.log(`https://sponskart-server.vercel.app/+${data?.backgroundImage}`);
   return (
      <div className="card max-w-[420px] z-0 hover:shadow-2xl bg-base-100 rounded-2xl shadow-lg">
         <figure>
            <img
               src={data?.backgroundImage?.url}
               alt={data?.brandName}
               className="h-32 object-center object-cover w-full"
            />
         </figure>
         <div className="card-body relative rounded-b-2xl bg-[#B9DE6A] text-white text-center">
            <div className="-mt-24">
               {data?.logo ? (
                  <div className="avatar relative">
                     <div
                        className={`w-4 h-4 rounded-full ${
                           data.status === "online" ? "bg-green-500" : "bg-yellow-500"
                        }  absolute -right-1 -top-1`}
                     ></div>
                     <div className="w-24 border-0 rounded-xl">
                        <img src={data.logo?.url} alt="logo" />
                     </div>
                  </div>
               ) : (
                  <div className="relative w-full h-24">
                     <FaUser className="text-8xl  bg-white text-black px-2 mx-auto z-50"></FaUser>
                     <div className={`w-4 h-4 rounded-full bg-yellow-500 absolute -right-1 -top-1`}></div>
                  </div>
               )}
            </div>

            <div className="flex justify-center items-center gap-4 mx-auto">
               <p>{data?.username}</p>
            </div>
            <Link to={`/brand/${data?._id}`}>
               <h2 className="text-4xl hover:text-orange-400">{data?.brandName}</h2>
            </Link>
            <div className="text-black flex gap-4 items-center mt-5 mx-auto">
               <Link to={`/brand/${data?._id}`} className=" hover:text-white">
                  View
               </Link>
               <div className="h-6 w-[2px] bg-gray-500"></div>{" "}
               <Link className=" hover:text-white">Follow</Link>
            </div>
         </div>
      </div>
   );
};

export default BrandSearchCard;

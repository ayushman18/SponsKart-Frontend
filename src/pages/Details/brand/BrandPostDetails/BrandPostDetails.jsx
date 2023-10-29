import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import BrandSearchCard from "../../../search/BrandSearchCard/BrandSearchCard";
import Loading from "../../../../components/Loading/Loading";
import { useState } from "react";
import SendProposal from "./SendProposal/SendProposal";
import moment from "moment";
import useAuth from "../../../../hooks/useAuth";
import { useEffect } from "react";

const BrandPostDetails = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const [brand, setBrand] = useState({});
   const [isPoster, setIsPoster] = useState(false);
   const [isCreator] = useState(user?.user.type === "creator");
   const [loading, setLoading] = useState(true);
   const { data, isLoading } = useQuery({
      queryKey: ["post", id],
      queryFn: async () => {
         const res = await axios.get(`https://sponskart-server.onrender.com/brand/post?postId=${id}`);
         console.log(res);
         return res.data.data;
      },
   });
   console.log(data);
   useEffect(() => {
      if (data?.brandId) {
         axios
            .get(`https://sponskart-server.onrender.com/brand/get/${data.brandId}`)
            .then((response) => {
               setBrand(response.data.data);
               setIsPoster(data.brandId === user.user.brand);
               setLoading(false);
            })
            .catch((err) => console.log(err));
      }
   }, [data, user]);
   if (isLoading || loading) {
      return <Loading></Loading>;
   }
   return (
      <div className="mx-auto container">
         <div className="bg-gray-300 p-5 flex justify-between items-center">
            <div>
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white">
                     <img src={brand?.logo?.url} alt="" className="object-cover w-12 h-12" />
                  </div>
                  <div>
                     <p>About Us</p>
                     <h2 className="text-2xl">{brand?.brandName}</h2>
                  </div>
               </div>
               <div className="flex flex-wrap">
                  <p>Sponsor: {data?.payType === "pay" ? "Pay For the product" : "Giveaway a Product"}</p>{" "}
                  <div className="divider-horizontal divider"></div>
                  <p>Posted: {moment(data.date).format("DD/MMM/YYYY")}</p>{" "}
                  <div className="divider-horizontal divider"></div>
                  <p>Venue: {data.chooseLocation}</p>
               </div>
            </div>
            <div>
               {isCreator && (
                  <button
                     onClick={() => document.getElementById("my_modal_1").showModal()}
                     className="btn btn-success"
                  >
                     Send Proposal
                  </button>
               )}
               {isPoster ? (
                  <Link to={`/view-proposal/${id}`} state={data.brandId}>
                     <button onClick={() => console.log("clicking")} className="btn btn-warning ml-6">
                        View Proposal
                     </button>
                  </Link>
               ) : (
                  <></>
               )}
            </div>
         </div>
         <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
               <div className="flex flex-wrap justify-between text-center">
                  <div>
                     <div className="flex gap-4 my-2 items-center flex-wrap">
                        <p className="text-sm text-gray-600">Categories:</p>
                        {data?.categories?.map((category, index) => (
                           <div
                              className="px-2 rounded-full border border-gray-400 text-center text-sm"
                              key={index}
                           >
                              {category.label}
                           </div>
                        ))}
                     </div>
                     <div className="flex gap-4 my-2 items-center flex-wrap">
                        <p className="text-sm text-gray-600">Platforms:</p>
                        {data?.platform?.map((platform, index) => (
                           <div
                              key={index}
                              className="px-2 rounded-full border border-green-500 text-green-500 text-center text-sm"
                           >
                              {platform.label}
                           </div>
                        ))}
                     </div>
                  </div>
                  <p>{data.targetAudience ? `Target Audience: ${data.targetAudience}` : ""}</p>
                  <p>Followers: {data?.miniFollower}</p>
               </div>
               <p>
                  Project detail: <br />
                  {data.describe}
               </p>
            </div>
            <div className="border">
               <div className="">
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <FaUser></FaUser>
                     <div className="divider divider-horizontal"></div>
                     <div>
                        <p className="text-2xl">30,000</p>
                        <p className="text-xs">cost</p>
                     </div>
                  </div>
                  <div className="flex gap-2 items-center border-b p-4">
                     <BrandSearchCard></BrandSearchCard>
                  </div>
               </div>
            </div>
            <SendProposal data={data} brand={brand}></SendProposal>
         </div>
      </div>
   );
};

export default BrandPostDetails;

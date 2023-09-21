import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import BrandSearchCard from "../../../search/BrandSearchCard/BrandSearchCard";
import { useEffect } from "react";

const BrandPostDetails = () => {
   const { id } = useParams();
   const { data, isLoading } = useQuery({
      queryKey: ["post"],
      queryFn: async () => {
         const res = await axios.get(`https://sponskart-hkgd.onrender.com/brand/post?postId=${id}`);
         return res.data.data;
      },
   });
   useEffect(() => {
      console.log(data);
   }, [data]);

   if (isLoading) {
      return <>loading...</>;
   }
   return (
      <div className="mx-auto container">
         <div className="bg-gray-300 p-5 flex justify-between items-center">
            <div>
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white">
                     <FaUser></FaUser>
                  </div>
                  <div>
                     <p>About Us</p>
                     <h2 className="text-2xl">SEO Consultants</h2>
                  </div>
               </div>
               <div className="flex flex-wrap">
                  <p>Sponsor: On-Site</p> <div className="divider-horizontal divider"></div>
                  <p>Duration: 3days</p> <div className="divider-horizontal divider"></div>
                  <p>Venue: Delhi</p>
               </div>
            </div>
            <div>
               <button className="btn btn-success">Send Proposal</button>
            </div>
         </div>
         <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
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
         </div>
      </div>
   );
};

export default BrandPostDetails;

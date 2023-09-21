import { Link, useLoaderData } from "react-router-dom";
// import img from "./../../../assets/search/gmail.png";
import facebook from "./../../../../assets/socialIcon/facebook.png";
import instagram from "./../../../../assets/socialIcon/instagram.png";
import linkedin from "./../../../../assets/socialIcon/linkedin.png";
import twitter from "./../../../../assets/socialIcon/twitter.png";
import { Rating } from "@smastrom/react-rating";
import BrandPostCard from "../BrandPostCard/BrandPostCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const BrandDetails = () => {
   const { data } = useLoaderData();

   const { data: posts } = useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
         const res = await axios.get(
            `https://sponskart-hkgd.onrender.com/brand/post/all?brandId=${data._id}`
         );
         // console.log(res.data.data);
         return res.data.data;
      },
   });
   useEffect(() => {
      // console.log(data);
      console.log(posts);
   }, [data, posts]);
   return (
      <section className="bg-white">
         <img
            src={`https://sponskart-hkgd.onrender.com/${data.backgroundImage}`}
            alt="Background Image"
            className="h-64 object-cover w-full mb-5 shadow-xl"
         />
         <div className="container mx-auto grid lg:grid-cols-3 gap-6">
            <div className="order-2 lg:order-1">
               <div className="text-center hidden lg:block py-8 border-b border-[#5252526E]">
                  <img
                     src={`https://sponskart-hkgd.onrender.com/${data.logo}`}
                     alt={data.brandName}
                     className="w-32 bg-gray-300 px-2 mx-auto"
                  />
                  <div className="flex justify-center items-center gap-4 mx-auto">{data.HolderName}</div>
                  <p className="text-4xl">{data.brandName}</p>
               </div>
               {/* <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Company Followers </p>
                  <div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                     <div className="flex gap-4 items-center mb-16">
                        <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                        <p>company name</p>
                     </div>
                  </div>
               </div> */}
               <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Follow Our Company at: </p>
                  <div>
                     {data.facebook && (
                        <Link to={data?.facebook}>
                           <div className="flex gap-4 items-center mb-6">
                              <img src={facebook} alt="" className="w-14 h-14" />
                              <p className="text-lg">Facebook Profile</p>
                           </div>
                        </Link>
                     )}
                     {data.twitter && (
                        <Link to={data?.twitter || ""}>
                           <div className="flex gap-4 items-center mb-6">
                              <img src={twitter} alt="" className="w-14 h-14" />
                              <p className="text-lg">Twitter Profile</p>
                           </div>
                        </Link>
                     )}
                     {data.linkedin && (
                        <Link to={data?.linkedin || ""}>
                           <div className="flex gap-4 items-center mb-6">
                              <img src={linkedin} alt="" className="w-14 h-14" />
                              <p className="text-lg">Linkedin Profile</p>
                           </div>
                        </Link>
                     )}

                     {data.instagram && (
                        <Link to={data?.instagram || ""}>
                           <div className="flex gap-4 items-center mb-6">
                              <img src={instagram} alt="" className="w-14 h-14" />
                              <p className="text-lg">Instagram Profile</p>
                           </div>
                        </Link>
                     )}
                  </div>
                  <div className="text-center">
                     <Rating style={{ maxWidth: 120 }} value={3} readOnly className="mx-auto" />
                     <p className="text-xl mt-6">Rate Us</p>
                  </div>
               </div>
               <div className="py-8 border-b border-[#5252526E]">
                  <p className="text-xl text-center my-8">Report Employer </p>
                  <select className="select font-thin select-bordered w-full h-20 text-xl" name="category">
                     <option value="brand" selected disabled>
                        Select reason
                     </option>
                     <option value="brand">Brands</option>
                     <option value="Organizer">Event-Organization</option>
                     <option value="user">Content-Creator</option>
                  </select>
                  <textarea
                     placeholder="Description"
                     className="textarea rounded-none textarea-bordered bg-gray-100 h-96 textarea-lg w-full mt-6"
                  ></textarea>
               </div>
            </div>
            <div className="col-span-2 order-1 lg:order-2">
               <div className="text-xl mt-9">
                  <p>About “{data.brandName}”</p>
                  <p>{data.shortDescription || ""}</p>
                  <p>{data.longDescriptions || "User didn't update his profile yet."}</p>
               </div>
               <div>
                  {posts?.map((post) => (
                     <BrandPostCard key={post._id} data={post}></BrandPostCard>
                  ))}
               </div>

               {/* todo:make dynamic */}
            </div>
         </div>
      </section>
   );
};

export default BrandDetails;

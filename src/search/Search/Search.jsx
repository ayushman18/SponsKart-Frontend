import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ContentCreatorSearchCard from "../ContentCreatorSearchCard/ContentCreatorSearchCard";
import BrandSearchCard from "../BrandSearchCard/BrandSearchCard";
import CreatorFilter from "../Filters/CreatorFilter";
import OrganizerSearchCard from "../OrganizerSearchCard/OrganizerSearchCard";
import OrganizerFilter from "../Filters/OrganizerFilter";

const Search = () => {
   const [searchParams] = useSearchParams();
   const text = searchParams.get("text");
   const category = searchParams.get("category");
   const [loading, setLoading] = useState(true);
   const [result, setResult] = useState([]);
   useEffect(() => {
      axios
         .get(`https://sponskart-hkgd.onrender.com/search?type=${category}&search=${text}`)
         .then((res) => {
            console.log(res.data.data);
            setLoading(false);
            setResult(res.data.data);
         })
         .catch((err) => {
            console.log(err);
            setLoading(false);
            toast.error("Please refresh we are having an issue.");
         });
   }, [category, text]);

   if (loading) {
      return (
         <>
            <div className="h-screen flex justify-center items-center">
               <div>
                  <span className="loading loading-spinner text-primary"></span>
                  <span className="loading loading-spinner text-secondary"></span>
                  <span className="loading loading-spinner text-accent"></span>
                  <span className="loading loading-spinner text-neutral"></span>
                  <span className="loading loading-spinner text-info"></span>
                  <span className="loading loading-spinner text-success"></span>
                  <span className="loading loading-spinner text-warning"></span>
                  <span className="loading loading-spinner text-error"></span>
               </div>
            </div>
         </>
      );
   }

   return (
      <section>
         <div className="container mx-auto grid grid-cols-4 gap-24 my-10 ">
            {category === "user" ? (
               <CreatorFilter></CreatorFilter>
            ) : category === "Organizer" ? (
               <OrganizerFilter></OrganizerFilter>
            ) : (
               <CreatorFilter></CreatorFilter>
            )}
            <div className="col-span-3">
               <button className="btn rounded-full normal-case">Sort A-Z</button>

               <div className="my-12 grid grid-cols-2 gap-8 justify-around items-center">
                  {result.map((data) => (
                     <div key={data._id}>
                        {category === "user" ? (
                           <ContentCreatorSearchCard
                              category={category}
                              data={data}
                           ></ContentCreatorSearchCard>
                        ) : category === "Organizer" ? (
                           <OrganizerSearchCard category={category} data={data}></OrganizerSearchCard>
                        ) : (
                           <BrandSearchCard category={category} data={data}></BrandSearchCard>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Search;

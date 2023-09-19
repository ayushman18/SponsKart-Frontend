import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ContentCreatorSearchCard from "../ContentCreatorSearchCard/ContentCreatorSearchCard";
import BrandSearchCard from "../BrandSearchCard/BrandSearchCard";
import CreatorFilter from "../Filters/CreatorFilter";
import OrganizerSearchCard from "../OrganizerSearchCard/OrganizerSearchCard";
import OrganizerFilter from "../Filters/OrganizerFilter";
import BrandFilter from "../Filters/BrandFilter";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
   const [searchParams] = useSearchParams();
   const text = searchParams.get("text");
   const category = searchParams.get("category");
   const { data: result, isLoading } = useQuery({
      queryKey: ["data"],
      queryFn: async () => {
         const res = await axios.get(`https://sponskart-hkgd.onrender.com/${category}/getall`);
         return res.data.data;
      },
   });

   const handelFilterSearch = (filter) => {
      // console.log(JSON.stringify(filter));
      axios
         .get(
            `https://sponskart-hkgd.onrender.com/search?type=${category}&search=${text}&filter=${JSON.stringify(
               filter
            )}`
         )
         .then((res) => {
            console.log(res.data.data);
            // setResult(res.data.data);
         })
         .catch((err) => {
            console.log(err);

            toast.error("Please refresh we are having an issue.");
         });
   };

   if (isLoading) {
      return (
         <>
            <div className="h-screen flex justify-center items-center">
               <div>
                  <span className="loading loading-spinner text-error"></span>
               </div>
            </div>
         </>
      );
   }

   return (
      <section className="bg-white">
         <div className="container mx-auto px-10 grid lg:grid-cols-4 md:gap-24 py-10 ">
            {category === "creator" ? (
               <CreatorFilter handelFilterSearch={handelFilterSearch}></CreatorFilter>
            ) : category === "organizer" ? (
               <OrganizerFilter handelFilterSearch={handelFilterSearch}></OrganizerFilter>
            ) : (
               <BrandFilter handelFilterSearch={handelFilterSearch}></BrandFilter>
            )}
            <div className="md:col-span-3">
               <button className="btn rounded-full normal-case">Sort A-Z</button>

               <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mx-4 lg:mx-0 md:justify-around items-center">
                  {result?.length ? (
                     result.map((data) => (
                        <div key={data._id}>
                           {category === "creator" ? (
                              <ContentCreatorSearchCard
                                 category={category}
                                 data={data}
                              ></ContentCreatorSearchCard>
                           ) : category === "organizer" ? (
                              <OrganizerSearchCard category={category} data={data}></OrganizerSearchCard>
                           ) : (
                              <BrandSearchCard category={category} data={data}></BrandSearchCard>
                           )}
                        </div>
                     ))
                  ) : (
                     <h2 className="text-2xl">No data found</h2>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Search;

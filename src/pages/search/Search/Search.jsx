import { useSearchParams } from "react-router-dom";

import { toast } from "react-toastify";
import ContentCreatorSearchCard from "../ContentCreatorSearchCard/ContentCreatorSearchCard";
import BrandSearchCard from "../BrandSearchCard/BrandSearchCard";
import CreatorFilter from "../Filters/CreatorFilter";
import OrganizerSearchCard from "../OrganizerSearchCard/OrganizerSearchCard";
import OrganizerFilter from "../Filters/OrganizerFilter";
import BrandFilter from "../Filters/BrandFilter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import SearchPageTitle from "../SearchPageTitle/SearchPageTitle";
import { api } from "../../../api/apiInstance";

const Search = () => {
   const [searchParams] = useSearchParams();
   const text = searchParams.get("text");
   const category = searchParams.get("category");
   const { data: result, isLoading } = useQuery({
      queryKey: ["data"],
      queryFn: async () => {
         const res = await api.get(`${category}/getall?text=${text}`);
         return res.data.data;
      },
   });

   const handelFilterSearch = (filter) => {
      console.log(filter);
      // console.log(JSON.stringify(filter));
      // api
      //    .get(
      //       `search?type=${category}&search=${text}&filter=${JSON.stringify(
      //          filter
      //       )}`
      //    )
      //    .then((res) => {
      //       console.log(res.data.data);
      //       // setResult(res.data.data);
      //    })
      //    .catch((err) => {
      //       console.log(err);

      //       toast.error("Please refresh we are having an issue.");
      //    });
   };

   useEffect(() => {
      console.log(result);
   }, [result]);

   if (isLoading) {
      return (
         <>
            <LoadingSpinner></LoadingSpinner>
         </>
      );
   }

   return (
      <section className="bg-white">
         <SearchPageTitle category={category}></SearchPageTitle>
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

               <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mx-4 lg:mx-0 md:justify-between items-center">
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

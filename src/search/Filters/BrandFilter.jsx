import { useEffect } from "react";
import { useState } from "react";

const BrandFilter = ({ handelFilterSearch }) => {
   const [range, setRange] = useState(0);
   const [types, setTypes] = useState([]);
   const [genders, setGenders] = useState([]);
   const [platforms, setPlatforms] = useState([]);
   const [languages, setLanguages] = useState([]);
   const [location, setLocation] = useState("");

   const indianStates = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
   ];

   const typeAdder = (e) => {
      const type = e.target.value;
      if (e.target.checked) {
         const typesArr = [...types];
         typesArr.push(type);
         setTypes(typesArr);
      } else {
         const typesArr = [...types];
         typesArr.pop(type);
         setTypes(typesArr);
      }
   };

   const genderAdder = (e) => {
      const gender = e.target.value;
      if (e.target.checked) {
         const genderArr = [...genders];
         genderArr.push(gender);
         setGenders(genderArr);
      } else {
         const genderArr = [...genders];
         genderArr.pop(gender);
         setGenders(genderArr);
      }
   };

   const platformAdder = (e) => {
      const platform = e.target.value;
      if (e.target.checked) {
         const platformArr = [...platforms];
         platformArr.push(platform);
         setPlatforms(platformArr);
      } else {
         const platformArr = [...platforms];
         platformArr.pop(platform);
         setPlatforms(platformArr);
      }
   };

   const rangeCounter = (e) => {
      const rangeValue = parseInt(e.target.value);

      if (rangeValue === 1) {
         setRange(1000);
      } else if (rangeValue === 2) {
         setRange(10000);
      } else if (rangeValue === 3) {
         setRange(100000);
      } else if (rangeValue === 4) {
         setRange(1000000);
      }
   };

   const languageAdder = (e) => {
      const language = e.target.value;
      if (e.target.checked) {
         const languageArr = [...languages];
         languageArr.push(language);
         setLanguages(languageArr);
      } else {
         const languageArr = [...languages];
         languageArr.pop(language);
         setLanguages(languageArr);
      }
   };

   const filter = { range, types, genders, platforms, languages, location };

   useEffect(() => {
      console.log(range);
      console.log(types);
      console.log(genders);
      console.log(platforms);
      console.log(languages);
      console.log(location);
   }, [range, types, genders, platforms, languages, location]);

   return (
      <div>
         <div className="text-2xl font-semibold text-green-600 py-8">Filter Brands By</div>
         <div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Brands Type</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="fitness" />
                        <span className="label-text text-base">Fitness</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="skinCare" />
                        <span className="label-text text-base">Skin-Care</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="lifeStyle" />
                        <span className="label-text text-base">Lifestyle</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="cosmetics" />
                        <span className="label-text text-base">Cosmetics</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="education" />
                        <span className="label-text text-base">Education</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="technology" />
                        <span className="label-text text-base">Technology</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="finance" />
                        <span className="label-text text-base">Finance</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={typeAdder} defaultValue="others" />
                        <span className="label-text text-base">Others</span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Preferred Gender</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={genderAdder} defaultValue="male" />
                        <span className="label-text text-base">Male</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={genderAdder} defaultValue="female" />
                        <span className="label-text text-base">Female</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={genderAdder} defaultValue="other" />
                        <span className="label-text text-base">Other</span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Follower Limit</div>
               <div className="collapse-content">
                  <input
                     type="range"
                     onChange={rangeCounter}
                     min={1}
                     max="4"
                     className="range mt-5"
                     step="1"
                  />
                  <div className="w-full flex justify-between text-xs px-2">
                     <span>|</span>
                     <span>|</span>
                     <span>|</span>
                     <span>|</span>
                  </div>
                  <div className="w-full flex justify-between text-center text-xs px-2">
                     <span>1K</span>
                     <span>10K</span>
                     <span>100K</span>
                     <span>1000K</span>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Platform</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="facebook" />
                        <span className="label-text text-base">Facebook</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="linkedin" />
                        <span className="label-text text-base">LinkedIn</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="youtube" />
                        <span className="label-text text-base">Youtube</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="instagram" />
                        <span className="label-text text-base">Instagram</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="twitter" />
                        <span className="label-text text-base">Twitter</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={platformAdder} defaultValue="other" />
                        <span className="label-text text-base">Other</span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Language</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={languageAdder} defaultValue="hindi" />
                        <span className="label-text text-base">Hindi</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={languageAdder} defaultValue="English" />
                        <span className="label-text text-base">English</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={languageAdder} defaultValue="bangla" />
                        <span className="label-text text-base">Bangla</span>
                     </label>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Location</div>
               <div className="collapse-content">
                  <select
                     className="select select-bordered w-full max-w-xs mt-4"
                     onChange={(e) => setLocation(e.target.value)}
                  >
                     <option disabled selected>
                        Location
                     </option>
                     {indianStates.map((state, index) => (
                        <option key={index} defaultValue={state}>
                           {state}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
            <div className="w-fit mx-auto">
               <button
                  className="btn hover:bg-green-700 px-6 py-3 rounded-full bg-green-500 text-white mx-auto my-10"
                  onClick={() => handelFilterSearch(filter)}
               >
                  Apply filter
               </button>
            </div>
         </div>
      </div>
   );
};

export default BrandFilter;

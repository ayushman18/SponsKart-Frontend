import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const OrganizerFilter = ({ handelFilterSearch }) => {
   const [budget, setBudget] = useState("");
   const [types, setTypes] = useState([]);
   const [name, setName] = useState("");
   const [footfall, setFootfall] = useState("");

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

   const searchName = (e) => {
      const organizationName = e.target.value;
      setName(organizationName);
   };

   const footfallAdder = (e) => {
      const platform = e.target.value;
      if (e.target.checked) {
         const footfallArr = [...footfall];
         footfallArr.push(platform);
         setFootfall(footfallArr);
      } else {
         const footfallArr = [...footfall];
         footfallArr.pop(platform);
         setFootfall(footfallArr);
      }
   };

   const budgetCounter = (e) => {
      const rangeValue = e.target.value;
      setBudget(rangeValue);
   };

   const filter = { budget, types, name, footfall, location };

   return (
      <div>
         <div className="text-2xl mx-4 font-semibold text-green-600 py-8">Filter Event Organizer By</div>
         <div className="hidden md:block">
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Event Organizer Name</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input
                           type="text"
                           className="input input-bordered w-full max-w-xs"
                           onChange={searchName}
                           placeholder="Search Event Name"
                        />
                     </label>
                  </div>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Event Organizer Type</div>
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
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Budget</div>
               <div className="collapse-content">
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input
                        type="radio"
                        name="radio-1"
                        className="radio radio-success"
                        value={"under1k"}
                        onChange={budgetCounter}
                     />
                     <span className="label-text flex items-center text-base">Under 1K</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input
                        type="radio"
                        name="radio-1"
                        className="radio radio-success"
                        value={"1to5k"}
                        onChange={budgetCounter}
                     />
                     <span className="label-text flex items-center text-base">1K-5K</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input
                        type="radio"
                        name="radio-1"
                        className="radio radio-success"
                        value={"5to10k"}
                        onChange={budgetCounter}
                     />
                     <span className="label-text flex items-center text-base">5K-10K</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input
                        type="radio"
                        name="radio-1"
                        className="radio radio-success"
                        value={"moreThen10k"}
                        onChange={budgetCounter}
                     />
                     <span className="label-text flex items-center text-base">More then 10K</span>
                  </label>
               </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
               <input type="radio" name="my-accordion-2" />
               <div className="collapse-title bg-[#5252523D] text-xl font-medium">Avg FootFall</div>
               <div className="collapse-content">
                  <div className="form-control">
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={footfallAdder} defaultValue="under25k" />
                        <span className="label-text text-base">Under 25000</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={footfallAdder} defaultValue="25to50k" />
                        <span className="label-text text-base">25000 - 50000</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={footfallAdder} defaultValue="50to75k" />
                        <span className="label-text text-base">50000 - 75000</span>
                     </label>
                     <label className="cursor-pointer justify-start gap-4 label">
                        <input type="checkbox" onChange={footfallAdder} defaultValue="75to100k" />
                        <span className="label-text text-base">75000 - iv000</span>
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
         <div className="drawer drawer-end">
            <input id="filter-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content md:hidden mb-6 mx-6">
               <label
                  htmlFor="filter-drawer"
                  className="btn btn-ghost bg-gray-100 flex items-center justify-center drawer-button"
               >
                  Apply Filter <FaFilter></FaFilter>
               </label>
            </div>
            <div className="drawer-side my-24 z-50 ">
               <label htmlFor="filter-drawer" className="drawer-overlay"></label>
               <div className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                  <div className="md:hidden">
                     <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#5252523D] text-xl font-medium">
                           Event Organizer Name
                        </div>
                        <div className="collapse-content">
                           <div className="form-control">
                              <label className="cursor-pointer justify-start gap-4 label">
                                 <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={searchName}
                                    placeholder="Search Event Name"
                                 />
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#5252523D] text-xl font-medium">
                           Event Organizer Type
                        </div>
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
                        <div className="collapse-title bg-[#5252523D] text-xl font-medium">Budget</div>
                        <div className="collapse-content">
                           <label className="cursor-pointer justify-start gap-4 label">
                              <input
                                 type="radio"
                                 name="radio-1"
                                 className="radio radio-success"
                                 value={"under1k"}
                                 onChange={budgetCounter}
                              />
                              <span className="label-text flex items-center text-base">Under 1K</span>
                           </label>
                           <label className="cursor-pointer justify-start gap-4 label">
                              <input
                                 type="radio"
                                 name="radio-1"
                                 className="radio radio-success"
                                 value={"1to5k"}
                                 onChange={budgetCounter}
                              />
                              <span className="label-text flex items-center text-base">1K-5K</span>
                           </label>
                           <label className="cursor-pointer justify-start gap-4 label">
                              <input
                                 type="radio"
                                 name="radio-1"
                                 className="radio radio-success"
                                 value={"5to10k"}
                                 onChange={budgetCounter}
                              />
                              <span className="label-text flex items-center text-base">5K-10K</span>
                           </label>
                           <label className="cursor-pointer justify-start gap-4 label">
                              <input
                                 type="radio"
                                 name="radio-1"
                                 className="radio radio-success"
                                 value={"moreThen10k"}
                                 onChange={budgetCounter}
                              />
                              <span className="label-text flex items-center text-base">More then 10K</span>
                           </label>
                        </div>
                     </div>
                     <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title bg-[#5252523D] text-xl font-medium">Avg FootFall</div>
                        <div className="collapse-content">
                           <div className="form-control">
                              <label className="cursor-pointer justify-start gap-4 label">
                                 <input type="checkbox" onChange={footfallAdder} defaultValue="under25k" />
                                 <span className="label-text text-base">Under 25000</span>
                              </label>
                              <label className="cursor-pointer justify-start gap-4 label">
                                 <input type="checkbox" onChange={footfallAdder} defaultValue="25to50k" />
                                 <span className="label-text text-base">25000 - 50000</span>
                              </label>
                              <label className="cursor-pointer justify-start gap-4 label">
                                 <input type="checkbox" onChange={footfallAdder} defaultValue="50to75k" />
                                 <span className="label-text text-base">50000 - 75000</span>
                              </label>
                              <label className="cursor-pointer justify-start gap-4 label">
                                 <input type="checkbox" onChange={footfallAdder} defaultValue="75to100k" />
                                 <span className="label-text text-base">75000 - iv000</span>
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
            </div>
         </div>
      </div>
   );
};

export default OrganizerFilter;

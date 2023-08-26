const OrganizerFilter = () => {
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
   return (
      <div>
         <div className="text-2xl font-semibold text-green-600 py-8">Filter Event Organizer By</div>

         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Event Organizer Type</div>
            <div className="collapse-content">
               <div className="form-control">
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Fitness</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Skin-Care</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Lifestyle</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Cosmetics</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Education</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Technology</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Finance</span>
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
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Male</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Female</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Other</span>
                  </label>
               </div>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Follower Limit</div>
            <div className="collapse-content">
               <label className="cursor-pointer justify-start gap-4 label">
                  <span className="label-text text-base">1K</span>
                  <input
                     type="number"
                     min="1000"
                     max="100000"
                     onChange={(e) => {
                        console.log(e.target.value);
                     }}
                     className="input input-bordered input-success w-full"
                  />
                  <span className="label-text text-base">100K</span>
               </label>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Platform</div>
            <div className="collapse-content">
               <div className="form-control">
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Facebook</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">LinkedIn</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Youtube</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Instagram</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Twitter</span>
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
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Hindi</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">English</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                     <input type="checkbox" className="checkbox checkbox-sm" />
                     <span className="label-text text-base">Bangla</span>
                  </label>
               </div>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Location</div>
            <div className="collapse-content">
               <select className="select select-bordered w-full max-w-xs mt-4">
                  <option disabled selected>
                     Location
                  </option>
                  {indianStates.map((state, index) => (
                     <option key={index}>{state}</option>
                  ))}
               </select>
            </div>
         </div>
         <div className="w-fit mx-auto">
            <button className="px-6 py-3 rounded-full bg-green-500 text-white mx-auto my-10">
               Apply filter
            </button>
         </div>
      </div>
   );
};

export default OrganizerFilter;

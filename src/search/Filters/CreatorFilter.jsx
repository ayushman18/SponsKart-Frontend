const CreatorFilter = () => {
   return (
      <div>
         <div className="text-2xl font-semibold text-green-600 py-8">Filter Content Creator By</div>

         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Content Creator Type</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Hourly Rate</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Experience</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Specialization</div>
            <div className="collapse-content">
               <p>hello</p>
            </div>
         </div>
         <div className="collapse collapse-arrow rounded-none border-b border-[#5252526E]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title bg-[#5252523D] text-xl font-medium">Skills</div>
            <div className="collapse-content">
               <p>hello</p>
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

export default CreatorFilter;

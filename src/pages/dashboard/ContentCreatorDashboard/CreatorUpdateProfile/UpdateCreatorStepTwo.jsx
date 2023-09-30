import Select from "react-select";

const UpdateCreatorStepTwo = ({ register, selectedBudget, setSelectedBudget }) => {
   const budgetOptions = [
      { value: "under1k", label: "Under 1K" },
      { value: "1to5k", label: "1K-5K" },
      { value: "5to10k", label: "5K-10K" },
      { value: "moreThen10k", label: "More Then 10K" },
      { value: "any", label: "Any" },
   ];

   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center">
         <div>
            <input
               type="text"
               placeholder="Facebook Profile"
               className="input input-bordered w-full min-w-[300px] input-style px-4 py-8 mb-5"
               {...register("facebook")}
            />
            <div className="flex gap-2 items-center justify-between">
               <p>Facebook Followers:</p>
               <input
                  type="text"
                  placeholder="Followers"
                  className="input input-bordered max-w-[300px] input-style px-4 py-8"
                  {...register("facebookFollowers")}
               />
            </div>
         </div>
         <div>
            <input
               type="text"
               placeholder="Instagram Profile"
               className="input input-bordered min-w-[300px] w-full input-style px-4 py-8 mb-5"
               {...register("instagram")}
            />{" "}
            <div className="flex gap-2 items-center justify-between">
               <p>Instagram Followers:</p>
               <input
                  type="text"
                  placeholder="Followers"
                  className="input input-bordered max-w-[300px] input-style px-4 py-8"
                  {...register("instagramFollowers")}
               />
            </div>
         </div>
         <div>
            <input
               type="text"
               placeholder="Twitter Profile"
               className="input input-bordered min-w-[300px] w-full input-style px-4 py-8 mb-5"
               {...register("twitter")}
            />

            <div className="flex gap-2 items-center justify-between">
               <p>Twitter Followers:</p>
               <input
                  type="text"
                  placeholder="Followers"
                  className="input input-bordered max-w-[300px] input-style px-4 py-8"
                  {...register("twitterFollowers")}
               />
            </div>
         </div>
         <div>
            <input
               type="text"
               placeholder="LinkedIn Profile"
               className="input input-bordered min-w-[300px] w-full input-style px-4 py-8 mb-5"
               {...register("linkedin")}
            />
            <div className="flex gap-2 items-center justify-between">
               <p>LinkedIn Followers:</p>
               <input
                  type="text"
                  placeholder="Followers"
                  className="input input-bordered max-w-[300px] input-style px-4 py-8"
                  {...register("linkedinFollowers")}
               />
            </div>
         </div>
         <div>
            <input
               type="text"
               placeholder="Youtube Profile"
               className="input input-bordered min-w-[300px] w-full input-style px-4 py-8 mb-5"
               {...register("follower")}
            />
            <div className="flex gap-2 items-center justify-between">
               <p>Youtube Followers:</p>
               <input
                  type="text"
                  placeholder="Followers"
                  className="input input-bordered max-w-[300px] input-style px-4 py-8"
                  {...register("youtubeFollowers")}
               />
            </div>
         </div>
         <div>
            <input
               type="text"
               placeholder="Website Link"
               className="input input-bordered max-w-md w-full input-style px-4 py-8 mb-5"
               {...register("websiteLink")}
            />
            <Select
               className="select select-bordered lg:mb-0 max-w-md w-full input-style px-4 h-16 mb-6"
               placeholder="Select Budget Type"
               unstyled
               defaultValue={selectedBudget}
               onChange={setSelectedBudget}
               options={budgetOptions}
            />
         </div>
      </div>
   );
};

export default UpdateCreatorStepTwo;

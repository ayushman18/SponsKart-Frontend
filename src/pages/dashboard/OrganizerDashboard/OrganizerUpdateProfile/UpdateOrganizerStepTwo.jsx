import Select from "react-select";
import useAuth from "../../../../hooks/useAuth";

const UpdateOrganizerStepTwo = ({
   register,
   selectedPlatform,
   setSelectedPlatform,
   selectedBudget,
   setSelectedBudget,
   selectedFootfall,
   setSelectedFootfall,
}) => {
   const { user } = useAuth();
   const socialMediaOptions = [
      { value: "facebook", label: "Facebook" },
      { value: "linkedin", label: "LinkedIn" },
      { value: "twitter", label: "Twitter" },
      { value: "youtube", label: "Youtube" },
      { value: "instagram", label: "instagram" },
   ];
   const budgetOptions = [
      { value: "under1k", label: "Under 1K" },
      { value: "1to5k", label: "1K-5K" },
      { value: "5to10k", label: "5K-10K" },
      { value: "moreThen10k", label: "More Then 10K" },
      { value: "any", label: "Any" },
   ];
   const footfallOptions = [
      { value: "under25k", label: "Under 25K" },
      { value: "25to50k", label: "25K-50K" },
      { value: "50to75k", label: "50K-75K" },
      { value: "75to100k", label: "75K-100K" },
      { value: "any", label: "Any" },
   ];

   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
         <Select
            className="select select-bordered lg:mb-0 max-w-xs input-style px-4 h-16 mb-6"
            placeholder="Select Social platforms"
            unstyled
            defaultValue={selectedPlatform}
            onChange={setSelectedPlatform}
            options={socialMediaOptions}
            isMulti
         />
         <Select
            className="select select-bordered lg:mb-0 max-w-xs input-style px-4 h-16 mb-6"
            placeholder="Select Budget Type"
            unstyled
            defaultValue={selectedBudget}
            onChange={setSelectedBudget}
            options={budgetOptions}
         />
         <Select
            className="select select-bordered lg:mb-0 max-w-xs input-style px-4 h-16 mb-6"
            placeholder="Select Avg Footfall"
            unstyled
            defaultValue={selectedFootfall}
            onChange={setSelectedFootfall}
            options={footfallOptions}
         />

         <input
            type="text"
            placeholder="Facebook link"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("facebookLink")}
            defaultValue={user.data?.facebookLink}
         />
         <input
            type="text"
            placeholder="Twitter link"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("twitterLink")}
            defaultValue={user.data?.twitterLink}
         />

         <input
            type="text"
            placeholder="LinkedIn Profile"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("linkedinLink")}
            defaultValue={user.data?.linkedinLink}
         />
         <input
            type="text"
            placeholder="Instagram link"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("instagramLink")}
            defaultValue={user.data?.instagramLink}
         />

         <input
            type="text"
            placeholder="Youtube Profile"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("youtubeLink")}
            defaultValue={user.data?.youtubeLink}
         />
         <input
            type="text"
            placeholder="Organization Website"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("websiteLink")}
            defaultValue={user.data?.websiteLink}
         />
      </div>
   );
};

export default UpdateOrganizerStepTwo;

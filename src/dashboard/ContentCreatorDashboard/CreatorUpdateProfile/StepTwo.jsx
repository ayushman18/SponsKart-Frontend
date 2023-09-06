const StepTwo = ({ register }) => {
   return (
      <div className="grid grid-cols-2 justify-center gap-8">
         <input
            type="text"
            placeholder="Social Media Platform Name"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("Platform")}
         />
         <input
            type="text"
            placeholder="Subscribers/Followers"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("followers")}
         />
         <input
            type="text"
            placeholder="Facebook link"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("facebookLink")}
         />

         <input
            type="text"
            placeholder="LinkedIn Profile"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("linkedinLink")}
         />
         <input
            type="text"
            placeholder="Minimum Views"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("minViews")}
         />
         <input
            type="text"
            placeholder="Maximum Views"
            className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
            {...register("maxViews")}
         />
         <textarea
            type="text"
            placeholder="Short Description"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 my-5"
            rows="3"
            {...register("shortDescription")}
         />
         <textarea
            type="text"
            placeholder="Long description"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 my-5"
            rows="6"
            {...register("longDescription")}
         />
      </div>
   );
};

export default StepTwo;

const UpdateBrandStepTwo = ({ register }) => {
   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center">
         <input
            type="text"
            placeholder="Social Media Platform Name"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("Platform")}
         />
         <input
            type="text"
            placeholder="Subscribers/Followers"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("followers")}
         />
         <input
            type="text"
            placeholder="Facebook link"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("facebookLink")}
         />

         <input
            type="text"
            placeholder="LinkedIn Profile"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("linkedinLink")}
         />
         <input
            type="text"
            placeholder="Minimum Views"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("minViews")}
         />
         <input
            type="text"
            placeholder="Maximum Views"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("maxViews")}
         />
      </div>
   );
};

export default UpdateBrandStepTwo;

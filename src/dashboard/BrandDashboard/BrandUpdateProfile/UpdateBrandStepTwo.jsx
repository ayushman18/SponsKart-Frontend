const UpdateBrandStepTwo = ({ register }) => {
   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center">
         <input
            type="text"
            placeholder="Facebook Profile"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("facebook")}
         />
         <input
            type="text"
            placeholder="Instagram Profile"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("instagram")}
         />
         <input
            type="text"
            placeholder="Twitter Profile"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("twitter")}
         />
         <input
            type="text"
            placeholder="LinkedIn Profile"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("linkedin")}
         />
         <input
            type="text"
            placeholder="Subscribers/Followers"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("follower")}
         />
         <input
            type="text"
            placeholder="Website Link"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("websiteLink")}
         />
      </div>
   );
};

export default UpdateBrandStepTwo;

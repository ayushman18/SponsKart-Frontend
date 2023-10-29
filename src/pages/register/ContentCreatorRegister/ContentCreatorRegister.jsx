import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hostImage } from "../../../api/api";

const ContentCreatorRegister = () => {
   const [loading, setLoading] = useState(false);
   const location = useLocation();
   console.log(location.state);
   const navigate = useNavigate();

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

   const { register, handleSubmit } = useForm();

   const onSubmit = async (data) => {
      setLoading(true);
      data.id = location.state.creator;

      const imgUrl = await hostImage(data.logo[0]);
      data.logo = imgUrl;
      // console.log(data);

      if (imgUrl) {
         axios
            .put("https://sponskart-server.onrender.com/creator/update", data)
            .then((res) => {
               console.log("here", res.data);

               if (res.data.code === "ERR_BAD_REQUEST") {
                  setLoading(false);
                  toast.error(res.data.message);
               } else {
                  setLoading(false);
                  navigate("/");
                  window.location.reload();
               }
            })
            .catch((err) => {
               setLoading(false);
               if (err.code) {
                  toast.error(err.response.data.message);
               }
               console.log(err);
            });
      } else {
         toast.error("Something went wrong.");
      }
   };

   if (loading) {
      return (
         <div>
            <h2>Thanks for joining us. Please wait!! </h2>
            <div>
               <span className="loading loading-ring loading-sm"></span>
               <span className="loading loading-ring loading-sm"></span>
               <span className="loading loading-ring loading-sm"></span>
            </div>
         </div>
      );
   }

   return (
      <div>
         <p className="text-3xl text-green-500 font-semibold">Content Creator</p>
         <form onSubmit={handleSubmit(onSubmit)} className="my-6">
            <div className="lg:flex items-center justify-between gap-8">
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Phone Number</span>
                  </label>
                  <input
                     type="tel"
                     placeholder="Phone Number"
                     className="input input-bordered w-full max-w-xs"
                     required
                     {...register("phoneNumber")}
                  />
               </div>
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Your Gender</span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs " {...register("gender")}>
                     <option value="" disabled selected>
                        Select Gender
                     </option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                  </select>
               </div>
            </div>

            <div className="lg:flex items-center justify-between gap-8 mb-4">
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Your Location</span>
                  </label>
                  <select
                     className="select select-bordered lg:mb-0 w-full max-w-xs"
                     {...register("location")}
                  >
                     <option disabled selected>
                        Select Location
                     </option>
                     {indianStates.map((state, index) => (
                        <option key={index}>{state}</option>
                     ))}
                  </select>
               </div>
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Your Image</span>
                  </label>
                  <input
                     type="file"
                     id="file"
                     accept="image/*"
                     className="file-input file-input-bordered w-full max-w-xs"
                     {...register("logo")}
                  />
               </div>
            </div>
            <div className="flex justify-center items-center">
               <button className={`px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white`}>
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default ContentCreatorRegister;

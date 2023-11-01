import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hostImage } from "../../../api/api";
import { api } from "../../../api/apiInstance";

const BrandRegister = () => {
   const [loading, setLoading] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();

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

   const onSubmit = async (data) => {
      setLoading(true);

      data.id = location.state.brand;
      let imgUrl;
      if (data.logo[0]) {
         imgUrl = await hostImage(data.logo[0]);
         data.logo = imgUrl;
         if (!imgUrl) {
            setLoading(false);
            toast.error("Something went wrong please try again.");
            return;
         }
      }
      console.log(data);

      api.put("brand/update", data)
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
         <p className="text-3xl text-green-500 font-semibold">Join Us as A Brand</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex items-center justify-between gap-8">
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Brand Holder Name</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Brand Holder Name"
                     className="input input-bordered w-full max-w-xs"
                     required
                     {...register("brandHolder")}
                  />
               </div>
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Contact Information</span>
                  </label>
                  <input
                     type="tel"
                     placeholder="Phone Number/Telephone"
                     className="input input-bordered w-full max-w-xs"
                     required
                     {...register("phoneNumber")}
                  />
               </div>
            </div>
            <div className="lg:flex items-center justify-between gap-8 mb-4">
               <div className="form-control w-full max-w-xs">
                  <label className="label">
                     <span className="label-text">Brand Location</span>
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
                     <span className="label-text">Brand Logo</span>
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

export default BrandRegister;

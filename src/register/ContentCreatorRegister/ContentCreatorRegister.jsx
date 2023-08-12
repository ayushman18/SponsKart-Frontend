import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContentCreatorRegister = () => {
   const [agree, setAgree] = useState(false);

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

   const onSubmit = (data) => {
      if (!agree) {
         toast.error("Please agree with terms and conditions");
         return;
      }
      // data.role = "content-creator";
      console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/register", data)
         .then((res) => {
            console.log("here", res.data);
            if (res.data.message) {
               toast.error(res.data.message);
            }
         })
         .catch((err) => {
            window.alert(err);
            console.log(err);
         });
   };

   const checked = () => {
      const checkbox = document.getElementById("agree");
      setAgree(checkbox.checked);
   };

   return (
      <div>
         <p className="text-3xl text-green-500 font-semibold">Content Creator</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex items-center justify-around lg:pr-24 my-8">
               <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full mb-6 lg:mb-0 max-w-xs"
                  required
                  {...register("firstname")}
               />
               <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("lastname")}
               />
            </div>
            <div className="lg:flex items-center justify-around lg:pr-24">
               <input
                  type="text"
                  placeholder="Type Username"
                  className="input input-bordered mb-6 lg:mb-0 w-full max-w-xs"
                  required
                  {...register("username")}
               />
               <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("phonenumber")}
               />
            </div>
            <div className="lg:flex items-center justify-around lg:pr-24 mt-8">
               <input
                  type="email"
                  placeholder="Email Id"
                  className="input input-bordered mb-6 lg:mb-0 w-full max-w-xs"
                  required
                  {...register("email")}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("password")}
               />
            </div>
            <div className="lg:flex items-center justify-around lg:pr-24 my-8">
               <select
                  className="select select-bordered mb-6 lg:mb-0 w-full max-w-xs"
                  {...register("location")}
               >
                  <option disabled selected>
                     Select Location
                  </option>
                  {indianStates.map((state, index) => (
                     <option key={index}>{state}</option>
                  ))}
               </select>

               <label htmlFor="agree">
                  <input type="checkbox" name="agree" id="agree" onChange={checked} />
                  <span className="text-xl ml-4">I agree to the terms and conditions.</span>
               </label>
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

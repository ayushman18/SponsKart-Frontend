import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BrandRegister = () => {
   const [agree, setAgree] = useState(false);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      if (!agree) {
         toast.error("Please agree with terms and conditions");
         return;
      }
      setLoading(true);
      data.type = "brand";
      console.log(data);

      // axios
      //    .post("https://sponskart-hkgd.onrender.com/register", data)
      //    .then((res) => {
      //       console.log("here", res.data);
      //       setLoading(false);
      //       if (res.data.code === "ERR_BAD_REQUEST") {
      //          toast.error(res.data.message);
      //       } else if (res.data.code === 200) {
      //          navigate("/sign-in");
      //          toast.success("User registered successfully. Please login");
      //       }
      //    })
      //    .catch((err) => {
      //       setLoading(false);
      //       if (err.code) {
      //          toast.error(err.response.data.message);
      //       }
      //       console.log(err);
      //    });
   };

   const checked = () => {
      const checkbox = document.getElementById("agree");
      setAgree(checkbox.checked);
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
            <div className="lg:flex items-center justify-around lg:pr-24 my-8">
               <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full mb-6 lg:mb-0 max-w-xs"
                  required
                  {...register("brandName")}
               />
               <input
                  type="text"
                  placeholder="Brand Holder Name"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("brandHolderName")}
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

export default BrandRegister;

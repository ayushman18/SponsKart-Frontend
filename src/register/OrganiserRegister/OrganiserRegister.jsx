import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrganiserRegister = () => {
   const [agree, setAgree] = useState(false);
   const navigate = useNavigate();

   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      data.type = "Organizer";
      console.log(data);
      if (!agree) {
         toast.error("Please agree with terms and conditions");
         return;
      }
      if (data.confirm_password === data.password) {
         axios
            .post("https://sponskart-hkgd.onrender.com/register", data)
            .then((res) => {
               console.log("here", res.data);
               if (res.data.code === "ERR_BAD_REQUEST") {
                  toast.error(res.data.message);
               } else if (res.data.code === 200) {
                  navigate("/sign-in");
                  toast.success("User registered successfully. Please login");
               }
            })
            .catch((err) => {
               if (err.code) {
                  toast.error(err.response.data.message);
               }
               console.log(err);
            });
      } else {
         toast.error("Password does not matched");
      }
   };

   const checked = () => {
      const checkbox = document.getElementById("agree");
      setAgree(checkbox.checked);
   };

   return (
      <div>
         <p className="text-3xl text-green-500 font-semibold">Event Organiser</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex items-center justify-around lg:pr-24 my-8">
               <input
                  type="text"
                  placeholder="Organization Name"
                  className="input mb-6 lg:mb-0 input-bordered w-full max-w-xs"
                  required
                  {...register("organizationName")}
               />
               <input
                  type="email"
                  placeholder="Email Id"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("email")}
               />
            </div>
            <div className="lg:flex items-center justify-around lg:pr-24">
               <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered mb-6 lg:mb-0 w-full max-w-xs"
                  required
                  {...register("password")}
               />
               <input
                  type="tel"
                  placeholder="Contact No."
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("phonenumber")}
               />
            </div>
            <div className="lg:flex items-center justify-around lg:pr-24 my-8">
               <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input mb-6 lg:mb-0 input-bordered w-full max-w-xs"
                  required
                  {...register("confirm_password")}
               />
               <label htmlFor="agree">
                  <input type="checkbox" name="agree" id="agree" onChange={checked} />
                  <span className="text-xl ml-4">I agree to the terms and conditions.</span>
               </label>
            </div>
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default OrganiserRegister;

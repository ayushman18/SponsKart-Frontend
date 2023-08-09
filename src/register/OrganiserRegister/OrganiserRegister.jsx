import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrganiserRegister = () => {
   const [agree, setAgree] = useState(false);
   const navigate = useNavigate();

   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      if (!agree) {
         toast.error("Please agree with terms and conditions");
         return;
      }
      if (data.confirm_password === data.password) {
         data.role = "organiser";
         console.log(data);
         navigate("/register/verification");
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
            <div className="flex items-center justify-around pr-24 my-8">
               <input
                  type="text"
                  placeholder="Organization Name"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("organization_name")}
               />
               <input
                  type="email"
                  placeholder="Email Id"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("email")}
               />
            </div>
            <div className="flex items-center justify-around pr-24">
               <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("password")}
               />
               <input
                  type="tel"
                  placeholder="Contact No."
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("contact_no")}
               />
            </div>
            <div className="flex items-center justify-around pr-24 my-8">
               <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full max-w-xs"
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

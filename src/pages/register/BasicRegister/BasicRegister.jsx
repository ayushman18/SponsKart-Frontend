import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SocialSignUp from "../../../components/SocialSignUp/SocialSignUp";
import useAuth from "../../../hooks/useAuth";
import { api } from "../../../api/apiInstance";

const BasicRegister = () => {
   const { emailPassSignUp, updateUser } = useAuth();
   const [showPass, setShowPass] = useState(false);
   const [loading, setLoading] = useState(false);
   const location = useLocation();
   const [agree, setAgree] = useState(false);
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const navigate = useNavigate();
   const role = location.state;

   const onSubmit = (data) => {
      if (!agree) {
         toast.error("Please agree with terms and conditions");

         return;
      }
      if (data.password !== data.confirmPassword) {
         toast.error("Password does not match.");
         return;
      }
      api.post("register", {
         name: data.name,
         email: data.email,
         type: role,
      })
         .then((response) => {
            console.log(response.data.data.result);
            emailPassSignUp(data.email, data.password)
               .then((res) => {
                  console.log(res.user);
                  updateUser({ name: data.name })
                     .then(() => {
                        setLoading(false);
                        navigate(`/register/${role}`, { state: response.data.data.result });
                     })
                     .catch((err) => {
                        console.log(err);
                        toast.error("An error occurred while creating user. Please try again");
                     });
               })
               .catch((err) => {
                  console.log(err);
                  toast.error("An error occurred while creating user. Please try again");
               });
         })
         .catch((err) => {
            console.log(err);
            toast.error("An error occurred while creating user. Please try again");
         });
      setLoading(true);
   };
   const checked = () => {
      const checkbox = document.getElementById("agree");
      setAgree(checkbox.checked);
   };

   if (loading) {
      return (
         <div>
            <h2 className="text-xl">Thanks for joining us. Please wait we are creating your account!! </h2>
            <div>
               <span className="loading loading-ring loading-sm"></span>
               <span className="loading loading-ring loading-sm"></span>
               <span className="loading loading-ring loading-sm"></span>
            </div>
         </div>
      );
   }

   return (
      <div className="mx-auto lg:min-w-[50vw]">
         <h2 className="text-3xl font-semibold text-green-500 mb-6 underline">Register</h2>
         <p className="text-lg mt-4">
            Already have an account?
            <Link to="/register" className="text-green-500 link">
               Login.
            </Link>
         </p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap justify-between items-center">
               <div className="form-control w-full max-w-xs mx-auto">
                  <label className="label">
                     <span className="label-text">
                        {role === "creator"
                           ? "Your Name"
                           : role === "organizer"
                           ? "Type Organization Name"
                           : "Brand Name"}
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="Type Name"
                     className="input input-bordered w-full max-w-xs"
                     required
                     {...register("name")}
                  />
               </div>
               <div className="form-control w-full max-w-xs mx-auto">
                  <label className="label">
                     <span className="label-text">Your email</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Type Email"
                     className="input input-bordered w-full max-w-xs"
                     required
                     {...register("email")}
                  />
               </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
               <div className="form-control w-full max-w-xs mx-auto">
                  <label className="label">
                     <span className="label-text">New Password</span>
                  </label>
                  <div className="relative">
                     <input
                        type={`${showPass ? "text" : "password"}`}
                        placeholder="New Password"
                        className="input input-bordered w-full min-w-[320px]"
                        required
                        {...register("password", {
                           pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                        })}
                     />

                     <div className="absolute top-0 right-0 p-4 text-gray-500 cursor-pointer">
                        {showPass ? (
                           <FaEyeSlash onClick={() => setShowPass(!showPass)}></FaEyeSlash>
                        ) : (
                           <FaEye onClick={() => setShowPass(!showPass)}></FaEye>
                        )}
                     </div>
                  </div>
               </div>
               <div className="form-control w-full max-w-xs mx-auto">
                  <label className="label">
                     <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="relative">
                     <input
                        type={`${showPass ? "text" : "password"}`}
                        placeholder="Confirm Password"
                        className="input input-bordered w-full min-w-[320px]"
                        required
                        {...register("confirmPassword")}
                     />
                     <div className="absolute top-0 right-0 p-4 text-gray-500 cursor-pointer">
                        {showPass ? (
                           <FaEyeSlash onClick={() => setShowPass(!showPass)}></FaEyeSlash>
                        ) : (
                           <FaEye onClick={() => setShowPass(!showPass)}></FaEye>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <br />
            <div className="items-center pl-3 mb-5">
               <label htmlFor="agree">
                  <input
                     type="checkbox"
                     name="agree"
                     id="agree"
                     onChange={checked}
                     className="checkbox checkbox-success"
                  />
                  <span className="text-xl ml-4">
                     I agree to the{" "}
                     <Link to={"/terms-conditions"} className="link">
                        terms and conditions
                     </Link>
                     .
                  </span>
               </label>
            </div>
            <div className="flex justify-center items-center">
               <button className="btn px-14 py-3 rounded-3xl hover:bg-[#40942b] bg-[#36BC15] font-semibold text-white">
                  Next
               </button>
            </div>
         </form>
         <p className="hidden">
            {errors.password
               ? toast.error(
                    "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
                 )
               : ""}
         </p>

         <SocialSignUp role={role} register={true} setLoading={setLoading}></SocialSignUp>
      </div>
   );
};

export default BasicRegister;

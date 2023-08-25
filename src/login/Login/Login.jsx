import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
   const { setUser } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const [loading, setLoading] = useState(false);
   const [showPass, setShowPass] = useState(false);
   const from = location.state?.pathname || "/";
   console.log(from);
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      setLoading(true);
      console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/signin", data)
         .then((res) => {
            setLoading(false);
            console.log("here", res.data);

            if (res.data.code === 200) {
               localStorage.setItem("user", JSON.stringify(res.data.data));
               toast.success(
                  `Welcome ${
                     res.data.data.organizer
                        ? res.data.data.organizer.organizationName
                        : res.data.data.contentCreator
                        ? res.data.data.contentCreator.firstName
                        : ""
                  }`
               );
               setUser(res.data.data);
               navigate(from);
            }
         })
         .catch((err) => {
            setLoading(false);
            console.log(err);
            toast.error(`${err.response.data.message}`);
         });
   };

   if (loading) {
      return (
         <>
            <div className="flex items-end">
               <div>
                  <h2>Thank you for sign in Please wait we are verifying.</h2>
               </div>
               <div>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-sm"></span>
               </div>
            </div>
         </>
      );
   }

   return (
      <div>
         <h2 className="text-3xl font-semibold text-green-500 mb-6">Login</h2>

         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               placeholder="Type Email or Username"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("email")}
            />{" "}
            <br />
            <br />
            <div className="relative">
               <input
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  required
                  {...register("password")}
               />
               <div className="form-control w-fit">
                  <label className="cursor-pointer label gap-2">
                     <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                        onChange={() => setShowPass(!showPass)}
                     />
                     <span className="label-text">Show Password</span>
                  </label>
               </div>
            </div>
            <br />
            <div className="flex gap-16 items-center">
               <Link to="forget-password" className="text-green-500 font-semibold text-lg">
                  Forget Password?
               </Link>
               <p className="text-lg">
                  New here?{" "}
                  <Link to="/register" className="text-green-500 underline">
                     Join Us.
                  </Link>
               </p>
            </div>
            <div className="flex justify-center items-center">
               <button className="btn px-14 py-3 rounded-3xl hover:bg-[#40942b] bg-[#36BC15] font-semibold text-white">
                  Next
               </button>
            </div>
         </form>
      </div>
   );
};

export default Login;

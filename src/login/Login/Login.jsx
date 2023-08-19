import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../home/provider/AuthProvider/AuthProvider";

const Login = () => {
   const { setUser, user } = useContext(AuthContext);
   const navigate = useNavigate();
   console.log(user);
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/signin", data)
         .then((res) => {
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
               navigate("/");
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return (
      <div>
         <h2 className="text-3xl font-semibold text-green-500 mb-6">Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               placeholder="Type Email"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("email")}
            />{" "}
            <br />
            <br />
            <input
               type="password"
               placeholder="Your Password"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("password")}
            />
            <br /> <br />
            <Link to="forget-password" className="text-green-500 font-semibold text-lg">
               Forget Password?
            </Link>
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">Next</button>
            </div>
         </form>
      </div>
   );
};

export default Login;

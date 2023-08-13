import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/signin", data)
         .then((res) => {
            console.log("here", res.data);
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

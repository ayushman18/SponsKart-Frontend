import axios from "axios";
import { useForm } from "react-hook-form";

const ForgetPass = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      // console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/forgot", data)
         .then((res) => console.log(res.data))
         .catch((err) => console.log(err));
   };
   return (
      <div>
         <h2 className="text-3xl font-semibold text-green-500 mb-6">Forget Password</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="email"
               placeholder="Enter Your Email"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("email")}
            />{" "}
            <br /> <br />
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">Next</button>
            </div>
         </form>
      </div>
   );
};

export default ForgetPass;

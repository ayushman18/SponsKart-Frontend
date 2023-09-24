import axios from "axios";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const ResetPass = () => {
   const { register, handleSubmit } = useForm();
   const [searchParams] = useSearchParams();
   const token = searchParams.get("token");
   const onSubmit = (data) => {
      const password = data.confirm_password;
      axios
         .post(`https://sponskart-hkgd.onrender.com/resetpassword?token=${token}`, password)
         .then((res) => console.log(res.data))
         .catch((err) => console.log(err));
      console.log(data);
   };
   return (
      <div>
         <h2 className="text-3xl font-semibold text-green-500 mb-6">Reset Password</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="password"
               placeholder="New Password"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("new_password")}
            />{" "}
            <br />
            <br />
            <input
               type="password"
               placeholder="Confirm Password"
               className="input input-bordered w-full max-w-xs"
               required
               {...register("confirm_password")}
            />
            <br /> <br />
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">Next</button>
            </div>
         </form>
      </div>
   );
};

export default ResetPass;

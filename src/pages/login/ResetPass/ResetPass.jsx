import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../../../api/apiInstance";

const ResetPass = () => {
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const [searchParams] = useSearchParams();
   const token = searchParams.get("token");
   const onSubmit = (data) => {
      setError("");

      if (data.confirm_password !== data.new_password) {
         setError("Password dose not match.");
         return;
      }

      const password = data.confirm_password;
      api.post(`resetpassword?token=${token}`, { password })
         .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
               Swal.fire("Reset Success!", `Your password has been reset successfully.`, "success");
            }
            navigate("/sign-in");
         })
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
            {error && <p className="text-red-500">{error}</p>}
            <br /> <br />
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">Next</button>
            </div>
         </form>
      </div>
   );
};

export default ResetPass;

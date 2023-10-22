import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const ForgetPass = () => {
   const { resetPassword } = useAuth();
   const { register, handleSubmit } = useForm();
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const onSubmit = (data) => {
      console.log(data);
      setError("");
      Swal.fire({
         title: "Do you want to reset Password?",

         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, I do!",
      }).then((result) => {
         if (result.isConfirmed) {
            resetPassword(data.email)
               .then(() => {
                  navigate("/sign-in");
                  Swal.fire(
                     "Sent Reset Mail!",
                     `Please check your ${data.email} inbox or spam box for reset mail.`,
                     "success"
                  );
               })
               .catch((err) => {
                  console.log(err);
               });
         }
      });
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
            {error && <p className="text-red-500">{error}</p>}
            <br /> <br />
            <div className="flex justify-center items-center">
               <button className="px-14 py-3 rounded-3xl bg-[#36BC15] font-semibold text-white">Next</button>
            </div>
         </form>
      </div>
   );
};

export default ForgetPass;

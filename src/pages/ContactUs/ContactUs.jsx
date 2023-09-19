import { useForm } from "react-hook-form";
import background from "./../../assets/register/background.png";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
   const { register, handleSubmit, reset } = useForm();

   const formData = (data) => {
      // console.log(data);
      axios
         .post("https://sponskart-hkgd.onrender.com/contactUs", data)
         .then((res) => {
            console.log(res);
            reset();
         })
         .catch((err) => {
            console.log(err);
            toast.error(`${err.response.data.message}`);
         });
   };

   return (
      <div className="min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url('${background}')` }}>
         <div className="min-h-screen bg-opacity-50 flex justify-center items-center bg-black">
            <div className="lg:w-3/4 bg-white py-11 rounded-3xl lg:pl-20 px-14 relative">
               <img src="./logo.png" alt="" className="w-72 mx-auto" />

               <p className="text-2xl font-semibold md:px-16 text-green-500">Having Issues? Contact Us.</p>

               <div className="lg:px-16">
                  <form onSubmit={handleSubmit(formData)}>
                     <div className="flex flex-col md:flex-row gap-6 lg:gap-10 justify-between items-center my-6">
                        <input
                           type="text"
                           placeholder="Type Your Name"
                           className="input input-bordered w-full"
                           required
                           {...register("name")}
                        />
                        <input
                           type="email"
                           placeholder="Type Your Email"
                           className="input input-bordered w-full"
                           required
                           {...register("email")}
                        />
                     </div>
                     <div className="flex flex-col md:flex-row gap-6 justify-between items-center my-6 lg:gap-10">
                        <input
                           type="text"
                           placeholder="Type Your Number"
                           className="input input-bordered w-full"
                           required
                           {...register("number")}
                        />
                        <input
                           type="text"
                           placeholder="Why you want to Contact Us"
                           className="input input-bordered w-full"
                           required
                           {...register("reason")}
                        />
                     </div>
                     <textarea
                        type="text"
                        placeholder="Write your message in details"
                        className="textarea textarea-bordered textarea-lg w-full p-4 mb-5"
                        required
                        {...register("message")}
                     />
                     <div className="flex justify-center items-center">
                        <button className="btn btn-success text-white hover:bg-green-700" type="submit">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;

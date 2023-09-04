import { FaUpload } from "react-icons/fa";
import "./CreatorUpdateProfile.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const CreatorUpdateProfile = () => {
   const { user } = useAuth();
   console.log(user.phonenumber);
   const indianStates = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
   ];

   useEffect(() => {
      var inputs = document.querySelectorAll(".inputFile");
      var inputs2 = document.querySelectorAll(".inputFile2");
      inputs.forEach((input) => {
         {
            var label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               var fileName = "";
               console.log(this.files);
               if (this.files && this.files.length > 1) {
                  fileName = (this.getAttribute("data-multiple-caption") || "").replace(
                     "{count}",
                     this.files.length
                  );
               } else {
                  fileName = e.target.value.split("\\").pop();
               }

               if (fileName) label.querySelector("span").innerHTML = fileName;
               else label.innerHTML = labelVal;
            });
         }
      });
      inputs2.forEach((input) => {
         {
            var label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               var fileName = "";

               if (this.files && this.files.length > 1) {
                  fileName = (this.getAttribute("data-multiple-caption") || "").replace(
                     "{count}",
                     this.files.length
                  );
               } else {
                  fileName = e.target.value.split("\\").pop();
               }

               if (fileName) label.querySelector("span").innerHTML = fileName;
               else label.innerHTML = labelVal;
            });
         }
      });
   }, []);
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="grid grid-cols-3 gap-8">
            <div>
               <input
                  type="text"
                  placeholder="Update First Name"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
                  {...register("firstname")}
                  defaultValue={user.firstname}
               />
               <input
                  type="text"
                  placeholder="Update Last Name"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
                  {...register("lastname")}
                  defaultValue={user.lastname}
               />
               <input
                  type="text"
                  placeholder="Update Username"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
                  {...register("username")}
                  defaultValue={user.username}
               />
               <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
                  {...register("email")}
                  defaultValue={user.email}
                  readOnly
               />
               <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
                  {...register("phonenumber")}
                  defaultValue={user.phonenumber}
               />
               <select
                  className="select select-bordered lg:mb-0 w-full max-w-xs px-4 h-16 mb-6 input-style"
                  {...register("location")}
               >
                  {indianStates.map((state, index) => (
                     <option key={index} selected={state === user.location}>
                        {state}
                     </option>
                  ))}
               </select>

               <input
                  type="text"
                  placeholder="Social Media Platform Name"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 my-5"
               />
               <input
                  type="text"
                  placeholder="Subscribers/Followers"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Social media link"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
            </div>
            <div>
               <input
                  type="text"
                  placeholder="LinkedIn Profile"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Minimum Views"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Maximum Views"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <textarea
                  type="text"
                  placeholder="Short Description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <textarea
                  type="text"
                  placeholder="Long description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 mb-5"
                  rows="6"
               />
            </div>
            <div>
               <input type="file" name="file" id="file" className="inputFile" multiple />
               <label htmlFor="file">
                  Upload Logo{" "}
                  <span>
                     <FaUpload></FaUpload>
                  </span>
               </label>
               <input type="file" name="file" id="file2" className="inputFile2" />
               <label htmlFor="file2">
                  Upload Background Picture{" "}
                  <span>
                     <FaUpload></FaUpload>
                  </span>
               </label>
               <button type="submit" className="py-3 px-6 bg-[#94E331E3] rounded-lg text-white mt-4">
                  Save Profile
               </button>
            </div>
         </div>
      </form>
   );
};

export default CreatorUpdateProfile;

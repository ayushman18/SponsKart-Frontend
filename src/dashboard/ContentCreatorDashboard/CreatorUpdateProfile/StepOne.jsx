import useAuth from "../../../hooks/useAuth";

const StepOne = ({ register }) => {
   const { user } = useAuth();

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

   return (
      <div className="grid grid-cols-2 gap-8">
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
      </div>
   );
};

export default StepOne;

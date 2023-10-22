import Select from "react-select";
import useAuth from "../../../../hooks/useAuth";

const UpdateCreatorStepOne = ({ register, selectedOption, setSelectedOption }) => {
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
   const options = [
      { value: "fitness", label: "Fitness" },
      { value: "skincare", label: "Skin Care" },
      { value: "lifestyle", label: "Life Style" },
      { value: "cosmetics", label: "Cosmetics" },
      { value: "education", label: "Education" },
      { value: "technology", label: "Technology" },
      { value: "finance", label: "Finance" },
      { value: "others", label: "Others" },
   ];

   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center">
         <input
            type="text"
            placeholder="Update Last Name"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("name")}
            defaultValue={user.data.name}
         />

         <input
            type="email"
            placeholder="Email"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("email")}
            defaultValue={user.data.email}
            readOnly
         />
         <input
            type="tel"
            placeholder="Phone Number"
            className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
            {...register("phoneNumber")}
            defaultValue={user.data.phoneNumber}
         />
         <Select
            className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
            placeholder="Select Brand Preferred Type"
            unstyled
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
         />
         <select
            className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6 "
            {...register("location")}
         >
            {indianStates.map((state, index) => (
               <option key={index} selected={state === user.data.location}>
                  {state}
               </option>
            ))}
         </select>
         <select
            className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6 "
            {...register("gender")}
         >
            <option value="" disabled selected>
               Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
         </select>
      </div>
   );
};

export default UpdateCreatorStepOne;

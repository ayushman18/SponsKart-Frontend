// import { FaUpload } from "react-icons/fa";

// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Steps from "../../../../components/Steps/Steps";
import useStep from "../../../../hooks/useStep";
import UpdateBrandStepOne from "./UpdateBrandStepOne";
import UpdateBrandStepTwo from "./UpdateBrandStepTwo";
import UpdateBrandStepThree from "./UpdateBrandStepThree";
import { useState } from "react";
import Swal from "sweetalert2";
import { hostImage } from "../../../../api/api";
import { api } from "../../../../api/apiInstance";
import { toast } from "react-toastify";

const BrandUpdateProfile = () => {
   const { user } = useAuth();
   const { step, setStep } = useStep();
   const [selectedOption, setSelectedOption] = useState(user.data.brandType || []);
   const [logoImg, setLogoImg] = useState({});
   const [bgImg, setBgImg] = useState({});

   const { register, handleSubmit } = useForm();
   const options = [
      { value: "fitness", label: "Fitness" },
      { value: "healthCare", label: "Health Care" },
      { value: "lifestyle", label: "Life Style" },
      { value: "cosmetics", label: "Cosmetics" },
      { value: "education", label: "Education" },
      { value: "technology", label: "Technology" },
      { value: "finance", label: "Finance" },
      { value: "clothing", label: "Clothing" },
      { value: "web3", label: "Web3" },
      { value: "food", label: "Food" },
      { value: "hospitality", label: "Hospitality" },
      { value: "others", label: "Others" },
   ];

   const updateData = async (data) => {
      data.brandType = selectedOption;

      data.id = user.user.brand;

      for (const key in data) {
         if (data[key] === "" || data[key] === undefined) {
            delete data[key];
         } else if (typeof data[key] === "object" && !Array.isArray(data[key])) {
            if (!data[key].name) {
               delete data[key];
            }
         }
      }

      Swal.fire({
         title: "Are you sure?",
         text: "Your provided all data are correct?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Update!",
      }).then(async (result) => {
         Swal.fire({
            title: "Please wait we are updating!",
            icon: "warning",
            text: "Thank you.",
            showConfirmButton: false,
            timer: 2000,
         });
         if (result.isConfirmed) {
            if (logoImg.name) {
               console.log("entered");
               data.logo = await hostImage(logoImg);
            }
            if (bgImg.name) {
               console.log("entered");
               data.backgroundImage = await hostImage(bgImg);
            }
            console.log(data);
            api.put(`brand/update`, data)
               .then((res) => {
                  console.log(res.data.data);
                  user.data = res.data.data;
                  Swal.fire({
                     title: "Your profile updated!",
                     icon: "success",
                     text: "Thank you.",
                     showConfirmButton: false,
                     timer: 2000,
                  });
               })
               .catch((error) => {
                  console.log(error);
                  toast.error("Something went wrong. Please try again");
               });
         }
      });

      // console.log(data, user);
   };

   return (
      <form onSubmit={handleSubmit(updateData)}>
         <Steps steps={["Basic Details", "Social Links", "Descriptions & Images"]}></Steps>

         {step === 1 ? (
            <UpdateBrandStepOne
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
               register={register}
               options={options}
            ></UpdateBrandStepOne>
         ) : step === 2 ? (
            <UpdateBrandStepTwo register={register}> </UpdateBrandStepTwo>
         ) : step === 3 ? (
            <UpdateBrandStepThree
               register={register}
               setLogoImg={setLogoImg}
               setBgImg={setBgImg}
            ></UpdateBrandStepThree>
         ) : (
            <>
               <p>Please Reload The Page</p>
            </>
         )}

         {/* <div className="grid grid-cols-2 gap-8">
            <div>
              
            </div>
            
         </div> */}
         <div className="flex gap-4 justify-center items-center my-6">
            <p
               className={`py-3 px-6 border-0 cursor-pointer rounded-lg text-white mt-4 ${
                  step <= 1 ? "btn-disabled bg-[#93e3317e]" : "bg-[#94E331E3]"
               }`}
               onClick={() => {
                  if (step > 1) {
                     setStep(step - 1);
                  }
               }}
            >
               Prev
            </p>
            <button
               type="submit"
               className="btn hover:bg-[#93e331] border-0 py-3 px-6 bg-[#94E331E3] rounded-lg text-white mt-4"
            >
               Update Profile
            </button>
            <p
               className={`py-3 px-6 border-0 cursor-pointer rounded-lg text-white mt-4 ${
                  step >= 3 ? "btn-disabled bg-[#93e3317e]" : "bg-[#94E331E3]"
               }`}
               onClick={() => {
                  if (step < 3) {
                     setStep(step + 1);
                  }
               }}
            >
               Next
            </p>
         </div>
      </form>
   );
};

export default BrandUpdateProfile;

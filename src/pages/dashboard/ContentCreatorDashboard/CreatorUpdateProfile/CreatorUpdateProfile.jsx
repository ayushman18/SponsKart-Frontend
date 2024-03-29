// import { FaUpload } from "react-icons/fa";

// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Steps from "../../../../components/Steps/Steps";
import useStep from "../../../../hooks/useStep";
import UpdateCreatorStepOne from "./UpdateCreatorStepOne";
import UpdateCreatorStepTwo from "./UpdateCreatorStepTwo";
import UpdateCreatorStepThree from "./UpdateCreatorStepThree";
import { useState } from "react";
import Swal from "sweetalert2";
import { hostImage } from "../../../../api/api";
import { api } from "../../../../api/apiInstance";
import { toast } from "react-toastify";

// todo: fix file upload bug

const CreatorUpdateProfile = () => {
   const { user } = useAuth();
   const { step, setStep } = useStep();
   const [selectedOption, setSelectedOption] = useState([]);
   const [selectedBudget, setSelectedBudget] = useState([]);
   const [logoImg, setLogoImg] = useState({});
   const [bgImg, setBgImg] = useState({});

   console.log(user.user.creator);

   const { register, handleSubmit } = useForm();

   const updateData = async (data) => {
      data.category = selectedOption;
      data.budget = selectedBudget;
      data.id = user.user.creator;

      for (const key in data) {
         if (data[key] === "") {
            delete data[key];
         } else if (data[key].length === 0) {
            delete data[key];
         }
      }

      console.log(data, logoImg);
      Swal.fire({
         title: "Are you sure?",
         text: "Your provided all data are correct?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Update!",
      }).then(async (result) => {
         if (result.isConfirmed) {
            Swal.fire({
               title: "Please wait we are updating!",
               icon: "warning",
               text: "Thank you.",
               showConfirmButton: false,
               timer: 2000,
            });
            if (logoImg.name) {
               console.log("entered");
               data.logo = await hostImage(logoImg);
            }
            if (bgImg.name) {
               console.log("entered");
               data.backgroundImage = await hostImage(bgImg);
            }
            console.log(data);
            api.put(`creator/update`, data)
               .then((res) => {
                  console.log(res.data.data);
                  user.data = res.data.data;
                  Swal.fire({
                     title: "Your profile updated!",
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
   };

   return (
      <form onSubmit={handleSubmit(updateData)}>
         <Steps steps={["Basic Details", "Additional", "Descriptions & Images"]}></Steps>

         {step === 1 ? (
            <UpdateCreatorStepOne
               register={register}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            ></UpdateCreatorStepOne>
         ) : step === 2 ? (
            <UpdateCreatorStepTwo
               register={register}
               setSelectedBudget={setSelectedBudget}
               selectedBudget={selectedBudget}
            ></UpdateCreatorStepTwo>
         ) : step === 3 ? (
            <UpdateCreatorStepThree register={register} setLogoImg={setLogoImg} setBgImg={setBgImg}>
               {" "}
            </UpdateCreatorStepThree>
         ) : (
            <>
               <p>Please Reload The Page</p>
            </>
         )}

         {/* <div className="grid grid-cols-2 gap-8">
            <div>
              
            </div>
            
         </div> */}
         <div className={`flex gap-4 justify-center items-center my-6`}>
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

export default CreatorUpdateProfile;

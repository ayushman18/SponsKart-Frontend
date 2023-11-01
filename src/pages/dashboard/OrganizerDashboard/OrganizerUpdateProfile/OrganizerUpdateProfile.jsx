import { useForm } from "react-hook-form";
import useStep from "../../../../hooks/useStep";
import Steps from "../../../../components/Steps/Steps";
import UpdateOrganizerStepOne from "./UpdateOrganizerStepOne";
import UpdateOrganizerStepTwo from "./UpdateOrganizerStepTwo";
import UpdateOrganizerStepThree from "./UpdateOrganizerStepThree";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { hostImage } from "../../../../api/api";
import { api } from "../../../../api/apiInstance";
import { toast } from "react-toastify";

const OrganizerUpdateProfile = () => {
   const { user } = useAuth();
   const { step, setStep } = useStep();
   const [selectedOption, setSelectedOption] = useState(user.data.category || []);
   const [selectedPlatform, setSelectedPlatform] = useState(user.data.platforms || []);
   const [selectedBudget, setSelectedBudget] = useState(user.data.budget || {});
   const [selectedFootfall, setSelectedFootfall] = useState(user.data.footfall || {});
   const [logoImg, setLogoImg] = useState({});
   const [bgImg, setBgImg] = useState({});

   const { register, handleSubmit } = useForm();

   const updateData = async (data) => {
      data.category = selectedOption;
      data.footfall = selectedFootfall;
      data.budget = selectedBudget;
      data.platforms = selectedPlatform;
      if (logoImg) {
         data.logo = await hostImage(logoImg);
      }
      if (bgImg) {
         data.backgroundImage = await hostImage(bgImg);
      }
      data.id = user.user.organizer;
      for (const key in data) {
         if (data[key] === "") {
            delete data[key];
         } else if (data[key].length === 0) {
            delete data[key];
         }
      }

      console.log(data);

      Swal.fire({
         title: "Are you sure?",
         text: "Your provided all data are correct?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Update!",
      }).then((result) => {
         if (result.isConfirmed) {
            api.put(`organizer/update`, data)
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
         <Steps steps={["Basic Details", "Additional", "Images"]}></Steps>

         {step === 1 ? (
            <UpdateOrganizerStepOne
               register={register}
               selectedOption={selectedOption}
               setSelectedOption={setSelectedOption}
            ></UpdateOrganizerStepOne>
         ) : step === 2 ? (
            <UpdateOrganizerStepTwo
               register={register}
               setSelectedPlatform={setSelectedPlatform}
               selectedPlatform={selectedPlatform}
               setSelectedBudget={setSelectedBudget}
               selectedBudget={selectedBudget}
               setSelectedFootfall={setSelectedFootfall}
               selectedFootfall={selectedFootfall}
            ></UpdateOrganizerStepTwo>
         ) : step === 3 ? (
            <UpdateOrganizerStepThree
               register={register}
               setLogoImg={setLogoImg}
               setBgImg={setBgImg}
            ></UpdateOrganizerStepThree>
         ) : (
            <>
               <p>Please Reload The Page</p>
            </>
         )}

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

export default OrganizerUpdateProfile;

import { useForm } from "react-hook-form";
import useStep from "../../../../hooks/useStep";
import Steps from "../../../../components/Steps/Steps";
import UpdateOrganizerStepOne from "./UpdateOrganizerStepOne";
import UpdateOrganizerStepTwo from "./UpdateOrganizerStepTwo";
import UpdateOrganizerStepThree from "./UpdateOrganizerStepThree";
import axios from "axios";
import { useState } from "react";

const OrganizerUpdateProfile = () => {
   const { step, setStep } = useStep();
   const [logoImg, setLogoImg] = useState({});
   const [bgImg, setBgImg] = useState({});
   const { register, handleSubmit } = useForm();

   const updateData = (data) => {
      data.logo = logoImg;
      data.backgroundImg = bgImg;
      // console.log(data);
      axios
         .put(`https://sponskart-hkgd.onrender.com/organizer/update`, data)
         .then((res) => {
            // console.log(res);
         })
         .catch((error) => console.log(error));
   };
   return (
      <form onSubmit={handleSubmit(updateData)}>
         <Steps steps={["Basic Details", "Social Links", "Images"]}></Steps>

         {step === 1 ? (
            <UpdateOrganizerStepOne register={register}></UpdateOrganizerStepOne>
         ) : step === 2 ? (
            <UpdateOrganizerStepTwo register={register}> </UpdateOrganizerStepTwo>
         ) : step === 3 ? (
            <UpdateOrganizerStepThree register={register} setLogoImg={setLogoImg} setBgImg={setBgImg}>
               {" "}
            </UpdateOrganizerStepThree>
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

export default OrganizerUpdateProfile;
// import { FaUpload } from "react-icons/fa";

// import { useEffect } from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
import Steps from "../../../components/Steps/Steps";
import useStep from "../../../hooks/useStep";
import UpdateCreatorStepOne from "./UpdateCreatorStepOne";
import UpdateCreatorStepTwo from "./UpdateCreatorStepTwo";
import UpdateCreatorStepThree from "./UpdateCreatorStepThree";

const CreatorUpdateProfile = () => {
   // const { user } = useAuth();
   const { step, setStep } = useStep();

   const { register, handleSubmit } = useForm();
   const updateData = (data) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(updateData)}>
         <Steps steps={["Basic Details", "Social Links", "Descriptions & Images"]}></Steps>

         {step === 1 ? (
            <UpdateCreatorStepOne register={register}></UpdateCreatorStepOne>
         ) : step === 2 ? (
            <UpdateCreatorStepTwo register={register}> </UpdateCreatorStepTwo>
         ) : step === 3 ? (
            <UpdateCreatorStepThree register={register}> </UpdateCreatorStepThree>
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

export default CreatorUpdateProfile;

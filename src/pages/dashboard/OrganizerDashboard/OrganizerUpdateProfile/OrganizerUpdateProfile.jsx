import { useForm } from "react-hook-form";
import useStep from "../../../../hooks/useStep";
import Steps from "../../../../components/Steps/Steps";
import UpdateOrganizerStepOne from "./UpdateOrganizerStepOne";
import UpdateOrganizerStepTwo from "./UpdateOrganizerStepTwo";
import UpdateOrganizerStepThree from "./UpdateOrganizerStepThree";
import axios from "axios";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const OrganizerUpdateProfile = () => {
   const { user, setUser } = useAuth();
   const { step, setStep } = useStep();
   const [selectedOption, setSelectedOption] = useState([]);
   const [selectedPlatform, setSelectedPlatform] = useState([]);
   const [selectedBudget, setSelectedBudget] = useState([]);
   const [selectedFootfall, setSelectedFootfall] = useState([]);
   const [logoImg, setLogoImg] = useState({});
   const [bgImg, setBgImg] = useState({});

   const userData = JSON.parse(localStorage.getItem("user"));
   const { register, handleSubmit, reset } = useForm();

   const updateData = (data) => {
      data.category = selectedOption;
      data.footfall = selectedFootfall;
      data.budget = selectedBudget;
      data.platforms = selectedPlatform;
      data.logo = logoImg;
      data.backgroundImage = bgImg;
      console.log(data);
      // for (const key in data) {
      //    if (data[key] === "") {
      //       delete data[key];
      //    } else if (typeof data[key] === "object" && !Array.isArray(data[key])) {
      //       if (!data[key].name || !data[key].value) {
      //          delete data[key];
      //       }
      //    }
      // }
      const formData = new FormData();

      for (const key in data) {
         formData.append(key, data[key]);
      }
      formData.append("id", user.data._id);
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
            axios
               .put(`https://sponskart-hkgd.onrender.com/organizer/update`, formData, {
                  headers: {
                     "Content-Type": "multipart/form-data",
                  },
               })
               .then((res) => {
                  // console.log(res.data.data);
                  userData.data = res.data.data;
                  setUser(userData);
                  localStorage.setItem("user", JSON.stringify(userData));
                  reset();
               })
               .catch((error) => console.log(error));
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

import { useContext } from "react";
import { StepsContext } from "../../provider/StepsProvider/StepsProvider";

const Steps = () => {
   const { step } = useContext(StepsContext);

   return (
      <div className="mx-auto w-fit my-4 text-white">
         <ul className="steps">
            <li className={`step ${step >= 1 && "step-success"} mx-4`}>Basic Details</li>
            <li className={`step ${step >= 2 && "step-success"}`}>More Details</li>
            <li className={`step ${step >= 3 && "step-success"}`}>Images</li>
         </ul>
      </div>
   );
};

export default Steps;

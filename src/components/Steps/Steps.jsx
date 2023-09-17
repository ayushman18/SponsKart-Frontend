import { useContext } from "react";
import { StepsContext } from "../../provider/StepsProvider/StepsProvider";

const Steps = ({ steps }) => {
   const { step } = useContext(StepsContext);

   return (
      <div className="mx-auto w-fit my-4">
         <ul className="steps">
            {steps.map((stepText, index) => (
               <li key={stepText} className={`step ${step >= index + 1 && "step-success"} `}>
                  {stepText}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Steps;

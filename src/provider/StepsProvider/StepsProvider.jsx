import { useState } from "react";
import { createContext } from "react";

export const StepsContext = createContext();

const StepsProvider = ({ children }) => {
   const [step, setStep] = useState(1);

   const stepContext = {
      step,
      setStep,
   };

   return <StepsContext.Provider value={stepContext}>{children}</StepsContext.Provider>;
};

export default StepsProvider;

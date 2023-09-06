import { useContext } from "react";
import { StepsContext } from "../provider/StepsProvider/StepsProvider";

const useStep = () => {
   const step = useContext(StepsContext);

   return step;
};

export default useStep;

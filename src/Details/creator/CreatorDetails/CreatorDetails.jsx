import { useLoaderData } from "react-router-dom";

const CreatorDetails = () => {
   const creator = useLoaderData();
   console.log(creator);
   return (
      <div>
         <h3>Creator Details</h3>
      </div>
   );
};

export default CreatorDetails;

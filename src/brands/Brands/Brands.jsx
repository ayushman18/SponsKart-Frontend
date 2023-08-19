import { useParams } from "react-router-dom";

const Brands = () => {
   const id = useParams();
   console.log(id);
   return (
      <div>
         <h1>This is brands :</h1>
      </div>
   );
};

export default Brands;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const BrandPostDetails = () => {
   // const { data, isLoading } = useQuery({
   //    queryKey: ["post"],
   //    queryFn: async () => {
   //       const res = await axios.get(
   //          `https://sponskart-hkgd.onrender.com/brand/post?postId=64ffe3e9cba1e497db4e05c1`
   //       );
   //       return res.data.data;
   //    },
   // });

   useEffect(() => {
      axios
         .get(`https://sponskart-hkgd.onrender.com/brand/post?postId=65095e6c544f94d521cbc8e1`)
         .then((res) => console.log(res.data))
         .catch((err) => console.log(err));
   }, []);
   // if (isLoading) {
   //    return <>loading...</>;
   // }
   return (
      <div>
         <h2>brand post details</h2>
      </div>
   );
};

export default BrandPostDetails;

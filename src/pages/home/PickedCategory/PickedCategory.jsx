import {
   FaGamepad,
   FaHandHoldingHeart,
   FaHospital,
   FaLaptop,
   FaMusic,
   FaRocket,
   FaYoutube,
} from "react-icons/fa";
import { PiBankBold } from "react-icons/pi";

const PickedCategory = () => {
   const categories = [
      { name: "Educations Partners", icon: <FaRocket /> },
      { name: "Media Partners", icon: <FaYoutube /> },
      { name: "Lifestyle Partners", icon: <FaHandHoldingHeart /> },
      { name: "Gaming Partners", icon: <FaGamepad /> },
      { name: "Hospitality Partners", icon: <FaHospital /> },
      { name: "Banking Partners", icon: <PiBankBold /> },
      { name: "Tech Partners", icon: <FaLaptop /> },
      { name: "Music Partners", icon: <FaMusic /> },
   ];

   return (
      <div className="max-w-[1040px] mx-4  lg:mx-auto my-24">
         <p className="text-5xl mb-16">Top Picked Categories</p>
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {categories.map((category, index) => (
               <div
                  key={index}
                  className="border p-8 bg-[#e4ff78] shadow-lg text-center shadow-[rgba(0, 0, 0, 0.25)] rounded-md group h-64 flex flex-col items-center gap-4 group hover:bg-gray-800 hover:text-white overflow-hidden duration-300 cursor-pointer"
               >
                  <h4 className="text-[28px]">{category.name}</h4>
                  <p className="text-8xl group-hover:text-5xl duration-300">{category.icon}</p>
                  <button className="px-8 translate-y-20 group-hover:translate-y-0 duration-300 p-2 bg-green-500 hover:bg-green-600 text-white rounded-xl">
                     Explore More
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PickedCategory;

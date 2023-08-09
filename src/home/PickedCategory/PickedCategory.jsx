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
      { name: "Educations Partners", icon: <FaRocket className="w-20 h-20 text-white" /> },
      { name: "Media Partners", icon: <FaYoutube className="w-20 h-20 text-white" /> },
      { name: "Lifestyle Partners", icon: <FaHandHoldingHeart className="w-20 h-20 text-white" /> },
      { name: "Gaming Partners", icon: <FaGamepad className="w-20 h-20 text-white" /> },
      { name: "Hospitality Partners", icon: <FaHospital className="w-20 h-20 text-white" /> },
      { name: "Banking Partners", icon: <PiBankBold className="w-20 h-20 text-white" /> },
      { name: "Tech Partners", icon: <FaLaptop className="w-20 h-20 text-white" /> },
      { name: "Music Partners", icon: <FaMusic className="w-20 h-20 text-white" /> },
   ];

   return (
      <div className="w-[1040px] mx-auto my-24">
         <p className="text-5xl mb-16">Top Picked Categories</p>
         <div className="grid grid-cols-4 gap-10">
            {categories.map((category, index) => (
               <div
                  key={index}
                  className="border p-8 bg-[#CFEF50] shadow-lg text-center shadow-[rgba(0, 0, 0, 0.25)] rounded-md group h-64 flex flex-col items-center gap-4"
               >
                  <h4 className="text-[28px]">{category.name}</h4>
                  {/* <img src={categoryImg1} alt="" className="h-20 w-20 " /> */}
                  {category.icon}
               </div>
            ))}
         </div>
      </div>
   );
};

export default PickedCategory;

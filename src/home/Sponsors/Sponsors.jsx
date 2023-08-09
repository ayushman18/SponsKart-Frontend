// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";
import img1 from "./../../assets/sponsors/Reliance.png";
import img2 from "./../../assets/sponsors/boat.png";
import img3 from "./../../assets/sponsors/ck.png";
import img4 from "./../../assets/sponsors/probo.png";
import img5 from "./../../assets/sponsors/pw.png";
import img6 from "./../../assets/sponsors/realme.png";
import img7 from "./../../assets/sponsors/redbull.png";
import img8 from "./../../assets/sponsors/rm.png";
import img9 from "./../../assets/sponsors/SBI.png";
import img10 from "./../../assets/sponsors/sugar.png";
import img11 from "./../../assets/sponsors/tata.png";
import img12 from "./../../assets/sponsors/titan.png";

const Sponsors = () => {
   return (
      <div className="border-2">
         <div className=" container mx-auto">
            <Marquee className="flex justify-center items-center gap-5">
               <img src={img1} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img2} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img3} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img4} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img5} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img6} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img7} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img8} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img9} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img10} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img11} alt="" className="mr-6 h-28 w-auto my-6" />
               <img src={img12} alt="" className="mr-6 h-28 w-auto my-6" />
            </Marquee>
         </div>
      </div>
   );
};

export default Sponsors;

// import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const Sponsors = () => {
   return (
      <div className="border-2">
         <div className=" container mx-auto">
            {/* <Marquee>
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
               <img
                  src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                  alt=""
                  className="grayscale hover:grayscale-0"
               />
            </Marquee> */}
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               breakpoints={{
                  640: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 5,
                     spaceBetween: 40,
                  },
                  1024: {
                     slidesPerView: 7,
                     spaceBetween: 50,
                  },
               }}
               freeMode={true}
               loop={true}
               autoplay={true}
               modules={[FreeMode, Autoplay]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-01-1.png"
                     alt=""
                     className="grayscale hover:grayscale-0"
                  />
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default Sponsors;

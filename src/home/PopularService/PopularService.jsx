import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PopularService = () => {
   const swiperRef = useRef();

   return (
      <div className="relative max-w-[1040px] mx-16 lg:mx-auto my-24">
         <h1 className="text-3xl font-semibold mb-2">Explore Popular service</h1>
         <div>
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               centeredSlides={true}
               loop={true}
               modules={[Navigation]}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  768: {
                     slidesPerView: 3,
                     spaceBetween: 40,
                  },
                  1024: {
                     slidesPerView: 4,
                     spaceBetween: 50,
                  },
               }}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-04.jpg"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-04.jpg"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/img-04.jpg"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                     <div className="h-96 w-72">
                        <img
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                           src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                           alt=""
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                     <div className="absolute inset-0 flex  flex-col justify-end px-9 transition-all duration-500">
                        <h1 className="font-dmserif text-2xl font-semibold text-white">
                           Writing & Translation
                        </h1>
                        <button className="rounded-lg bg-white py-2 mb-5 w-fit px-3.5 text-sm capitalize text-black group-hover:text-white group-hover:bg-orange-400 shadow shadow-black/60">
                           See More
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
         <div className="absolute top-1/2 z-[1000] flex justify-between w-full lg:w-[1040px]">
            <button className="btn shadow-lg -ml-6 btn-circle" onClick={() => swiperRef.current?.slidePrev()}>
               <FaAngleLeft />
            </button>
            <button className="btn shadow-lg -mr-6 btn-circle" onClick={() => swiperRef.current?.slideNext()}>
               <FaAngleRight />
            </button>
         </div>
      </div>
   );
};

export default PopularService;

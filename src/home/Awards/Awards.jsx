import { FaRegPlayCircle } from "react-icons/fa";
import conversation from "../../assets/conversation.png";
const Awards = () => {
   return (
      <section className="flex bg-gray-100 items-center">
         <div
            className="w-1/2 bg-no-repeat bg-cover flex justify-center items-center h-[650px] cursor-pointer"
            style={{
               backgroundImage:
                  "url('https://amentotech.com/projects/workreap/wp-content/uploads/2021/03/video.jpg')",
            }}
         >
            <div className="text-white text-9xl font-thin z-[1000]">
               <FaRegPlayCircle />
            </div>
         </div>
         <div className="p-12 w-1/2">
            <div className="w-2/3 space-y-3">
               <img src={conversation} alt="" className="w-20" />
               <h2 className="text-3xl font-semibold">We’re Surprisingly Amazing</h2>
               <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae adipisci dolorem,
                  nisi ut a cum vel sed illo consequuntur alias explicabo minus impedit voluptate mollitia. Ab
                  voluptatibus id veniam.
               </p>
               <div className="flex gap-4">
                  <div>icon</div>
                  <div>
                     <h3 className="text-xl">Fast and Reliable Dealings</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur fuga commodi
                        distinctio ratione sint iusto doloremque. Autem, nihil maxime!
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div>icon</div>
                  <div>
                     <h3 className="text-xl">Fast and Reliable Dealings</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur fuga commodi
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div>icon</div>
                  <div>
                     <h3 className="text-xl">Fast and Reliable Dealings</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur fuga commodi
                     </p>
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <button className="btn btn-warning normal-case"> Join Our Community</button>
                  <p className="text-lg">
                     <span className="text-gray-400 text-base"> Call Us 24/7 at: </span> +8801904723512
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Awards;

import { useState } from "react";
import { FaArrowCircleRight, FaPaperclip, FaTrash } from "react-icons/fa";

const MessageBox = () => {
   const [imageUrl, setImageUrl] = useState([]);

   const handelMessage = (e) => {
      e.preventDefault();

      const message = e.target.message.value;
      const uploadedFiles = e.target.files.files;
      // console.log({ message, uploadedFiles });
   };

   const handelFile = (files) => {
      // console.log(files);
      let imageArr = [];

      for (const file in files) {
         const int = parseInt(file);
         if (!isNaN(int)) {
            imageArr.push(URL.createObjectURL(files[file]));
         }
      }
      setImageUrl(imageArr);
   };

   return (
      <div className="md:h-full h-[650px] border-2 p-2 md:p-3 relative border-black rounded-2xl ">
         <div className="max-h-[575px] md:max-h-[400px] overflow-x-auto">
            <div className="chat chat-start">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-end">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-end">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-end">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-end">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-end">
               <div className="chat-image avatar">
                  <div className="w-6 rounded-full">
                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
               </div>
               <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
         </div>
         <div className="absolute bottom-4 sc">
            <div className="flex overflow-x-scroll items-center">
               {imageUrl.length > 0 && (
                  <>
                     {imageUrl.map((image, index) => (
                        <div key={index} className="relative">
                           <img src={image} alt="" height={100} width={100} />
                        </div>
                     ))}
                     <button
                        className="btn btn-circle bg-red-500 text-white ml-4"
                        onClick={() => {
                           let file = document.getElementById("input-message_file");
                           var emptyFile = document.createElement("input");
                           emptyFile.type = "file";
                           file.files = emptyFile.files;
                           setImageUrl([]);
                        }}
                     >
                        <FaTrash></FaTrash>
                     </button>
                  </>
               )}
            </div>
            <form onSubmit={handelMessage}>
               <div className="join w-full">
                  <div>
                     <div>
                        <input
                           type="text"
                           className="input input-bordered join-item w-auto"
                           placeholder="Write Here..."
                           name="message"
                        />
                     </div>
                  </div>
                  <div className="join-item px-2 py-2 cursor-pointer border-y">
                     <input
                        id="input-message_file"
                        type="file"
                        multiple
                        hidden
                        onChange={(e) => {
                           handelFile(e.target.files);
                        }}
                        name="files"
                     />
                     <label htmlFor="input-message_file">
                        <FaPaperclip className="text-2xl cursor-pointer"></FaPaperclip>
                     </label>
                  </div>
                  <div className="indicator">
                     <button className="btn px-2 md:px-5 text-2xl join-item">
                        <FaArrowCircleRight></FaArrowCircleRight>
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default MessageBox;

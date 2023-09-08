import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaPaperclip, FaTrash } from "react-icons/fa";

const ChatBox = () => {
   const [imageUrl, setImageUrl] = useState([]);

   const handelMessage = (e) => {
      e.preventDefault();

      const message = e.target.message.value;
      const uploadedFiles = e.target.files.files;
      console.log({ message, uploadedFiles });
   };

   const handelFile = (files) => {
      console.log(files);
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
      <div className="grid grid-cols-2 h-[550px] gap-4 p-6 bg-white rounded-md">
         <div className="overflow-y-scroll">
            <div className="bg-[#b6b6b6] py-2  px-4 rounded-md">
               <h2>SEO Consultants</h2>
               <p className="text-sm text-gray-700">Sponsor</p>
               <p>Recent Message</p>
               <p className="text-white bg-blue-500 w-fit py-1 px-3 rounded-md text-xs ">In touch</p>
            </div>
         </div>
         <div className="overflow-y-scroll border-2 p-5 relative border-black rounded-2xl ">
            <div>
               <div className="chat chat-start">
                  <div className="chat-image avatar">
                     <div className="w-6 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                     </div>
                  </div>
                  <div className="chat-bubble">
                     It was said that you would, destroy the Sith, not join them.
                  </div>
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
                  <div className="chat-bubble">
                     It was said that you would, destroy the Sith, not join them.
                  </div>
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
                  <div className="join">
                     <div>
                        <div>
                           <input
                              type="text"
                              className="input input-bordered join-item"
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
                        <button className="btn text-2xl join-item">
                           <FaArrowCircleRight></FaArrowCircleRight>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ChatBox;

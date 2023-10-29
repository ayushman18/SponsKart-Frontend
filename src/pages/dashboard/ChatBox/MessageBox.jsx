import { useEffect, useRef, useState } from "react";
import { FaArrowCircleRight, FaPaperclip, FaTrash } from "react-icons/fa";

import ChatMessage from "./ChatMessage";

import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { hostImage } from "../../../api/api";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { io } from "socket.io-client";

const MessageBox = () => {
   const [imageUrl, setImageUrl] = useState([]);
   const [file, setFile] = useState(null);
   const { user } = useAuth();
   const [messages, setMessages] = useState([]);
   const [arrivalMsg, setArrivalMsg] = useState(null);
   const socket = useRef();
   const { id: chatId } = useParams();
   const { state: chat } = useLocation();

   useEffect(() => {
      socket.current = io(import.meta.env.VITE_ServerUrl);
   }, []);

   const handelMessage = async (e) => {
      e.preventDefault();

      const message = e.target.message.value.trim();

      const image = file;
      let hostedImage;
      if (image) {
         hostedImage = await hostImage(image);
      }
      console.log(hostedImage);

      const newMessage = {
         chatId: chatId,
         sender: user.data._id,
         text: message,
         file: hostedImage,
      };

      let receiver;
      if (chat.brand_admin === user.data._id) {
         receiver = chat.creator_participant;
      } else {
         receiver = chat.brand_admin;
      }

      if (message || hostedImage?.url) {
         socket.current.emit("message", { ...newMessage, receiver });

         try {
            const res = await axios.post("https://sponskart-server.onrender.com/message", newMessage);
            console.log(res.data);
            setMessages([...messages, res.data]);
            e.target.message.value = "";
            handelFileDelete();
         } catch (error) {
            console.log(error);
         }
      } else {
         toast.error("message can not sent empty.");
      }
   };

   const handelFile = (files) => {
      console.log(files[0]);
      setFile(files[0]);
      let imageArr = [];

      for (const file in files) {
         const int = parseInt(file);
         if (!isNaN(int)) {
            imageArr.push(URL.createObjectURL(files[file]));
         }
      }
      setImageUrl(imageArr);
   };

   const handelFileDelete = () => {
      let file = document.getElementById("input-message_file");
      let emptyFile = document.createElement("input");
      emptyFile.type = "file";
      file.files = emptyFile.files;
      setImageUrl([]);
      setFile(null);
   };
   useEffect(() => {
      const getAllMessages = async () => {
         try {
            const res = await axios.get(`https://sponskart-server.onrender.com/message/${chatId}`);

            setMessages(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      getAllMessages();
   }, [chatId]);

   useEffect(() => {
      const getMsg = (msg) => {
         console.log(msg);
      };

      socket.current.on("message", getMsg);

      socket.current.emit("addUsers", user.data._id);
      socket.current.on("getUsers", (users) => {
         console.log(users);
      });
      socket.current.on("getMessage", (msg) => {
         setArrivalMsg(msg);
      });
   }, [user, socket]);
   useEffect(() => {
      if (
         arrivalMsg &&
         (arrivalMsg.sender === chat.brand_admin || arrivalMsg.sender === chat.creator_participant)
      ) {
         setMessages((prev) => [...prev, arrivalMsg]);
      }
   }, [arrivalMsg, chat]);

   return (
      <div className="md:h-full h-[650px] border-2 p-2 md:p-3 relative border-black rounded-2xl ">
         <div className="max-h-[575px] md:max-h-[400px] overflow-x-auto">
            <ChatMessage messages={messages} userId={user.data._id}></ChatMessage>
         </div>
         <div className="absolute bottom-4 sc">
            <div className="flex items-center">
               {imageUrl.length > 0 && (
                  <>
                     {imageUrl.map((image, index) => (
                        <div key={index} className="relative">
                           <img src={image} alt="" height={100} width={100} />
                        </div>
                     ))}
                     <button className="btn btn-circle bg-red-500 text-white ml-4" onClick={handelFileDelete}>
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

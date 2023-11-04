import moment from "moment";
import { useEffect, useRef } from "react";

const ChatMessage = ({ messages, userId }) => {
   const scrollRef = useRef();

   useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages]);

   return (
      <div className="chat-messages">
         {messages?.map((message, index) => (
            <div
               key={message._id || index}
               className={`chat ${userId === message.sender ? "chat-end" : "chat-start"} `}
               ref={scrollRef}
            >
               {message.text && (
                  <div
                     className={`chat-bubble ${
                        userId === message.sender ? "chat-bubble-primary" : "bg-gray-300 text-black"
                     }`}
                  >
                     <p>
                        {message.text}
                        <br />
                        <span className="text-xs text-gray-500">{moment(message.createdAt).fromNow()}</span>
                     </p>
                  </div>
               )}
               {message.file && (
                  <div className={`chat-bubble bg-gray-100`}>
                     <img src={message.file.url} className="object-contain h-20 w-32" alt="" />
                     <p className="text-xs text-gray-500">{moment(message.createdAt).fromNow()}</p>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
};

export default ChatMessage;

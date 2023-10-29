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
                     {message.text}
                  </div>
               )}
               {message.file && (
                  <div className={`chat-bubble bg-gray-100`}>
                     <img src={message.file.url} className="object-contain h-20 w-32" alt="" />
                  </div>
               )}
            </div>
         ))}
      </div>
   );
};

export default ChatMessage;

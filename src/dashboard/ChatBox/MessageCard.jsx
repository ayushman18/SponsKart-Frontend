import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MessageCard = () => {
   const [smallDevice, setSmallDevice] = useState(false);
   useEffect(() => {
      if (screen.width < 650) {
         setSmallDevice(true);
      }
   }, [smallDevice]);
   return (
      <div className="overflow-y-scroll">
         <Link to={`/dashboard/${smallDevice ? "mobile-messages" : "messages"}/id`}>
            <div className="bg-[#e2e2e2] hover:bg-[#bbbbbb] py-2  px-4 rounded-md">
               <h2>SEO Consultants</h2>
               <p className="text-sm text-gray-700">Sponsor</p>
               <p>Recent Message</p>
               <p className="text-white bg-blue-500 w-fit py-1 px-3 rounded-md text-xs ">In touch</p>
            </div>
         </Link>
      </div>
   );
};

export default MessageCard;

import MessageCard from "./MessageCard";
import { Outlet } from "react-router-dom";

const ChatBox = () => {
   return (
      <div className="md:grid grid-cols-2 h-[550px] gap-4 p-6 bg-white rounded-md hidden">
         <MessageCard></MessageCard>
         <div>
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default ChatBox;

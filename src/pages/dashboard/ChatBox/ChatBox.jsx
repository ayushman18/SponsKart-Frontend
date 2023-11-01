import { useQuery } from "@tanstack/react-query";
import MessageCard from "./MessageCard";
import { Outlet } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { api } from "../../../api/apiInstance";

const ChatBox = () => {
   const { user } = useAuth();

   const { data: chats = [], isLoading } = useQuery(["data"], async () => {
      const res = await api.get(`chat/${user.data._id}`);
      return res.data.result;
   });

   if (isLoading) {
      return (
         <div>
            <span className="loading loading-dots loading-md"></span>
         </div>
      );
   }

   return (
      <div className="md:grid grid-cols-2 h-[550px] gap-4 p-6 bg-white rounded-md hidden">
         <div className="overflow-y-scroll flex flex-col gap-4">
            {chats.length < 1 ? (
               <p>You don&rsquo;t have any message yet.</p>
            ) : (
               chats?.map((chat) => <MessageCard key={chat._id} chat={chat}></MessageCard>)
            )}
         </div>
         <div>
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default ChatBox;

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import moment from "moment";
import { toast } from "react-toastify";
import { api } from "../../../api/apiInstance";
// import { socket } from "../../../socket";

const MessageCard = ({ chat }) => {
   const { user } = useAuth();
   // console.log(chat);
   const [loading, setLoading] = useState(true);
   const [smallDevice, setSmallDevice] = useState(false);
   const [oppositeId, setOppositeId] = useState("");
   const [type, setType] = useState("");
   const [data, setData] = useState([]);

   useEffect(() => {
      if (screen.width < 650) {
         setSmallDevice(true);
      }
      if (chat?.brand_admin === user.data._id) {
         setOppositeId(chat.creator_participant);
         setType("creator");
         setLoading(false);
      } else if (chat.creator_participant === user.data._id) {
         setOppositeId(chat.brand_admin);
         setType("brand");
         setLoading(false);
      }
      if (type && oppositeId) {
         api.get(`${type}/get/${oppositeId}`)
            .then((res) => {
               setData(res.data.data);
               setLoading(false);
            })
            .catch((err) => {
               console.log(err);
               setLoading(false);
               toast.error("Something went wrong please try again!");
            });
      }
   }, [smallDevice, user, chat, oppositeId, type]);

   if (loading) {
      return (
         <div>
            <span className="loading loading-dots loading-sm"></span>
         </div>
      );
   }

   return (
      <Link to={`/dashboard/messages/${chat._id}`} state={chat}>
         <div className="bg-[#e2e2e2] hover:bg-[#bbbbbb] py-2  px-4 rounded-md">
            <h2>{type === "creator" ? data?.name : data?.brandName}</h2>
            <p className="text-sm text-gray-700">{type === "creator" ? "Creator" : "Brand"}</p>
            <p>{moment(chat?.updatedAt).fromNow()}</p>
            <p className="text-white bg-blue-500 w-fit py-1 px-3 rounded-md text-xs ">In touch</p>
         </div>
      </Link>
   );
};

export default MessageCard;

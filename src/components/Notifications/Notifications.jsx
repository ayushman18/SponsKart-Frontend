import { useEffect } from "react";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { apiInstance } from "../../api/apiInstance";
import { Link } from "react-router-dom";
import moment from "moment";

const Notifications = () => {
   const { user } = useAuth();
   const [allNotifications, setAllNotifications] = useState([]);
   const [showBadge, setShowBadge] = useState(false);
   const updateNotificationStatus = () => {
      setShowBadge(false);
      if (showBadge) {
         apiInstance
            .put(`/notification/${user.data._id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
      }
   };

   useEffect(() => {
      apiInstance
         .get(`/notification/${user.data._id}`)
         .then((res) => {
            setAllNotifications(res.data);
            if (!res.data.message) {
               res.data.forEach((element) => {
                  if (element.seen === false) {
                     setShowBadge(true);
                  }
               });
            }
         })
         .catch((err) => console.log(err));
   }, [user]);

   return (
      <div className="w-14 ml-4 bg-gray-400 h-14 flex justify-center items-center rounded-full border">
         <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle" onClick={updateNotificationStatus}>
               <div className="indicator">
                  <FaRegBell className="text-2xl"></FaRegBell>
                  {showBadge && <span className="badge badge-xs badge-primary indicator-item">new</span>}
               </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64 max-h-96 min-h-[100px] overflow-y-scroll">
               {allNotifications?.message ? (
                  <li>{allNotifications.message}</li>
               ) : (
                  allNotifications?.map((notification) => (
                     <li key={notification._id}>
                        <Link to={"/dashboard/messages"}>
                           <p>
                              {notification.notification} <br />{" "}
                              <span className="text-xs text-gray-500">
                                 {moment(notification.createdAt).fromNow()}
                              </span>
                           </p>
                        </Link>
                     </li>
                  ))
               )}
            </ul>
         </details>
      </div>
   );
};

export default Notifications;

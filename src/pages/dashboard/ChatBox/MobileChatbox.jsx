import { Outlet } from "react-router-dom";

const MobileChatbox = () => {
   return (
      <div className=" min-h-[550px] p-6 bg-white rounded-md overflow-y-auto">
         <button className="btn btn-circle" onClick={() => history.back()}>
            back
         </button>
         <Outlet></Outlet>
      </div>
   );
};

export default MobileChatbox;

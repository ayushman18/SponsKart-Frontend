import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const ManagePostCard = () => {
   return (
      <div className="card card-side bg-base-100 items-center shadow-xl">
         <div className="card-body">
            <h2 className="card-title">Post For Content Creator</h2>
            <p>Want to giveaway.</p>
            <p>Price/Descriptions</p>
            <p>Date</p>
         </div>
         <div className="join join-vertical rounded-none h-full">
            <button className="btn join-item  btn-warning">
               <FaEdit className="text-xl text-white"></FaEdit>
            </button>
            <button className="btn join-item btn-error text-white">
               <FaTrashAlt className="text-xl"></FaTrashAlt>
            </button>
            <button className="btn join-item btn-info">
               <FaEye className="text-xl"></FaEye>
            </button>
         </div>
      </div>
   );
};

export default ManagePostCard;

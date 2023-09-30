import moment from "moment";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagePostCard = ({ deletePost, post }) => {
   const { postfor, payType, date, _id } = post;

   return (
      <div className="card card-side bg-base-100 items-center shadow-xl">
         <div className="card-body">
            <h2 className="card-title">
               Post for {postfor === "creator" ? "Content Creator" : "Event Organizer"}
            </h2>
            <p>Pay Type: {payType === "pay" ? "Paid Post" : "Giveaway Post"}</p>

            <p>Date: {moment(date).fromNow()}</p>
         </div>
         <div className="join join-vertical px-3 rounded-lg h-full">
            <Link to={`/dashboard/brand/updatePost/${_id}`}>
               <button className="btn join-item  btn-warning">
                  <FaEdit className="text-xl text-white"></FaEdit>
               </button>
            </Link>

            <button className="btn join-item btn-error text-white" onClick={() => deletePost(_id)}>
               <FaTrashAlt className="text-xl"></FaTrashAlt>
            </button>
            <Link to={`/post/brand/${post._id}`}>
               <button className="btn join-item btn-info">
                  <FaEye className="text-xl"></FaEye>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default ManagePostCard;

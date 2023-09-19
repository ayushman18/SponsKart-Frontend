import axios from "axios";
import ManagePostCard from "../../../../components/ManagePostCard/ManagePostCard";

const BrandManagePost = () => {
   const deletePost = (id) => {
      axios
         .delete(`https://sponskart-hkgd.onrender.com/brand/deletepost?postId=65095e6c544f94d521cbc8e1`)
         .then((res) => console.log(res.data))
         .catch((err) => console.log(err));
   };
   return (
      <div>
         <h2 className="text-white text-3xl text-center my-4">Manage Post</h2>
         <div className="grid md:grid-cols-2 justify-center items-center gap-6">
            <div>
               <ManagePostCard deletePost={deletePost}></ManagePostCard>
            </div>
         </div>
      </div>
   );
};

export default BrandManagePost;

import axios from "axios";
import ManagePostCard from "../../../../components/ManagePostCard/ManagePostCard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const BrandManagePost = () => {
   const { user } = useAuth();

   const {
      data: posts,
      refetch,
      isLoading,
   } = useQuery({
      queryKey: ["data"],
      queryFn: () =>
         axios
            .get(`https://sponskart-server.vercel.app/brand/post/all?brandId=${user.user.brand}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err)),
   });

   const deletePost = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            axios
               .delete(`https://sponskart-server.vercel.app/brand/deletepost?postId=${id}`)
               .then((res) => {
                  console.log(res.data);
                  refetch();
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
               })
               .catch((err) => console.log(err));
         }
      });
   };

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (posts) {
      console.log(posts);
   }

   return (
      <div>
         <h2 className="text-white text-3xl text-center my-4">Manage Post</h2>
         <div className="grid md:grid-cols-2 justify-center items-center gap-6">
            {posts.map((post) => (
               <ManagePostCard key={post._id} deletePost={deletePost} post={post}></ManagePostCard>
            ))}
         </div>
      </div>
   );
};

export default BrandManagePost;

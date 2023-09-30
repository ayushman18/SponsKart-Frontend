import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const BrandUpdatePost = () => {
   const { user } = useAuth();
   const data = useLoaderData();
   const post = data.data;
   const { register, handleSubmit, reset } = useForm();
   const [method, setMethod] = useState(post.payType);

   const indianStates = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
   ];
   const productType = [
      { value: "fitness", label: "Fitness" },
      { value: "healthCare", label: "Health Care" },
      { value: "lifestyle", label: "Life Style" },
      { value: "cosmetics", label: "Cosmetics" },
      { value: "education", label: "Education" },
      { value: "technology", label: "Technology" },
      { value: "finance", label: "Finance" },
      { value: "clothing", label: "Clothing" },
      { value: "web3", label: "Web3" },
      { value: "food", label: "Food" },
      { value: "hospitality", label: "Hospitality" },
      { value: "others", label: "Others" },
   ];
   const defaultTypes = productType.filter((type) => post.categories.includes(type.value));
   const [types, setTypes] = useState(defaultTypes);

   const platformOptions = [
      { value: "facebook", label: "Facebook" },
      { value: "linkedin", label: "Linkedin" },
      { value: "instagram", label: "Instagram" },
      { value: "youtube", label: "Youtube" },
      { value: "twitter", label: "Twitter" },
      { value: "others", label: "Others" },
   ];
   const defaultPlatforms = platformOptions.filter((type) => post.platform.includes(type.value));

   const [platforms, setPlatforms] = useState(defaultPlatforms);

   const handelMethod = (e) => {
      setMethod(e.target.value);
      // console.log(e.target.value);
   };

   const updatePost = (data) => {
      data.id = user.user._id;
      for (const key in data) {
         if (data[key] === "") {
            delete data[key];
         }
      }
      if (method === "giveaway") {
         delete data["audience"];
         delete data["price"];
      } else {
         data.price = parseInt(data.price);
         delete data["description"];
      }
      data.platform = platforms?.map((type) => type.value);
      data.categories = types?.map((type) => type.value);
      data.miniFollower = parseInt(data.miniFollower || 0);
      if (data.platform.length === 0 && data.categories.length === 0) {
         Swal.fire("Please add Platforms and Categories", "", "error");
         return;
      }
      console.log(data);
      // Swal.fire({
      //    title: "Are you sure?",
      //    text: "Do you want to add this post?",
      //    icon: "warning",
      //    showCancelButton: true,
      //    confirmButtonColor: "#3085d6",
      //    cancelButtonColor: "#d33",
      //    confirmButtonText: "Yes, Add Post",
      // }).then((result) => {
      //    if (result.isConfirmed) {
      //       axios
      //          .post("https://sponskart-hkgd.onrender.com/brand/add/post", data)
      //          .then((res) => {
      //             console.log(res.data.data);
      //             Swal.fire("Posted!", "Your post has been added.", "success");

      //             reset();
      //          })
      //          .catch((error) => console.log(error));
      //    }
      // });
   };

   return (
      <div>
         <h2 className="text-black text-2xl text-center">Update post</h2>
         <form onSubmit={handleSubmit(updatePost)}>
            <div className="grid md:grid-cols-2 gap-6 justify-center items-start">
               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Post For</span>
                  </label>
                  <select
                     {...register("postfor")}
                     className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
                     required
                  >
                     <option value="creator" selected={post.postfor === "creator"}>
                        Content Creator
                     </option>
                     <option value="organizer" selected={post.postfor === "organizer"}>
                        Event Organizer
                     </option>
                  </select>
               </div>
               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Do you want to</span>
                  </label>
                  <select
                     {...register("payType")}
                     className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
                     onChange={handelMethod}
                     required
                  >
                     <option value="giveaway" selected={post.payType === "giveaway"}>
                        Giveaway Product
                     </option>
                     <option value="pay" selected={post.payType === "pay"}>
                        Pay {post.postfor}
                     </option>
                  </select>
               </div>

               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Describe your giveaway</span>
                  </label>
                  <textarea
                     type="text"
                     placeholder="Describe Here"
                     className="textarea textarea-bordered textarea-lg min-w-[300px] input-style px-4 py-4"
                     rows="2"
                     required
                     defaultValue={post.describe}
                     {...register("describe")}
                  />
               </div>
               {method === "pay" && (
                  <>
                     <div>
                        <label className="label">
                           <span className="label-text text-black text-base">Enter the pricing</span>
                        </label>
                        <input
                           type="number"
                           placeholder="&#x20B9; Rupee"
                           className="input input-bordered min-w-[300px] input-style px-4 py-8 mb-5"
                           required
                           defaultValue={post.price}
                           {...register("price")}
                        />
                     </div>
                     <div>
                        <label className="label">
                           <span className="label-text text-black text-base">Select Target Audience</span>
                        </label>
                        <select
                           {...register("targetAudience")}
                           className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
                           required
                        >
                           <option value="male" selected={post.targetAudience === "male"}>
                              Male
                           </option>
                           <option value="female" selected={post.targetAudience === "female"}>
                              Female
                           </option>
                           <option value="any" selected={post.targetAudience === "any"}>
                              Any
                           </option>
                        </select>
                     </div>
                  </>
               )}

               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Select The Platforms</span>
                  </label>
                  <Select
                     className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
                     placeholder="Select The Platforms"
                     unstyled
                     defaultValue={platforms}
                     onChange={setPlatforms}
                     options={platformOptions}
                     isMulti
                  />
               </div>

               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Minimum Followers</span>
                  </label>
                  <input
                     type="number"
                     placeholder="Minimum Followers"
                     className="input input-bordered min-w-[300px] input-style px-4 py-8 "
                     {...register("miniFollower")}
                     defaultValue={post.miniFollower}
                  />
               </div>

               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">
                        Choose Categories for your product
                     </span>
                  </label>
                  <Select
                     className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6"
                     placeholder="Categories"
                     unstyled
                     defaultValue={types}
                     onChange={setTypes}
                     options={productType}
                     isMulti
                  />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text text-black text-base">Choose Location</span>
                  </label>
                  <select
                     className="select select-bordered lg:mb-0 min-w-[300px] input-style px-4 h-16 mb-6 "
                     {...register("chooseLocation")}
                     required
                  >
                     {indianStates.map((state, index) => (
                        <option key={index} selected={post.chooseLocation === state}>
                           {state}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
            <div className="flex justify-center items-center my-6">
               <button type="submit" className="btn btn-success">
                  add post
               </button>
            </div>
         </form>
      </div>
   );
};

export default BrandUpdatePost;

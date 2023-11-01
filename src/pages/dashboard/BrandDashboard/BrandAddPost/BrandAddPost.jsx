import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { api } from "../../../../api/apiInstance";

const BrandAddPost = () => {
   const { user } = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const [method, setMethod] = useState("giveaway");
   const [platforms, setPlatforms] = useState([]);
   const [types, setTypes] = useState([]);
   const [questions, setQuestions] = useState([""]);
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

   const platformOptions = [
      { value: "facebook", label: "Facebook" },
      { value: "linkedin", label: "Linkedin" },
      { value: "instagram", label: "Instagram" },
      { value: "youtube", label: "Youtube" },
      { value: "twitter", label: "Twitter" },
      { value: "others", label: "Others" },
   ];

   const handelMethod = (e) => {
      setMethod(e.target.value);
   };

   const addQuestion = () => {
      setQuestions([...questions, ""]);
   };

   const removeQuestion = (index) => {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
   };

   const handleQuestionChange = (index, event) => {
      const updatedQuestions = [...questions];
      updatedQuestions[index] = event.target.value;
      setQuestions(updatedQuestions);
   };

   const addPost = (data) => {
      data.questions = questions;
      for (const key in data) {
         if (data[key] === "") {
            delete data[key];
         }
      }
      if (method === "giveaway") {
         delete data["audience"];
         delete data["price"];
      } else {
         data.pricing = parseInt(data.pricing);
         delete data["description"];
      }
      data.date = new Date();
      data.brandId = user.user.brand;
      data.platform = platforms;
      data.categories = types;
      data.miniFollower = parseInt(data.miniFollower || 0);
      if (data.platform.length === 0 && data.categories.length === 0) {
         Swal.fire("Please add Platforms and Categories", "", "error");
         return;
      }
      console.log(data);
      Swal.fire({
         title: "Are you sure?",
         text: "Do you want to add this post?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Add Post",
      }).then((result) => {
         if (result.isConfirmed) {
            api.post("brand/add/post", data)
               .then((res) => {
                  console.log(res.data.data);
                  Swal.fire("Posted!", "Your post has been added.", "success");

                  reset();
               })
               .catch((error) => console.log(error));
         }
      });
   };

   return (
      <div>
         <h2 className="text-black text-2xl text-center">Add post</h2>
         <form onSubmit={handleSubmit(addPost)}>
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
                     <option value="creator" defaultValue>
                        Content Creator
                     </option>
                     <option value="organizer">Event Organizer</option>
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
                     <option value="giveaway" defaultValue>
                        Giveaway Product
                     </option>
                     <option value="pay">Pay Creator or Event</option>
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
                           {...register("pricing")}
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
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                           <option value="any">Any</option>
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
                        <option key={index}>{state}</option>
                     ))}
                  </select>
               </div>

               <div className="col-span-2">
                  <div className="flex flex-wrap items-center gap-4">
                     <p>Want to add questions?</p>
                     <p onClick={addQuestion} className="btn btn-success">
                        Add Question
                     </p>
                  </div>
               </div>
               {questions.map((question, index) => (
                  <div key={index} className="join">
                     <input
                        type="text"
                        className="input input-bordered min-w-[300px] input-style px-4 py-6 join-item"
                        value={question}
                        placeholder={`Type Question ${index + 1}`}
                        onChange={(e) => handleQuestionChange(index, e)}
                     />
                     <p onClick={() => removeQuestion(index)} className="btn btn-error rounded-2xl join-item">
                        Remove
                     </p>
                  </div>
               ))}
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

export default BrandAddPost;

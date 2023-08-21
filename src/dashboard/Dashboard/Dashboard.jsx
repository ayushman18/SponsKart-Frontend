import { FaUpload } from "react-icons/fa";
import "./Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
   // const { user } = useAuth();

   useEffect(() => {
      var inputs = document.querySelectorAll(".inputFile");
      var inputs2 = document.querySelectorAll(".inputFile2");
      inputs.forEach((input) => {
         {
            var label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               var fileName = "";
               console.log(this.files);
               if (this.files && this.files.length > 1) {
                  fileName = (this.getAttribute("data-multiple-caption") || "").replace(
                     "{count}",
                     this.files.length
                  );
               } else {
                  fileName = e.target.value.split("\\").pop();
               }

               if (fileName) label.querySelector("span").innerHTML = fileName;
               else label.innerHTML = labelVal;
            });
         }
      });
      inputs2.forEach((input) => {
         {
            var label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               var fileName = "";

               if (this.files && this.files.length > 1) {
                  fileName = (this.getAttribute("data-multiple-caption") || "").replace(
                     "{count}",
                     this.files.length
                  );
               } else {
                  fileName = e.target.value.split("\\").pop();
               }

               if (fileName) label.querySelector("span").innerHTML = fileName;
               else label.innerHTML = labelVal;
            });
         }
      });
   }, []);

   return (
      <form>
         <div className="grid grid-cols-3 gap-8">
            <div>
               <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="City"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="State"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Country"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Social Media Platform Name"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Subscribers/Followers"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Social media link"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
            </div>
            <div>
               <input
                  type="text"
                  placeholder="LinkedIn Profile"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Minimum Views"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <input
                  type="text"
                  placeholder="Maximum Views"
                  className="input input-bordered w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <textarea
                  type="text"
                  placeholder="Short Description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 mb-5"
               />
               <textarea
                  type="text"
                  placeholder="Long description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 mb-5"
                  rows="6"
               />
            </div>
            <div>
               <input type="file" name="file" id="file" className="inputFile" multiple />
               <label htmlFor="file">
                  Upload Logo{" "}
                  <span>
                     <FaUpload></FaUpload>
                  </span>
               </label>
               <input type="file" name="file" id="file2" className="inputFile2" />
               <label htmlFor="file2">
                  Upload Background Picture{" "}
                  <span>
                     <FaUpload></FaUpload>
                  </span>
               </label>
               <button type="submit" className="py-3 px-6 bg-[#94E331E3] rounded-lg text-white mt-4">
                  Save Profile
               </button>
            </div>
         </div>
      </form>
   );
};

export default Dashboard;

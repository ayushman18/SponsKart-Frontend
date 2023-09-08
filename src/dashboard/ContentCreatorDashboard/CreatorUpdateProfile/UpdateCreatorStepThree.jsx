import { useEffect } from "react";
import { FaUpload } from "react-icons/fa";

const UpdateCreatorStepThree = ({ register }) => {
   useEffect(() => {
      let inputs = document.querySelectorAll(".inputFile");
      let inputs2 = document.querySelectorAll(".inputFile2");
      inputs.forEach((input) => {
         {
            let label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               let fileName = "";
               console.log(this.files);
               if (this.files && this.files.length > 1) {
                  fileName = (this.getAttribute("data-multiple-caption") || "").replace(
                     "{count}",
                     this.files.length
                  );
               } else {
                  fileName = e.target.value.split("\\").pop();
               }

               if (fileName) label.querySelector("span").innerHTML = fileName.slice(0, 15) + "...";
               else label.innerHTML = labelVal;
            });
         }
      });
      inputs2.forEach((input) => {
         {
            let label = input.nextElementSibling,
               labelVal = label.innerHTML;

            input.addEventListener("change", function (e) {
               let fileName = "";

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
      <div className="grid grid-cols-2 gap-8">
         <div className="flex justify-between items-start col-span-2">
            <textarea
               type="text"
               placeholder="Short Description"
               className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 my-5"
               {...register("shortDescription")}
            />
            <textarea
               type="text"
               placeholder="Long description"
               className="textarea textarea-bordered textarea-lg w-full max-w-xs input-style px-4 py-8 my-5"
               rows="4"
               {...register("longDescription")}
            />
         </div>
         <input type="file" name="file" id="file" className="inputFile" {...register("logo")} />
         <label htmlFor="file">
            Upload Logo <br />
            <span>
               <FaUpload></FaUpload>
            </span>
         </label>
         <input type="file" name="file" id="file2" className="inputFile2" {...register("backgroundImg")} />
         <label htmlFor="file2">
            Upload Background Picture <br />
            <span>
               <FaUpload></FaUpload>
            </span>
         </label>
      </div>
   );
};

export default UpdateCreatorStepThree;

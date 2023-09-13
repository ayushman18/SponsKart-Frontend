import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const UpdateCreatorStepThree = ({ register, setLogoImg, setBgImg }) => {
   const [logoName, setLogoName] = useState("");
   const [bgName, setBgName] = useState("");
   return (
      <div className="grid md:grid-cols-2 gap-8 justify-center">
         <textarea
            type="text"
            placeholder="Short Description"
            className="textarea textarea-bordered textarea-lg min-w-[300px] input-style px-4 py-4"
            rows="2"
            {...register("shortDescription")}
         />
         <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            {...register("logo")}
            onChange={(e) => {
               setLogoName(e.target.files[0].name);
               setLogoImg(e.target.files[0]);
            }}
         />
         <label htmlFor="file" className="bg-white max-w-xs input-style px-4 py-4">
            Upload Logo <br />
            <span className="overflow-clip">{logoName ? logoName : <FaUpload></FaUpload>}</span>
         </label>
         <textarea
            type="text"
            placeholder="Long description"
            className="textarea textarea-bordered textarea-lg min-w-[300px] input-style px-4 py-4"
            rows="4"
            {...register("longDescription")}
         />
         <input
            type="file"
            name="file"
            id="file2"
            className="hidden"
            {...register("backgroundImage")}
            onChange={(e) => {
               setBgName(e.target.files[0].name);
               setBgImg(e.target.files[0]);
            }}
         />
         <label htmlFor="file2" className="bg-white max-w-xs input-style px-4 py-4">
            Upload Background Picture <br />
            <span className="overflow-clip">{bgName ? bgName : <FaUpload></FaUpload>}</span>
         </label>
      </div>
   );
};

export default UpdateCreatorStepThree;

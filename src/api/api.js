import axios from "axios";

export const hostImage = async (data) => {
   const formData = new FormData();
   formData.append("image", data);

   try {
      const response = await axios.post(
         `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgbbApiKey}`,
         formData,
         {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         }
      );
      console.log(response);
      return response.data.data.image;
   } catch (err) {
      console.log(err);
   }
};

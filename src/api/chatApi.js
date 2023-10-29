import axios from "axios";

export const handelCreateChat = async (brand, creator, postId) => {
   console.log({ brand, creator, postId });
   try {
      const res = await axios.post("https://sponskart-server.onrender.com/chat", { brand, creator, postId });
      return res.data.result;
   } catch (error) {
      console.log(error);
   }
};

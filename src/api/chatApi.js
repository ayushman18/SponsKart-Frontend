import { api } from "./apiInstance";

export const handelCreateChat = async (brand, creator, postId) => {
   console.log({ brand, creator, postId });
   try {
      const res = await api.post("chat", { brand, creator, postId });
      return res.data.result;
   } catch (error) {
      console.log(error);
   }
};

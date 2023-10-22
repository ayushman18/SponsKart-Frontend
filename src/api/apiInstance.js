import axios from "axios";
const token = localStorage.getItem("token");
console.log(token);

export const api = axios.create({
   baseURL: "https://sponskart-server.vercel.app/",
});

export const apiInstance = axios.create({
   baseURL: "https://sponskart-server.vercel.app/",
   timeout: 10000,
   headers: { authorization: `Bearer ${token}` },
});
export const testInstance = axios.create({
   baseURL: "http://localhost:3000/",
   timeout: 10000,
   headers: { authorization: `Bearer ${token}` },
});

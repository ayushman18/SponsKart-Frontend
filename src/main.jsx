import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./home/provider/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
         <ToastContainer />
      </AuthProvider>
   </React.StrictMode>
);

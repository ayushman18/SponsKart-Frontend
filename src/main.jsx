import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "@smastrom/react-rating/style.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./provider/AuthProvider/AuthProvider";
import StepsProvider from "./provider/StepsProvider/StepsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <StepsProvider>
            <RouterProvider router={router} />
            <ToastContainer />
         </StepsProvider>
      </AuthProvider>
   </React.StrictMode>
);

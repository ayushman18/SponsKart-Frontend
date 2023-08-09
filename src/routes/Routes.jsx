import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home/Home";
import Register from "../register/Register/Register";
import RegisterLayout from "../layouts/RegisterLayout";
import ContentCreatorRegister from "../register/ContentCreatorRegister/ContentCreatorRegister";
import OrganiserRegister from "../register/OrganiserRegister/OrganiserRegister";
import OTPVerification from "../register/OTPVerification/OTPVerification";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
      ],
   },
   {
      path: "/register",
      element: <RegisterLayout></RegisterLayout>,
      children: [
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "content-creator",
            element: <ContentCreatorRegister></ContentCreatorRegister>,
         },
         {
            path: "organiser",
            element: <OrganiserRegister></OrganiserRegister>,
         },
         {
            path: "verification",
            element: <OTPVerification></OTPVerification>,
         },
      ],
   },
]);

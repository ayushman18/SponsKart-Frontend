import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home/Home";
import Register from "../register/Register/Register";
import RegisterLayout from "../layouts/RegisterLayout";
import ContentCreatorRegister from "../register/ContentCreatorRegister/ContentCreatorRegister";
import OrganiserRegister from "../register/OrganiserRegister/OrganiserRegister";
import Login from "../login/Login/Login";
import ForgetPass from "../login/ForgetPass/ForgetPass";
import Search from "../search/Search/Search";
import ResetPass from "../login/ResetPass/ResetPass";
import Brands from "../brands/Brands/Brands";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/search",
            element: <Search></Search>,
         },
         {
            path: "/brands/:id",
            element: <Brands></Brands>,
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
            path: "reset-password",
            element: <ResetPass></ResetPass>,
         },
      ],
   },
   {
      path: "/sign-in",
      element: <RegisterLayout></RegisterLayout>,
      children: [
         {
            path: "/sign-in",
            element: <Login></Login>,
         },
         {
            path: "forget-password",
            element: <ForgetPass></ForgetPass>,
         },
      ],
   },
]);

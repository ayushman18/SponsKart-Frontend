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
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BrandRegister from "../register/BrandRegister/BrandRegister";
import ContentCreatorDashboard from "../dashboard/ContentCreatorDashboard/ContentCreatorDashboard";
import ContactUs from "../ContactUs/ContactUs";
import Brands from "../Details/Brands/Brands";

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
            path: "/brand/:id",
            element: <Brands></Brands>,
         },
         {
            path: "/Organizer/:id",
            element: <Brands></Brands>,
         },
         {
            path: "/user/:id",
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
            path: "brand",
            element: <BrandRegister></BrandRegister>,
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
         {
            path: "reset-password",
            element: <ResetPass></ResetPass>,
         },
      ],
   },
   {
      path: "/contact-us",
      element: <ContactUs></ContactUs>,
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>
      ),
      children: [
         {
            path: "user",
            element: <ContentCreatorDashboard></ContentCreatorDashboard>,
         },
         {
            path: "Organizer",
            element: <ContentCreatorDashboard></ContentCreatorDashboard>,
         },
      ],
   },
]);

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
import ContactUs from "../ContactUs/ContactUs";
import Brands from "../Details/Brands/Brands";
import CreatorProfile from "../dashboard/ContentCreatorDashboard/CreatorProfile/CreatorProfile";
import CreatorUpdateProfile from "../dashboard/ContentCreatorDashboard/CreatorUpdateProfile/CreatorUpdateProfile";
import BrandAddPost from "../dashboard/BrandDashboard/BrandAddPost/BrandAddPost";
import BrandManagePost from "../dashboard/BrandDashboard/BrandManagePost/BrandManagePost";
import CreatorAddPost from "../dashboard/ContentCreatorDashboard/CreatorAddPost/CreatorAddPost";
import CreatorManagePost from "../dashboard/ContentCreatorDashboard/CreatorManagePost/CreatorManagePost";
import OrganizerProfile from "../dashboard/OrganizerDashboard/OrganizerProfile/OrganizerProfile";
import OrganizerUpdateProfile from "../dashboard/OrganizerDashboard/OrganizerUpdateProfile/OrganizerUpdateProfile";
import OrganizerAddPost from "../dashboard/OrganizerDashboard/OrganizerAddPost/OrganizerAddPost";
import OrganizerManagePost from "../dashboard/OrganizerDashboard/OrganizerManagePost/OrganizerManagePost";
import BrandProfile from "../dashboard/BrandDashboard/BrandProfile/BrandProfile";
import BrandUpdateProfile from "../dashboard/BrandDashboard/BrandUpdateProfile/BrandUpdateProfile";

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

            children: [
               {
                  path: "profile",
                  element: <CreatorProfile></CreatorProfile>,
               },
               {
                  path: "updateProfile",
                  element: <CreatorUpdateProfile></CreatorUpdateProfile>,
               },
               {
                  path: "addPost",
                  element: <CreatorAddPost></CreatorAddPost>,
               },
               {
                  path: "managePost",
                  element: <CreatorManagePost></CreatorManagePost>,
               },
            ],
         },
         {
            path: "Organizer",
            children: [
               {
                  path: "profile",
                  element: <OrganizerProfile></OrganizerProfile>,
               },
               {
                  path: "updateProfile",
                  element: <OrganizerUpdateProfile></OrganizerUpdateProfile>,
               },
               {
                  path: "addPost",
                  element: <OrganizerAddPost></OrganizerAddPost>,
               },
               {
                  path: "managePost",
                  element: <OrganizerManagePost></OrganizerManagePost>,
               },
            ],
         },
         {
            path: "brand",

            children: [
               {
                  path: "profile",
                  element: <BrandProfile></BrandProfile>,
               },
               {
                  path: "updateProfile",
                  element: <BrandUpdateProfile></BrandUpdateProfile>,
               },

               {
                  path: "addPost",
                  element: <BrandAddPost></BrandAddPost>,
               },
               {
                  path: "managePost",
                  element: <BrandManagePost></BrandManagePost>,
               },
            ],
         },
      ],
   },
]);

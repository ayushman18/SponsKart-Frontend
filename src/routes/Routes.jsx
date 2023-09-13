import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home/Home";
import Register from "../register/Register/Register";
import RegisterLayout from "../layouts/RegisterLayout";
import ContentCreatorRegister from "../register/ContentCreatorRegister/ContentCreatorRegister";
import OrganizerRegister from "../register/OrganizerRegister/OrganizerRegister";
import Login from "../login/Login/Login";
import ForgetPass from "../login/ForgetPass/ForgetPass";
import Search from "../search/Search/Search";
import ResetPass from "../login/ResetPass/ResetPass";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BrandRegister from "../register/BrandRegister/BrandRegister";
import ContactUs from "../ContactUs/ContactUs";
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
import BrandDetails from "../Details/brand/BrandDetails/BrandDetails";
import OrganizerDetails from "../Details/organizer/OrganizerDetails/OrganizerDetails";
import CreatorDetails from "../Details/creator/CreatorDetails/CreatorDetails";
import ChatBox from "../dashboard/ChatBox/ChatBox";
import MessageBox from "../dashboard/ChatBox/MessageBox";
import MessageCard from "../dashboard/ChatBox/MessageCard";
import MobileChatbox from "../dashboard/ChatBox/MobileChatbox";
import CreatorRoute from "./PrivateRoute/CreatorRoute";
import OrganizerRoute from "./PrivateRoute/OrganizerRoute";
import BrandRoute from "./PrivateRoute/BrandRoute";
import AboutUs from "../AboutUs/AboutUs";
import HowItWorks from "../HowItWorks/HowItWorks";
import TrustAndSafety from "../TrustAndSafety/TrustAndSafety";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

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
            element: <BrandDetails></BrandDetails>,
         },
         {
            path: "/organizer/:id",
            element: <OrganizerDetails></OrganizerDetails>,
         },
         {
            path: "/creator/:id",
            element: <CreatorDetails></CreatorDetails>,
            loader: ({ params }) => fetch(`https://sponskart-hkgd.onrender.com/creator/get/${params.id}`),
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
            path: "organizer",
            element: <OrganizerRegister></OrganizerRegister>,
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
      path: "/about-us",
      element: <AboutUs></AboutUs>,
   },
   {
      path: "/how-it-works",
      element: <HowItWorks></HowItWorks>,
   },
   {
      path: "/trust-and-safety",
      element: <TrustAndSafety></TrustAndSafety>,
   },
   {
      path: "/privacy-policy",
      element: <PrivacyPolicy></PrivacyPolicy>,
   },
   {
      path: "/terms-conditions",
      element: <TermsAndConditions></TermsAndConditions>,
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
            path: "creator",
            element: (
               <CreatorRoute>
                  <Outlet></Outlet>
               </CreatorRoute>
            ),
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
            element: (
               <OrganizerRoute>
                  <Outlet></Outlet>
               </OrganizerRoute>
            ),
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
            element: (
               <BrandRoute>
                  <Outlet></Outlet>
               </BrandRoute>
            ),
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
         {
            path: "messages",
            element: <ChatBox></ChatBox>,
            children: [
               {
                  path: ":id",
                  element: <MessageBox></MessageBox>,
               },
            ],
         },
         {
            path: "mobile-messages",
            element: <MobileChatbox></MobileChatbox>,
            children: [
               {
                  path: "",
                  element: <MessageCard></MessageCard>,
               },
               {
                  path: ":id",
                  element: <MessageBox></MessageBox>,
               },
            ],
         },
      ],
   },
]);

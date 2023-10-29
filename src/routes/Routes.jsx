import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import Home from "../pages/home/Home/Home";
import Search from "../pages/search/Search/Search";
import BrandDetails from "../pages/Details/brand/BrandDetails/BrandDetails";
import OrganizerDetails from "../pages/Details/organizer/OrganizerDetails/OrganizerDetails";
import CreatorDetails from "../pages/Details/creator/CreatorDetails/CreatorDetails";
import BrandPostDetails from "../pages/Details/brand/BrandPostDetails/BrandPostDetails";
import Register from "../pages/register/Register/Register";
import ContentCreatorRegister from "../pages/register/ContentCreatorRegister/ContentCreatorRegister";
import BrandRegister from "../pages/register/BrandRegister/BrandRegister";
import OrganizerRegister from "../pages/register/OrganizerRegister/OrganizerRegister";
import Login from "../pages/login/Login/Login";
import ForgetPass from "../pages/login/ForgetPass/ForgetPass";
import ResetPass from "../pages/login/ResetPass/ResetPass";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import TrustAndSafety from "../pages/TrustAndSafety/TrustAndSafety";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CreatorRoute from "./PrivateRoute/CreatorRoute";
import OrganizerRoute from "./PrivateRoute/OrganizerRoute";
import BrandRoute from "./PrivateRoute/BrandRoute";
import CreatorUpdateProfile from "../pages/dashboard/ContentCreatorDashboard/CreatorUpdateProfile/CreatorUpdateProfile";
import CreatorAddPost from "../pages/dashboard/ContentCreatorDashboard/CreatorAddPost/CreatorAddPost";
import CreatorManagePost from "../pages/dashboard/ContentCreatorDashboard/CreatorManagePost/CreatorManagePost";
import OrganizerUpdateProfile from "../pages/dashboard/OrganizerDashboard/OrganizerUpdateProfile/OrganizerUpdateProfile";
import OrganizerAddPost from "../pages/dashboard/OrganizerDashboard/OrganizerAddPost/OrganizerAddPost";
import OrganizerManagePost from "../pages/dashboard/OrganizerDashboard/OrganizerManagePost/OrganizerManagePost";
import BrandUpdateProfile from "../pages/dashboard/BrandDashboard/BrandUpdateProfile/BrandUpdateProfile";
import BrandAddPost from "../pages/dashboard/BrandDashboard/BrandAddPost/BrandAddPost";
import BrandManagePost from "../pages/dashboard/BrandDashboard/BrandManagePost/BrandManagePost";
import ChatBox from "../pages/dashboard/ChatBox/ChatBox";
import MessageBox from "../pages/dashboard/ChatBox/MessageBox";
import MobileChatbox from "../pages/dashboard/ChatBox/MobileChatbox";
import MessageCard from "../pages/dashboard/ChatBox/MessageCard";
import BrandUpdatePost from "../pages/dashboard/BrandDashboard/BrandUpdatePost/BrandUpdatePost";
import BasicRegister from "../pages/register/BasicRegister/BasicRegister";
import ViewProposal from "../pages/Details/brand/ViewProposal/ViewProposal";
import ProposalDetails from "../pages/Details/brand/ProposalDetails/ProposalDetails";

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
            loader: ({ params }) => fetch(`https://sponskart-server.onrender.com/brand/get/${params.id}`),
         },
         {
            path: "/organizer/:id",
            element: <OrganizerDetails></OrganizerDetails>,
            loader: ({ params }) => fetch(`https://sponskart-server.onrender.com/organizer/get/${params.id}`),
         },
         {
            path: "/creator/:id",
            element: <CreatorDetails></CreatorDetails>,
            loader: ({ params }) => fetch(`https://sponskart-server.onrender.com/creator/get/${params.id}`),
         },
         {
            path: "/post/brand/:id",
            element: (
               <PrivateRoute>
                  <BrandPostDetails></BrandPostDetails>
               </PrivateRoute>
            ),
         },
         {
            path: "/view-proposal/:id",
            element: (
               <PrivateRoute>
                  <ViewProposal></ViewProposal>
               </PrivateRoute>
            ),
         },
         {
            path: "/proposal-details",
            element: (
               <PrivateRoute>
                  <ProposalDetails></ProposalDetails>
               </PrivateRoute>
            ),
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
            path: "basic-register",
            element: <BasicRegister></BasicRegister>,
         },
         {
            path: "creator",
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
               {
                  path: "updatePost/:id",
                  element: <BrandUpdatePost></BrandUpdatePost>,
                  loader: ({ params }) =>
                     fetch(`https://sponskart-server.onrender.com/brand/post?postId=${params.id}`),
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

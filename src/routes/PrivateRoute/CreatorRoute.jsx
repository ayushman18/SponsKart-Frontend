import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const CreatorRoute = ({ children }) => {
   const { user } = useAuth();
   const location = useLocation();

   if (user.user.type !== "creator") {
      Swal.fire({
         position: "center",
         icon: "error",
         title: "Your are not a Content Creator",
         showConfirmButton: false,
         timer: 1500,
      });
      return <Navigate to="/" state={location} replace={true}></Navigate>;
   }

   return children;
};

export default CreatorRoute;

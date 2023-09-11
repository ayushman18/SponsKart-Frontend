import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const BrandRoute = ({ children }) => {
   const { user } = useAuth();
   const location = useLocation();

   if (user.user.type !== "brand") {
      Swal.fire({
         position: "center",
         icon: "error",
         title: "Your are not a Content Brand",
         showConfirmButton: false,
         timer: 1500,
      });
      return <Navigate to="/" state={location} replace={true}></Navigate>;
   }

   return children;
};

export default BrandRoute;

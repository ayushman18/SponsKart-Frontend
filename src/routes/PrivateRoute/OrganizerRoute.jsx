import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

const OrganizerRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   if (loading) {
      return <Loading />;
   }
   if (user.user.type !== "organizer") {
      Swal.fire({
         position: "center",
         icon: "error",
         title: "Your are not a Event Organizer",
         showConfirmButton: false,
         timer: 1500,
      });
      return <Navigate to="/" state={location} replace={true}></Navigate>;
   }

   return children;
};

export default OrganizerRoute;

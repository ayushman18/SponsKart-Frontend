import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user } = useAuth();
   const location = useLocation();

   if (!user) {
      return <Navigate to="/sign-in" state={location} replace={true}></Navigate>;
   }

   return children;
};

export default PrivateRoute;

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   if (loading) {
      return <Loading />;
   }

   if (!user) {
      return <Navigate to="/sign-in" state={location} replace={true}></Navigate>;
   }

   return children;
};

export default PrivateRoute;

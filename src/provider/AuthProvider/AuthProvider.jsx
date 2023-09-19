import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const loggedUser = JSON.parse(localStorage.getItem("user"));
   const [user, setUser] = useState(loggedUser || null);
   // console.log(user);

   const logOut = () => {
      localStorage.removeItem("user");
      setUser(null);
   };

   const authContext = {
      user,
      setUser,
      logOut,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
   FacebookAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendEmailVerification,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateEmail,
   updatePhoneNumber,
   updateProfile,
} from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const auth = getAuth(app);

// component Auth Provider Here

const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);
   const [firebaseUser, setFirebaseUser] = useState(null);

   //    google login
   const googleProvider = new GoogleAuthProvider();
   const facebookProvider = new FacebookAuthProvider();

   // google Login
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };
   // facebook Login
   const facebookLogin = () => {
      return signInWithPopup(auth, facebookProvider);
   };

   //  Email Pass login

   const emailPassSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const emailPassSignIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   //    update user
   const updateUser = (data) => {
      const { name, photoUrl } = data;
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photoUrl,
      });
   };

   // todo: update mobile number
   const updateMobileNumber = (number) => {
      return updatePhoneNumber(auth.currentUser, { phoneNumber: number });
   };

   // update Email
   const updateNewEmail = (email) => {
      return updateEmail(auth.currentUser, email);
   };

   //    reset password

   const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
   };

   // verify email
   const verifyEmail = () => {
      sendEmailVerification(auth.currentUser).then(() => {
         Swal.fire({
            position: "center",
            icon: "success",
            title: `Please check your email. Verify Email sent`,
            showConfirmButton: false,
            timer: 1000,
         });
      });
   };

   // !log out function

   const logOut = () => {
      signOut(auth)
         .then(() => {
            setUser(null);
            Swal.fire({
               position: "center",
               icon: "success",
               title: "User Logout Successful",
               showConfirmButton: false,
               timer: 1500,
            });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   // Monitoring User Here

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
         setFirebaseUser(loggedUser);
         console.log(loggedUser);

         if (loggedUser) {
            axios
               .post("https://sponskart-server.onrender.com/signin", { email: loggedUser?.email })
               .then((res) => {
                  setLoading(false);
                  setUser(res.data.data);
                  console.log(res.data.data);
                  localStorage.setItem("token", res.data.data.token);
               })
               .catch((err) => {
                  setLoading(false);
                  console.log(err);
               });
         } else {
            setUser(null);
            setLoading(false);
            localStorage.remove("token");
         }
      });
      return () => unsubscribe();
   }, [firebaseUser]);

   //    All are exporting from here
   const authContext = {
      user,
      firebaseUser,
      loading,
      setUser,
      setLoading,
      googleLogin,
      facebookLogin,
      emailPassSignUp,
      emailPassSignIn,
      updateUser,
      resetPassword,
      logOut,
      verifyEmail,
      updateMobileNumber,
      updateNewEmail,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

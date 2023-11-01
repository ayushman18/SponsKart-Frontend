import { FaFacebookF, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/apiInstance";

const SocialSignUp = ({ role, register, setLoading }) => {
   const { googleLogin, facebookLogin, deleteRegisterUser } = useAuth();
   const navigate = useNavigate();

   const handelGoogleLogin = () => {
      setLoading(true);

      googleLogin()
         .then((res) => {
            console.log(res.user);
            if (res.user && register) {
               api.post("register", {
                  name: res.user.displayName,
                  email: res.user.email,
                  type: role,
               })
                  .then((res) => {
                     setLoading(false);
                     navigate(`/register/${role}`, { state: res.data.data.result });
                     console.log(res.data.data.result);
                  })
                  .catch((err) => {
                     setLoading(false);
                     console.log(err.response.data.message);
                     if (err.response.data) {
                        toast.error(err.response.data.message);
                        navigate("/");
                     }
                  });
            } else {
               api.post("/signin", { email: res.user.email })
                  .then((res) => {
                     console.log(res);
                     setLoading(false);
                     navigate("/");
                     window.location.reload();
                  })
                  .catch((err) => {
                     setLoading(false);
                     toast.error(err.response.data.message);
                     deleteRegisterUser(res.user)
                        .then(() => console.log("userDeleted"))
                        .catch((err) => console.log(err));
                  });
            }
         })
         .catch((err) => {
            setLoading(false);
            console.log(err);
            toast.error("An error occurred while creating user. Please try again");
         });
   };
   const handelFacebookLogin = () => {
      facebookLogin()
         .then((res) => {
            console.log(res.user);
            if (res.user) {
               api.post("register", {
                  name: res.user.displayName,
                  email: res.user.email,
                  type: role,
               })
                  .then((res) => {
                     navigate(`/register/${role}`, { state: res.data.data.result });
                     console.log(res.data.data.result);
                  })
                  .catch((err) => console.log(err));
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("An error occurred while creating user. Please try again");
         });
   };

   return (
      <div>
         <div className="divider">Or Sign in with</div>
         <button
            className="btn btn-circle btn-outline mr-4 hover:bg-red-500 hover:border-red-500 text-xl"
            onClick={handelGoogleLogin}
         >
            <FaGoogle></FaGoogle>
         </button>
         <button
            className="btn btn-circle btn-outline hover:bg-blue-600 hover:border-blue-600 text-xl"
            onClick={handelFacebookLogin}
         >
            <FaFacebookF></FaFacebookF>
         </button>
      </div>
   );
};

export default SocialSignUp;

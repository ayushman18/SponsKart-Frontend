import { Link } from "react-router-dom";
import bgImg from "./../../../assets/home/privacy-policy.jpg";

const PrivacyPolicy = () => {
   return (
      <Link to={"/privacy-policy"}>
         <div
            className="lg:h-[360px] py-8 container mx-auto w-full text-white bg-no-repeat bg-cover my-20 flex flex-col justify-center items-center"
            style={{ backgroundImage: `url('${bgImg}')` }}
         >
            <h2 className="text-5xl lg:text-7xl mb-4">Privacy Policy</h2>
            <p className="text-2xl">Home / Privacy Policy</p>
         </div>
      </Link>
   );
};

export default PrivacyPolicy;

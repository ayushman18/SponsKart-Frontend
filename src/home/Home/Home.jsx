import Footer from "../../Shared/Footer/Footer";
import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import JoinNow from "../JoinNow/JoinNow";
import Navbar from "../Navbar/Navbar";
import PickedCategory from "../PickedCategory/PickedCategory";
import PopularService from "../PopularService/PopularService";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Sponsors from "../Sponsors/Sponsors";
import "./Home.css";

const Home = () => {
   return (
      <>
         <header className="header">
            <Navbar></Navbar>
            <Banner></Banner>
         </header>
         <main>
            <Sponsors></Sponsors>
            <PopularService></PopularService>
            <Awards></Awards>
            <PickedCategory></PickedCategory>
            <JoinNow></JoinNow>
            <PrivacyPolicy></PrivacyPolicy>
         </main>
         <Footer></Footer>
      </>
   );
};

export default Home;

import Footer from "../../../Shared/Footer/Footer";
import Awards from "../Awards/Awards";

import JoinNow from "../JoinNow/JoinNow";

import PickedCategory from "../PickedCategory/PickedCategory";
import PopularService from "../PopularService/PopularService";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Sponsors from "../Sponsors/Sponsors";
import "./Home.css";

const Home = () => {
   return (
      <>
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

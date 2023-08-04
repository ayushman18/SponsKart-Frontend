import Articles from "../Articles/Articles";
import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import PickedCategory from "../PickedCategory/PickedCategory";
import PopularService from "../PopularService/PopularService";
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
            <Awards></Awards>
            <Articles></Articles>
         </main>
      </>
   );
};

export default Home;

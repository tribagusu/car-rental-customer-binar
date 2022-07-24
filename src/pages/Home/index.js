import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Strength from "../../components/Strength";
import Testimonial from "../../components/Testimonial";
import { strList, checkIcon, starsIcon } from "../../const/staticData";
import CallToAction from "../../components/CallToAction";

const Home = () => {
  const props = {
    strList,
    checkIcon,
    starsIcon,
  };

  return (
    <div>
      <Navigation />
      <Hero />
      <Services {...props} />
      <Strength />
      <Testimonial {...props} />
      <CallToAction />
    </div>
  );
};

export default Home;

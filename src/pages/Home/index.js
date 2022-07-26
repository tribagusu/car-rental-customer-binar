import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Strength from "../../components/Strength";
import Testimonial from "../../components/Testimonial";
import CallToAction from "../../components/CallToAction";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

import {
  strList,
  checkIcon5,
  dataTestimoni,
  faq,
  socialMediaLogo,
  FooterNav,
} from "../../const/staticData";

const Home = () => {
  const props = {
    strList,
    checkIcon5,
    dataTestimoni,
    faq,
    socialMediaLogo,
    FooterNav,
  };

  return (
    <div>
      <Navigation />
      <Hero />
      <Services {...props} />
      <Strength />
      <Testimonial {...props} />
      <CallToAction />
      <Faq {...props} />
      <Footer {...props} />
    </div>
  );
};

export default Home;

import React from "react";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Strength from "../../components/Strength";
import Testimonial from "../../components/Testimonial";
import CallToAction from "../../components/CallToAction";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import { servicesList } from "../../components/Services/data";
import { strengthCard } from "../../components/Strength/data";
import { faq } from "../../components/Faq/data";
import { dataTestimoni } from "../../components/Testimonial/data";
import { NavMenu } from "../../components/Navigation/data";

import {
  checkIcon5,
  socialMediaLogo,
  ButtonSewa,
  angleLeftIcon,
  angleRightIcon,
} from "../../const/staticData";

const Home = () => {
  const props = {
    servicesList,
    checkIcon5,
    dataTestimoni,
    faq,
    socialMediaLogo,
    NavMenu,
    ButtonSewa,
    strengthCard,
    angleLeftIcon,
    angleRightIcon,
  };

  return (
    <div>
      <Navigation {...props} />
      <Hero {...props} />
      <Services {...props} />
      <Strength {...props} />
      <Testimonial {...props} />
      <CallToAction {...props} />
      <Faq {...props} />
      <Footer {...props} />
    </div>
  );
};

export default Home;

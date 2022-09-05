//# components
import Navigation from "../../components/LandingPage/Navigation"
import Hero from "../../components/LandingPage/Hero"
import Services from "../../components/LandingPage/Services"
import Strength from "../../components/LandingPage/Strength"
import Testimonial from "../../components/LandingPage/Testimonial"
import CallToAction from "../../components/LandingPage/CallToAction"
import Faq from "../../components/LandingPage/Faq"
import Footer from "../../components/LandingPage/Footer"

import { servicesList } from "../../components/LandingPage/Services/data"
import { strengthCard } from "../../components/LandingPage/Strength/data"
import { faq } from "../../components/LandingPage/Faq/data"
import { dataTestimoni } from "../../components/LandingPage/Testimonial/data"
import { NavMenu } from "../../components/LandingPage/Navigation/data"

import {
  checkIcon5,
  socialMediaLogo,
  ButtonSewa,
  angleLeftIcon,
  angleRightIcon,
} from "../../const/staticData"

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
  }

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
  )
}

export default Home

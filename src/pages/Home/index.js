//# components
import Navigation from "../../components/LandingPage/Navigation"
import Hero from "../../components/LandingPage/Hero"
import Services from "../../components/LandingPage/Services"
import Strength from "../../components/LandingPage/Strength"
import Testimonial from "../../components/LandingPage/Testimonial"
import CallToAction from "../../components/LandingPage/CallToAction"
import Faq from "../../components/LandingPage/Faq"
import Footer from "../../components/LandingPage/Footer"

import { ButtonSewa } from "../../const/staticData"

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero ButtonSewa={ButtonSewa} />
      <Services />
      <Strength />
      <Testimonial />
      <CallToAction />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home

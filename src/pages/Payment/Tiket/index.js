import React from "react"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import { NavMenu } from "../../../components/LandingPage/Navigation/data"
import { socialMediaLogo } from "../../../const/staticData"
import TiketCard from "../../../components/Payment/TiketCard"

const props = {
  NavMenu,
  socialMediaLogo,
}

const Tiket = () => {
  return (
    <section>
      <Navigation {...props} />
      <HeaderHero />
      <TiketCard />
      <Footer {...props} />
    </section>
  )
}

export default Tiket

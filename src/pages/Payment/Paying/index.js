import React from "react"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import { NavMenu } from "../../../components/LandingPage/Navigation/data"
import { socialMediaLogo } from "../../../const/staticData"

const props = {
  NavMenu,
  socialMediaLogo,
}

const PayingProcess = () => {
  return (
    <section>
      <Navigation {...props} />
      <HeaderHero />
      <Footer {...props} />
    </section>
  )
}

export default PayingProcess

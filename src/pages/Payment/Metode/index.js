import React from "react"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import { NavMenu } from "../../../components/LandingPage/Navigation/data"
import { socialMediaLogo } from "../../../const/staticData"
import OrderSummaryCard from "../../../components/Payment/OrderSummaryCard"

const props = {
  NavMenu,
  socialMediaLogo,
}

const PaymentMethod = () => {
  return (
    <section>
      <Navigation {...props} />
      <HeaderHero />
      <OrderSummaryCard />
      <Footer {...props} />
    </section>
  )
}

export default PaymentMethod

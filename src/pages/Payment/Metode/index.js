import React from "react"

//# components
import HeaderHero from "../../../components/HeaderHero"
import Navigation from "../../../components/Navigation"
import Footer from "../../../components/Footer"
import { NavMenu } from "../../../components/Navigation/data"
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

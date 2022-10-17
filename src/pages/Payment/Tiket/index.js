import React from "react"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import TiketCard from "../../../components/Payment/TiketCard"

const Tiket = () => {
  return (
    <section>
      <Navigation />
      <HeaderHero />
      <TiketCard />
      <Footer />
    </section>
  )
}

export default Tiket

//# style
import "./style.css"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import OrderSummaryCard from "../../../components/Payment/OrderSummaryCard"
import BankTransferCard from "../../../components/Payment/BankTransferCard"

import { NavMenu } from "../../../components/LandingPage/Navigation/data"
import { socialMediaLogo, userGroupIcon } from "../../../const/staticData"
import DetailCostCard from "../../../components/Payment/DetailCostCard"

const props = {
  NavMenu,
  socialMediaLogo,
  userGroupIcon,
}

const PaymentMethod = () => {
  return (
    <section>
      <Navigation {...props} />
      <HeaderHero />
      <OrderSummaryCard />
      <div className="payment-method-container">
        <BankTransferCard />
        <DetailCostCard {...props} />
      </div>
      <Footer {...props} />
    </section>
  )
}

export default PaymentMethod

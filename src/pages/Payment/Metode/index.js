import { Navigate } from "react-router-dom"

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
import DetailOrderCard from "../../../components/Payment/DetailOrderCard"

//# redux
import { useSelector } from "react-redux"

const props = {
  NavMenu,
  socialMediaLogo,
  userGroupIcon,
}

const PaymentMethod = () => {
  // const { token } = useSelector((state) => state.authReducer)
  const user = localStorage.getItem("token")

  return (
    <>
      {user ? (
        <section>
          <Navigation {...props} />
          <HeaderHero />
          <OrderSummaryCard />
          <div className="payment-method-container">
            <BankTransferCard />
            <DetailOrderCard {...props} />
          </div>
          <Footer {...props} />
        </section>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default PaymentMethod

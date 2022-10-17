import { Navigate } from "react-router-dom"

//# style
import "./style.css"

//# components
import HeaderHero from "../../../components/Payment/HeaderHero"
import Navigation from "../../../components/LandingPage/Navigation"
import Footer from "../../../components/LandingPage/Footer"
import OrderSummaryCard from "../../../components/Payment/OrderSummaryCard"
import BankTransferCard from "../../../components/Payment/BankTransferCard"
import DetailOrderCard from "../../../components/Payment/DetailOrderCard"

const PaymentMethod = () => {
  // const { token } = useSelector((state) => state.authReducer)
  const user = localStorage.getItem("token")

  return (
    <>
      {user ? (
        <section>
          <Navigation />
          <HeaderHero />
          <OrderSummaryCard />
          <div className="payment-method-container">
            <BankTransferCard />
            <DetailOrderCard />
          </div>
          <Footer />
        </section>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  )
}

export default PaymentMethod

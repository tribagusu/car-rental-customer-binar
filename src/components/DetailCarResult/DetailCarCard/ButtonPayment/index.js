//# style
import "./style.css"

//# react
import { useNavigate } from "react-router-dom"

//# redux
import { useSelector } from "react-redux"

const ButtonPayment = () => {
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)
  const { token } = useSelector((state) => state.authReducer)

  const navigate = useNavigate()

  const handleClick = () => {
    if (startDate && endDate) {
      navigate("/payment/metode")
    }
  }

  return (
    <div className="detail__result__button-payment">
      <button onClick={handleClick} className="button">
        Lanjutkan Pembayaran
      </button>
    </div>
  )
}

export default ButtonPayment

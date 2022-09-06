import "./style.css"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ButtonPayment = () => {
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate("/payment/metode")
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

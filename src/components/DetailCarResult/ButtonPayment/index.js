import "./style.css"
import React from "react"
import { Link } from "react-router-dom"

const ButtonPayment = () => {
  return (
    <div className="detail__result__button-payment">
      <Link to="/payment/metode">
        <button className="button">Lanjutkan Pembayaran</button>
      </Link>
    </div>
  )
}

export default ButtonPayment

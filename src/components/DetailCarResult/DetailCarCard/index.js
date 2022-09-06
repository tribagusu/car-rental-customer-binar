import React from "react"
import noImage from "../../../assets/no-image-available.png"
import NumberFormat from "react-number-format"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../func/NumberFormatter"

//# components
import RentalDate from "./DatePicker/index"
import ButtonPayment from "./ButtonPayment/index"

const DetailCarCard = (props) => {
  const { car, userGroupIcon } = props

  return (
    <div>
      {!!Object.keys(car).length ? (
        <div className="detail-car-card__container">
          <div className="detail-car-card__car-image">
            {!!car.image ? <img src={car.image} /> : <img src={noImage} />}
          </div>
          <h1>{car.name}</h1>
          <p>
            <span>{userGroupIcon}</span> {car.category}
          </p>
          <div className="detail-car-card__rental-date">
            <p>Tentukan lama sewa mobil (max. 7 hari)</p>
            <RentalDate />
          </div>
          <div className="detail-car-card__total-price">
            <p>Total</p>
            <div className="detail-car-card__total-price-detail">
              <p>{currencyFormatter(car.price)}</p>
            </div>
          </div>
          <ButtonPayment />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default DetailCarCard

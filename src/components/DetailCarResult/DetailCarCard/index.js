import React from "react"
import noImage from "../../../assets/no-image-available.png"
import NumberFormat from "react-number-format"

//# styles
import "./style.css"

//# components
import RentalDate from "./DatePicker/index"
import ButtonPayment from "./ButtonPayment/index"

const DetailCarCard = (props) => {
  const { car, userGroupIcon } = props

  return (
    <div>
      {!!Object.keys(car).length ? (
        <div className="DetailCarCard__container">
          <div className="DetailCarCard__car-image">
            {!!car.image ? <img src={car.image} /> : <img src={noImage} />}
          </div>
          <h1>{car.name}</h1>
          <p>
            {userGroupIcon} {car.category}
          </p>
          <div className="DetailCarCard__rental-date">
            <p>Tentukan lama sewa mobil (max. 7 hari)</p>
            <RentalDate />
          </div>
          <div className="DetailCarCard__total-price">
            <p>Total</p>
            <div className="DetailCarCard__total-price-detail">
              <p>Rp </p>
              <NumberFormat
                value={car.price}
                decimalSeparator=","
                thousandSeparator="."
              />
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

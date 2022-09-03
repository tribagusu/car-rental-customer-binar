import "./style.css"
import { Link } from "react-router-dom"
import noImage from "../../assets/no-image-available.png"
import NumberFormat from "react-number-format"
import DataDetailCar from "./detailCar"
import RentalDate from "./rentalDate"
import ButtonPayment from "./buttonPayment"

const DetailCarResult = (props) => {
  const { car, userGroupIcon, angleLeftIcon } = props

  return (
    <section className="detail__section">
      <div className="detail__hero"></div>
      <div className="detail__result__container">
        <div className="detail__result__info">
          <DataDetailCar />
          <div>
            <Link to="/carimobil" className="detail__result__button-back">
              <button className="button">{angleLeftIcon}</button>
            </Link>
          </div>
        </div>
        <div>
          {!!Object.keys(car).length ? (
            <div className="detail__result__car">
              <div className="detail__result__car-image">
                {!!car.image ? <img src={car.image} /> : <img src={noImage} />}
              </div>
              <h1>{car.name}</h1>
              <p>
                {userGroupIcon} {car.category}
              </p>
              <div className="detail__result__rental-date">
                <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                <RentalDate />
              </div>
              <div className="detail__result__total-price">
                <p>Total</p>
                <div className="detail__result__total-price-detail">
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
      </div>
    </section>
  )
}

export default DetailCarResult

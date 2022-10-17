import noImage from "../../../assets/no-image-available.png"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../utils/numberFormatter"
import { rentDayCalculator } from "../../../utils/rentDayCalculator"

//# components
import RentalDate from "./DatePicker/index"
import { userGroupIcon } from "../../../const/staticData"

const DetailCarCard = () => {
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  // format currency
  const carPrice = currencyFormatter(car.price)

  // calculation
  const totalRentalDays = rentDayCalculator(startDate, endDate)
  const totalRentalPrice = currencyFormatter(totalRentalDays * car.price)

  // function
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/payment/metode")
  }

  return (
    <div>
      <div className="detail-car-card__container">
        <div className="detail-car-card__car-image">
          {!!car.image ? (
            <img src={car.image} alt="car" />
          ) : (
            <img src={noImage} alt="nocar" />
          )}
        </div>
        <h1>{car.name}</h1>
        <p>
          <span>{userGroupIcon}</span> {car.category}
        </p>
        <>
          <div className="detail-car-card__rental-date">
            <p>Tentukan lama sewa mobil (max. 7 hari)</p>
            <RentalDate />
          </div>
          <div className="detail-car-card__total-price">
            <p>Total</p>
            <div className="detail-car-card__total-price-detail">
              <p>
                {totalRentalPrice.includes(NaN) ? carPrice : totalRentalPrice}
              </p>
            </div>
          </div>
          <div className="detail__result__button-payment">
            <button onClick={handleClick} className="button">
              Lanjutkan Pembayaran
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default DetailCarCard

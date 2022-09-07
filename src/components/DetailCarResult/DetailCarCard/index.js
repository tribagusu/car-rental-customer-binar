import noImage from "../../../assets/no-image-available.png"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../utils/numberFormatter"
import { rentDayCalculator } from "../../../utils/rentDayCalculator"

//# components
import RentalDate from "./DatePicker/index"
import ButtonPayment from "./ButtonPayment/index"

const DetailCarCard = (props) => {
  const { userGroupIcon } = props
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  // format currency
  const carPrice = currencyFormatter(car.price)

  // calculation
  const totalRentalDays = rentDayCalculator(startDate, endDate)
  const totalRentalPrice = currencyFormatter(totalRentalDays * car.price)

  return (
    <div>
      <div className="detail-car-card__container">
        <div className="detail-car-card__car-image">
          {!!car.image ? <img src={car.image} /> : <img src={noImage} />}
        </div>
        <h1>{car.name}</h1>
        <p>
          <span>{userGroupIcon}</span> {car.category}
        </p>
        <form action="">
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
          <ButtonPayment />
        </form>
      </div>
    </div>
  )
}

export default DetailCarCard

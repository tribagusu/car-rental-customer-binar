import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../utils/numberFormatter"
import { rentDayCalculator } from "../../../utils/rentDayCalculator"

//# data
import { costItems } from "./data"

const DetailPriceCard = ({ userGroupIcon }) => {
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  // format currency
  const carPrice = currencyFormatter(car.price)

  // calculation
  const totalRentalDays = rentDayCalculator(startDate, endDate)
  const totalRentalPrice = currencyFormatter(totalRentalDays * car.price)

  return (
    <>
      <div className="detail-order-card__container">
        <div className="detail-order-card__car">
          <h4>{car.name}</h4>
          <p>
            <span>{userGroupIcon}</span> {car.category}
          </p>
        </div>
        <div className="detail-order-card__total">
          <div className="detail-order-card__total-all">
            <p>Total</p>
            <small>{totalRentalPrice}</small>
          </div>
          <div className="detail-order-card__total-detail">
            <div className="detail-order-card__total-cost">
              <h4>Harga</h4>
              <div>
                <li>
                  Sewa Mobil {carPrice} x {totalRentalDays} Hari
                </li>
                <p>{totalRentalPrice}</p>
              </div>
            </div>
            {costItems.map((item) => (
              <div key={item.id} className="detail-order-card__cost-items">
                <h4>{item.title}</h4>
                <div>
                  <li>{item.item1}</li>
                  <small>{item.note1}</small>
                </div>
                <div>
                  <li>{item.item2}</li>
                  <small>{item.note2}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="detail-order-card__total-all">
          <p>Total</p>
          <small>{totalRentalPrice}</small>
        </div>
        <Link to="payment/paying">
          <button className="button">Bayar</button>
        </Link>
      </div>
    </>
  )
}

export default DetailPriceCard

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../func/numberFormatter"

//# data
import { costItems } from "./data"

const DetailPriceCard = ({ userGroupIcon }) => {
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  // format currency
  const carPrice = currencyFormatter(car.price)

  // convert object to date format
  const newStartDate = new Date(startDate).toLocaleDateString()
  const newEndDate = new Date(endDate).toLocaleDateString()

  // take date only
  const startDay = newStartDate.slice(2, 3)
  const endDay = newEndDate.slice(2, 3)

  // calculation
  const totalRent = Math.floor(endDay) - Math.floor(startDay)
  const totalPrice = currencyFormatter(totalRent * car.price)

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
          <div>
            <p>Total</p>
            <p>{totalPrice}</p>
            <div className="detail-order-card__total-detail">
              <div className="detail-order-card__total-cost">
                <h4>Harga</h4>
                <div>
                  <li>
                    Sewa Mobil {carPrice} x {totalRent} Hari
                  </li>
                  <p>{totalPrice}</p>
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
        </div>
        <div className="detail-order-card__total-all">
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
        <Link to="payment/paying">
          <button className="button">Bayar</button>
        </Link>
      </div>
    </>
  )
}

export default DetailPriceCard

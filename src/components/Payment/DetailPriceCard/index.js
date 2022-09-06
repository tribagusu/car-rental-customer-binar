import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

//# function
import { currencyFormatter } from "../../../func/NumberFormatter"

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
      <div className="detail-price-card__container">
        <div className="detail-price-card__car">
          <h4>{car.name}</h4>
          <p>
            <span>{userGroupIcon}</span> {car.category}
          </p>
        </div>
        <div className="detail-price-card__total-cost">
          <div>
            <p>Total</p>
            <p>{totalPrice}</p>
            <div className="detail-price-card__total-detail">
              <>
                <h4>Harga</h4>
                <div>
                  <li>
                    Sewa Mobil {carPrice} x {totalRent}
                  </li>
                  <p>{totalPrice}</p>
                </div>
              </>
              <>
                <h4>Biaya Lainnya</h4>
                <div>
                  <li>Pajak</li>
                  <small>Termasuk</small>
                </div>
                <div>
                  <li>Biaya makan sopir</li>
                  <small>Termasuk</small>
                </div>
              </>
              <>
                <h4>Belum Termasuk</h4>
                <div>
                  <li>Bensin</li>
                </div>
                <div>
                  <li>Tol dan Parkir</li>
                </div>
              </>
            </div>
          </div>
        </div>
        <div className="detail-price-card__total-all"></div>
        <Link to="payment/paying">
          <button className="button">Bayar</button>
        </Link>
      </div>
    </>
  )
}

export default DetailPriceCard

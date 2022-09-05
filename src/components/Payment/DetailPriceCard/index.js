import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

const DetailPriceCard = ({ userGroupIcon }) => {
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  const newStartDate = new Date(startDate).toLocaleDateString()
  const newEndDate = new Date(endDate).toLocaleDateString()

  const startDay = newStartDate.slice(2, 3)
  const endDay = newEndDate.slice(2, 3)
  const totalRent = Math.floor(endDay) - Math.floor(startDay)
  const totalPrice = totalRent * car.price

  return (
    <>
      <div className="detail-price-card__container">
        <div className="detail-price-card__car">
          <h4>{car.name}</h4>
          <p>
            <span>{userGroupIcon}</span> {car.category}
          </p>
        </div>
        <div className="detail-price-card__total-detail">
          <div>
            <p>
              Total Rp
              <span>
                <NumberFormat
                  value={totalPrice}
                  decimalSeparator=","
                  thousandSeparator="."
                />
              </span>
            </p>
          </div>
          <div>
            <h3>Harga</h3>
            <ul>
              <li>
                <p>
                  Sewa Mobil Rp
                  <span>
                    <NumberFormat
                      value={car.price}
                      decimalSeparator=","
                      thousandSeparator="."
                    />
                  </span>
                  x {totalRent}
                </p>
              </li>
            </ul>
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

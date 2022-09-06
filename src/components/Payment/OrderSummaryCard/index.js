//# style
import "./style.css"

//# redux
import { useSelector } from "react-redux"

const OrderSummaryCard = () => {
  const { car } = useSelector((state) => state.carReducer)
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)

  const newStartDate = new Date(startDate).toLocaleDateString("en-AU")
  const newEndDate = new Date(endDate).toLocaleDateString("en-AU")

  return (
    <div className="order-summary__section1">
      <div className="order-summary__section2">
        <div className="order-summary__container">
          <h3>Detail Pesananmu</h3>
          <div className="order-summary__detail">
            <div>
              <h4>Nama/Tipe Mobil</h4>
              <p>{car.name}</p>
            </div>
            <div>
              <h4>Kategori</h4>
              <p>{car.category}</p>
            </div>
            <div>
              <h4>Tanngal Mulai Sewa</h4>
              <p>{newStartDate}</p>
            </div>
            <div>
              <h4>Tanggal Akhir Sewa</h4>
              <p>{newEndDate}</p>
            </div>
            <div className="order-summary__button"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryCard

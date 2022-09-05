import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"

//# styles
import "./style.css"

//# components
// import ButtonPayment from "./ButtonPayment/index"

const DetailCostCard = (props) => {
  const { car } = props
  return (
    <>
      {!!Object.keys(car).length ? (
        <div className="detail-cost-card__container">
          <div className="detail-cost-card__car">
            <h1>{car.name}</h1>
          </div>
          <div className="detail-cost-card__total-detail"></div>
          <div className="detail-cost-card__total-all"></div>
          <Link to="payment/paying">
            <button className="button">Bayar</button>
          </Link>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default DetailCostCard

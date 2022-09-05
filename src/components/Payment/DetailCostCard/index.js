import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//# styles
import "./style.css"

//# components

const DetailCostCard = ({ userGroupIcon }) => {
  const { car } = useSelector((state) => state.carReducer)
  return (
    <>
      <div className="detail-cost-card__container">
        <div className="detail-cost-card__car">
          <h4>{car.name}</h4>
          <p>
            <span>{userGroupIcon}</span> {car.category}
          </p>
        </div>
        <div className="detail-cost-card__total-detail"></div>
        <div className="detail-cost-card__total-all"></div>
        <Link to="payment/paying">
          <button className="button">Bayar</button>
        </Link>
      </div>
    </>
  )
}

export default DetailCostCard

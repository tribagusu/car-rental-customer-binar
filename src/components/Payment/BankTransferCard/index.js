//# style
import "./style.css"
import { banks } from "./data"

const BankTransferCard = () => {
  return (
    <div className="bank-transfer-card__container">
      <div className="bank-transfer-card__section">
        <div className="bank-transfer-card__title">
          <h3>Pilih Bank Transfer</h3>
          <p>Kamu bisa membayar dengan transfer melalui ATM</p>
        </div>
        <div className="bank-transfer-card__banks">
          {banks.map((bank) => (
            <div className="bank-transfer-card__bank-container">
              <div className="bank-transfer-card__logo">
                <h5>{bank.logo}</h5>
              </div>
              <div className="bank-transfer-card__name">
                <p>{bank.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BankTransferCard

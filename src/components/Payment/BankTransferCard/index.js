//# style
import "./style.css"

const BankTransferCard = () => {
  return (
    <div className="BankTransferCard__section">
      <div className="BankTransferCard__container">
        <h3>Tentang Paket</h3>
        <div className="BankTransferCard__include">
          <h4>Include</h4>
        </div>
        <div className="BankTransferCard__exclude">
          <h4>Exclude</h4>
        </div>
        <div className="BankTransferCard__refund"></div>
      </div>
    </div>
  )
}

export default BankTransferCard

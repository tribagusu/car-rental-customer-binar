import iconSuccess from "../../../assets/icon_success.png"
import downloadButton from "../../../assets/download-button.png"

import { Navigate } from "react-router-dom"

//# style
import "./style.css"

const TiketCard = () => {
  return (
    <div className="tiket-card__container">
      <div className="tiket-card__title">
        <img src={iconSuccess} alt="success" />
        <h3>Pembayaran Berhasil!</h3>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className="tiket-invoice">
        <div className="tiket-invoice__header">
          <h4>Invoice</h4>
          <Navigate to="/carimobil">
            <img src={downloadButton} alt="download" />
          </Navigate>
        </div>
        <small>*no invoice</small>
        <div className="tiket-invoice-container"></div>
      </div>
    </div>
  )
}

export default TiketCard

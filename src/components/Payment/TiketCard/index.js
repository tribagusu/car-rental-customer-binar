import iconSuccess from "../../../assets/icon_success.png"
import downloadButton from "../../../assets/download-button.png"

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
          <a href="https://www.google.com">
            <img src={downloadButton} alt="download" />
          </a>
        </div>
        <small>*no invoice</small>
        <div className="tiket-invoice-container"></div>
      </div>
    </div>
  )
}

export default TiketCard

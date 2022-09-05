//# style
import "./style.css"

import React from "react"

const OrderSummaryCard = () => {
  return (
    <div className="order-summary__section1">
      <div className="order-summary__section2">
        <div className="order-summary__container">
          <h3>Detail Pesananmu</h3>
          <div className="order-summary__detail">
            <div>
              <h4>Nama/Tipe Mobil</h4>
              <p>Mobil</p>
            </div>
            <div>
              <h4>Kategori</h4>
              <p>kategori</p>
            </div>
            <div>
              <h4>Tanngal Mulai Sewa</h4>
              <p>harga</p>
            </div>
            <div>
              <h4>Tanggal Akhir Sewa</h4>
              <p>status</p>
            </div>
            <div className="order-summary__button"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryCard

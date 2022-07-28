import "./DataDetailCar.css";

const DataDetailCar = () => {
  return (
    <div>
      <h4>Tentang Paket</h4>
      <div className="DataDetailCar__include">
        <h4>Include</h4>
        <ul>
          <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>
      </div>
      <div className="DataDetailCar__exclude">
        <h4>Exclude</h4>
        <ul>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
      </div>
      <div className="DataDetailCar__refund-reschedule-overtime">
        <h4>Refund, Reschedule, Overtime</h4>
        <ul>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
      </div>
    </div>
  );
};

export default DataDetailCar;

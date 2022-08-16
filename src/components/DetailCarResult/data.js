import "./style.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";

const DataDetailCar = () => {
  return (
    <div className="DataDetailCar__section">
      <div className="DataDetailCar__container">
        <h3>Tentang Paket</h3>
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
        <div className="DataDetailCar__refund">
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              style={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
            >
              <h4>Refund, Reschedule, Overtime</h4>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "0" }}>
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
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default DataDetailCar;

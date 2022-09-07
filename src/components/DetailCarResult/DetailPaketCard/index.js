import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined"
import { includeList, excludeList, refundList } from "./data"

//# style
import "./style.css"

const DetailPaketCard = () => {
  return (
    <div className="detail-paket-card__container">
      <div className="detail-paket-card__section">
        <h3>Tentang Paket</h3>
        <div className="detail-paket-card__include">
          <h4>Include</h4>
          {includeList.map((item) => (
            <ul key={item.id}>
              <li>{item.include}</li>
            </ul>
          ))}
        </div>
        <div className="detail-paket-card__exclude">
          <h4>Exclude</h4>
          {excludeList.map((item) => (
            <ul key={item.id}>
              <li>{item.exclude}</li>
            </ul>
          ))}
        </div>
        <div className="detail-paket-card__refund">
          <Accordion defaultExpanded={true} style={{ boxShadow: "none" }}>
            <AccordionSummary
              style={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
            >
              <h4>Refund, Reschedule, Overtime</h4>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "0" }}>
              {refundList.map((item) => (
                <ul key={item.id}>
                  <li>{item.refund}</li>
                </ul>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default DetailPaketCard

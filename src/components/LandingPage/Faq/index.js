import "./style.css"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined"
import { faq } from "./data"

const Faq = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="faq__columns">
          <div className="faq__column__left">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq__column__right">
            {faq.map((item) => (
              <Accordion key={item.id} className="faq">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4>{item.question}</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

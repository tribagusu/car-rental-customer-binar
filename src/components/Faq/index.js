import "./style.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
// import { useState } from "react";

const Faq = (props) => {
  const { faq } = props;

  // const [selected, setSelected] = useState(-1);
  // const handleSelected = (panel) => (e, newValue) => {
  //   setSelected(newValue ? panel : -1);
  // };
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
              <Accordion
                key={item.id}
                className="faq"
                // expanded={selected === 1}
                // onChange={handleSelected(1)}
              >
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
  );
};

export default Faq;

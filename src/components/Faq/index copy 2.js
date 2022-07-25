import "./style.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = (props) => {
  const { faq } = props;
  return (
    <section>
      <div className="container">
        <div className="faq__columns">
          <div className="faq__column__left">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq__column__right">
            {faq.map((item) => (
              <article className="faq">
                <div className="faq__qa">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
                <div className="faq__icon">{item.icon}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

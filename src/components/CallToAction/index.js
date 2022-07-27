import "./style.css";
import { Link } from "react-router-dom";

const CallToAction = (props) => {
  const { ButtonSewa } = props;
  return (
    <section>
      <div className="container cta__container">
        <div className="cta__columns">
          <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className=" cta__button">
            <Link to="/carimobil">{ButtonSewa}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import "./style.css";
import Cards from "../Cards/index.js";

const Strength = () => {
  return (
    <section>
      <div className="container  strength__container">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container">
        <div className="strength__cards">{Cards()}</div>
      </div>
    </section>
  );
};

export default Strength;

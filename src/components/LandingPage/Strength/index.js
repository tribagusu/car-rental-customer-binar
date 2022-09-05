import "./style.css";

const Strength = (props) => {
  const { strengthCard } = props;
  return (
    <section id="strength">
      <div className="container  strength__container">
        <h2>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="strength__cards__container">
        <div className="strength__cards">
          {strengthCard.map((item) => (
            <div key={item.id} className="card">
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strength;

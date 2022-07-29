import DataDetailCar from "../../const/DataDetailCar";
import "./style.css";

const toCurrency = (number, currency, lang = undefined) =>
  Intl.NumberFormat(lang, { style: "currency", currency }).format(number);

const changeCurrency = toCurrency(1234567, "IDR");

const DetailResult = (props) => {
  const { car } = props;
  return (
    <section className="detail__section">
      <div className="detail__hero"></div>
      <div className="detail__result__container">
        <div className="detail__result__info">
          <DataDetailCar />
        </div>
        <div className="detail__result__car">
          <div>
            {!!Object.keys(car).length ? (
              <div>
                <img src={car.image} />
                <h1>{car.name}</h1>
                <p>{car.category}</p>
                <div className="detail__result__total-price">
                  <p>Total</p>
                  <p>Rp {car.price}</p>
                </div>
              </div>
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailResult;

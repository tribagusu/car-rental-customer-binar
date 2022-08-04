import "./style.css";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image-available.png";
import NumberFormat from "react-number-format";

const SearchResult = (props) => {
  const { data, ButtonPilih } = props;

  return (
    <div className="search-result__section">
      <div className="search-result__container">
        {!!data.length &&
          data.map((item) => (
            <div key={item} className="search-result__cards">
              <div>
                {!!item.image ? (
                  <img src={item.image} />
                ) : (
                  <img src={noImage} />
                )}
                <div className="search-result__cards__info">
                  {!!item.name ? <h1>{item.name}</h1> : <h1>not available</h1>}
                  <p>
                    Rp{" "}
                    <NumberFormat
                      value={item.price}
                      decimalSeparator=","
                      thousandSeparator="."
                    />{" "}
                    / hari
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa accusamus doloribus quam veniam eligendi sed?
                  </p>
                </div>
                <div className="search-result__cards__button">
                  <Link to={`/detailmobil/${item.id}`}>{ButtonPilih}</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;

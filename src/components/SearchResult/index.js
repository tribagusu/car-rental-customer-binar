import "./style.css";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  const { data } = props;

  return (
    <div>
      {!!data.length &&
        data.map((item) => (
          <div>
            <div>
              <img src={item.image} />
            </div>
            <div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
            <Link to={`/detailmobil/${item.id}`}>
              <button>Pilih Mobil</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;

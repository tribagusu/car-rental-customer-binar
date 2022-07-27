import "./style.css";
import { Link } from "react-router-dom";
import { ButtonCari } from "../../const/staticData";

const SearchBar = () => {
  return (
    <div className="search-bar__section1">
      <div className="search-bar__section2">
        <div className="search-bar__container">
          <aside>
            <div className="search-bar__inputs">
              <div className="input-name">
                <h4>Nama Mobil</h4>
                <input type="text" placeholder="Ketik nama/tipe mobil" />
              </div>
              <div className="input-category">
                <h4>Kategori</h4>
                <input type="text" placeholder="Masukkan Kapasitas Mobil" />
              </div>
              <div className="input-price">
                <h4>Harga</h4>
                <input type="text" placeholder="Masukkan Harga Sewa per Hari" />
              </div>
              <div className="input-status">
                <h4>Status</h4>
                <input type="text" placeholder="Sewa" />
              </div>
              <div className="search-bar__button">
                <Link to="/carimobil">{ButtonCari}</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

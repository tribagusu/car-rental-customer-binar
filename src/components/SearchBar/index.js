import "./style.css";
import { ButtonCari } from "../../const/staticData";

const SearchBar = (props) => {
  const { handleChangeName, handleSearch } = props;
  return (
    <div className="search-bar__section1">
      <div className="search-bar__section2">
        <div className="search-bar__container">
          <aside>
            <div className="search-bar__inputs">
              <div className="input-name">
                <h4>Nama Mobil</h4>
                <input
                  onChange={(e) => handleChangeName(e)}
                  type="text"
                  placeholder="Ketik nama/tipe mobil"
                />
              </div>
              <div className="input-category">
                <h4>Kategori</h4>
                <input
                  type="text"
                  placeholder="Masukkan Kapasitas Mobil"
                  disabled
                />
              </div>
              <div className="input-price">
                <h4>Harga</h4>
                <input type="text" placeholder="Masukkan Harga Sewa" disabled />
              </div>
              <div className="input-status">
                <h4>Status</h4>
                <select name="status" id="status">
                  <option value="" disabled selected>
                    Status mobil
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="search-bar__button">
                <button onClick={handleSearch}>{ButtonCari}</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import "./style.css"
import { ButtonCari } from "../../../const/staticData"

const SearchBar = (props) => {
  const { handleCarName, handleSearch, handleCarCategory } = props
  return (
    <div className="search-bar__section1">
      <div className="search-bar__section2">
        <div className="search-bar__container">
          <aside>
            <form onSubmit={handleSearch} className="search-bar__inputs">
              <div>
                <h4>Nama Mobil</h4>
                <input
                  type="text"
                  placeholder="Ketik nama/tipe mobil"
                  onChange={handleCarName}
                  // value={name}
                />
              </div>
              <div>
                <h4>Kategori</h4>
                <input
                  type="text"
                  placeholder="Masukkan Kapasitas Mobil"
                  onChange={handleCarCategory}
                />
              </div>
              <div>
                <h4>Harga</h4>
                <input type="text" disabled />
              </div>
              <div>
                <h4>Status</h4>
                <select
                  disabled
                  name="status"
                  id="status"
                  defaultValue={"status mobil"}
                ></select>
              </div>
              <div className="search-bar__button">
                <button>{ButtonCari}</button>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default SearchBar

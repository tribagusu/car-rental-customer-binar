import "./style.css";

const SearchBar = () => {
  return (
    <div>
      <div className="search__container">
        <div className="search__inputs">
          <div className="input">
            <h2>Nama Mobil</h2>
            <input type="text" />
          </div>
        </div>
        <div className="search__button">
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

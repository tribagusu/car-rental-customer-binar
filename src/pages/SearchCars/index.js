import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { socialMediaLogo, NavMenu, ButtonPilih } from "../../const/staticData";

import { useEffect, useState } from "react";
import axios from "axios";

const SearchCars = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [fdata, setFdata] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (!e.target.value.length) {
      setFdata([]);
      // setNotFound(true);
    }
  };

  const handleSearch = () => {
    const newArr = data.filter((e) => e.name === name);
    setFdata(newArr);
    // setNotFound(false);
  };

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const props = {
    socialMediaLogo,
    NavMenu,
    ButtonPilih,
    handleChangeName,
    handleSearch,
    // notFound,
  };

  return (
    <div>
      <Navigation {...props} />
      <Hero />
      <SearchBar {...props} />
      {/* {!!notFound && <h1>Data tidak ditemukan</h1>} */}
      <SearchResult data={!fdata.length ? data : fdata} {...props} />
      <Footer {...props} />
    </div>
  );
};

export default SearchCars;

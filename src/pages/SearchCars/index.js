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
  // console.log("  🔸-> name", name);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    const newArr = data.filter((data) => data.name === name);
    setData(newArr);

    // const payload = {
    //   name: name,
    // };
    // axios
    //   .post("https://bootcamp-rent-car.herokuapp.com/admin/car", payload)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
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
    data,
    ButtonPilih,
    handleChangeName,
    handleSearch,
  };

  return (
    <div>
      <Navigation {...props} />
      <Hero />
      <SearchBar {...props} />
      <SearchResult {...props} />
      <Footer {...props} />
    </div>
  );
};

export default SearchCars;

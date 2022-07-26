import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { socialMediaLogo, NavMenu } from "../../const/staticData";

import { useEffect, useState } from "react";
import axios from "axios";

const SearchCars = () => {
  const [data, setData] = useState([]);
  // console.log("  🔸-> data", data);

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
  };

  return (
    <div>
      <Navigation {...props} />
      <Hero showBtn={false} />
      <SearchBar />
      <SearchResult {...props} />
      <Footer {...props} />
    </div>
  );
};

export default SearchCars;

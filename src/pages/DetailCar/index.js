import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../../components/Navigation";
import DetailResult from "../../components/DetailResult";
import {
  socialMediaLogo,
  NavMenu,
  ButtonBack,
  userGroupIcon,
} from "../../const/staticData";
import Footer from "../../components/Footer";

const Car = () => {
  const [car, setCar] = useState({});

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);

  const props = {
    car,
    socialMediaLogo,
    NavMenu,
    ButtonBack,
    userGroupIcon,
  };
  return (
    <div>
      <Navigation {...props} />
      <DetailResult {...props} />
      <Footer {...props} />
    </div>
  );
};
export default Car;

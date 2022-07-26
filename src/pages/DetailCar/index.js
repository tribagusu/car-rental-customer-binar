import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(car);
  return (
    <div>
      {!!Object.keys(car).length ? (
        <div>
          <h1>{car.name}</h1>
          <img src={car.image} />
          <p>{car.category}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
export default Car;

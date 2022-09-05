import TYPES from "../types"
import axios from "axios"

export const handleCar = (id) => {
  return (dispatch) => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) =>
        dispatch({
          type: TYPES.GET_CAR,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err))
  }
}

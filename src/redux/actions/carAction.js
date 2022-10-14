import TYPES from "../types"
import axios from "axios"

export const handleCar = (id) => {
  return (dispatch) => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        console.log(res)
        dispatch({
          type: TYPES.GET_CAR,
          payload: res.data,
        })
      })
      .catch((err) => console.log(err))
  }
}

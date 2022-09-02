import TYPES from "../types"
import axios from "axios"

export const authAction = (payload) => {
  return (dispatch) => {
    axios
      .post(
        "https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
        payload
      )
      .then((res) => {
        dispatch({
          type: TYPES.SIGNIN,
          payload: res.data.data,
        })
      })
  }
}

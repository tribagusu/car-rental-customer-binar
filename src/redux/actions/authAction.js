import TYPES from "../types"
import axios from "axios"

export const handleLogin = (payload) => {
  return (dispatch) => {
    axios
      .post(
        "https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
        payload
      )
      .then((res) => {
        console.log(res.data.access_token)
        localStorage.setItem("token", res.data.access_token)
        dispatch({
          type: TYPES.POST_LOGIN,
          payload: res.data.access_token,
        })
      })
      .catch((err) => console.log(err.message))
  }
}

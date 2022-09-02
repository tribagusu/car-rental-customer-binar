import TYPES from "../types"
import axios from "axios"

export const authAction = (payload) => {
  return (dispatch) => {
    axios.post("https://reqres.in/api/register", payload).then((res) => {
      console.log(res.data.token)
      dispatch({
        type: TYPES.SIGNIN,
        payload: res.data.token,
      })
    })
  }
}

import TYPES from "../types"

const initialState = {
  token: "",
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.POST_LOGIN:
      return {
        token: action.payload,
      }
    default:
      return state
  }
}

export default authReducer

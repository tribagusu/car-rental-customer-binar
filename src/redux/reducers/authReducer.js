import TYPES from "../types"

const initialState = {
  auth: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SIGNIN:
      return {
        auth: action.payload,
      }
    default:
      return state
  }
}

export default authReducer

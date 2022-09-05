import TYPES from "../types"

const initialState = {
  car: {},
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CAR:
      return {
        car: action.payload,
      }
    default:
      return state
  }
}

export default carReducer

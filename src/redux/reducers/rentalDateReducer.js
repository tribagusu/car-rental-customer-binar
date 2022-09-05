import TYPES from "../types"

const initialState = {
  date: {
    startDate: null,
    endDate: null,
  },
}

const rentalDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_DATE:
      return {
        ...state,
        startDate: action.payload,
      }
    case TYPES.END_DATE:
      return {
        ...state,
        endDate: action.payload,
      }
    default:
      return state
  }
}

export default rentalDateReducer

import { combineReducers } from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"
import rentalDateReducer from "./rentalDateReducer"

const rootReducer = combineReducers({
  authReducer,
  carReducer,
  rentalDateReducer,
})

export default rootReducer

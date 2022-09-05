import { combineReducers } from "redux"
import authReducer from "./authReducer"
import carReducer from "./carReducer"

const rootReducer = combineReducers({
  authReducer,
  carReducer,
})

export default rootReducer

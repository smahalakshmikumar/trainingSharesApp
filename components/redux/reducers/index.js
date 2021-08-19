import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
import orderReducer from "./orderReducer"
import shareReducer from "./shareReducer"

/**
 * Root reducer to combine reducers
 */
const rootReducer = combineReducers({
  users: loginReducer,
  shares: shareReducer,
  orders: orderReducer,
});

export default rootReducer;

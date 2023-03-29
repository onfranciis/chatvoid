import { combineReducers } from "redux";
import usersReducer from "./users/usersSlice";
import utilReducer from "./util/utilSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  util: utilReducer,
});

export default rootReducer;

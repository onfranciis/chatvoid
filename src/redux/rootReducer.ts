import { combineReducers } from "redux";
import usersReducer from "./users/usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;

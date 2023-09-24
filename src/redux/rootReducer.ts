import { combineReducers } from "redux";
import usersReducer from "./users/usersSlice";
import utilReducer from "./util/utilSlice";
import onlineReducer from "./online/onlineSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  util: utilReducer,
  online: onlineReducer,
});

export default rootReducer;

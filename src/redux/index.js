import { combineReducers } from "redux";
import alert from "./alert/AlertReducers";
import auth from "./auth/AuthReducers";

export default combineReducers({
  alert,
  auth,
});

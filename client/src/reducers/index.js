import { combineReducers } from "redux";
import { i18nState } from "redux-i18n";
import authReducer from "./auth_reducer";

export default combineReducers({
  i18nState,
  authReducer
});

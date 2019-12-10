import { combineReducers } from "redux";
import { i18nState } from "redux-i18n";
import authReducer from "./auth_reducer";
import postReducer from "./post_reducer";
import imageUploadReducer from "../reducers/image_upload_Reducer";

export default combineReducers({
  i18nState,
  authReducer,
  postReducer,
  imageUploadReducer
});

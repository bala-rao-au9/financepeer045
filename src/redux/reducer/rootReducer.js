import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import fileUploadReducer from "./fileUploadReducer";
import { reducer as reduxFormReducer } from "redux-form";
import { combineReducers } from "redux";

export default combineReducers({
  userInfo: userReducer,
  loginInfo: loginReducer,
  fileData: fileUploadReducer,
  form: reduxFormReducer,
});

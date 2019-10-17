import { combineReducers } from "redux";
import LoginReducers from "./Login.Reducers";
import { reducer as FormReducer } from "redux-form";

export default () =>
  combineReducers({
    login: LoginReducers,
    form: FormReducer
  });

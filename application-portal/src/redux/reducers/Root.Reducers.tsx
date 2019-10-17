import { combineReducers } from "redux";
import LoginReducers from "./Login.Reducers";
import HomeReducers from "./Home.Reducers";
import { reducer as FormReducer } from "redux-form";

export default () =>
  combineReducers({
    login: LoginReducers,
    home: HomeReducers,
    form: FormReducer
  });

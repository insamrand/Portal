import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import HomeReducers from "./Home.Reducers";
import LoginReducers from "./Login.Reducers";
import FotgotReducers from "./Fotgot.Reducers";

export default () =>
  combineReducers({
    home: HomeReducers,
    login: LoginReducers,
    forgot: FotgotReducers,
    form: FormReducer
  });

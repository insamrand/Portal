import { combineReducers } from "redux";
import HomeReducers from "./Home.Reducers";
import { reducer as FormReducer } from "redux-form";
import LoginReducers from "./Login.Reducers";
import FotgotReducers from "./Fotgot.Reducers";
import RedeemReducers from "./Redeem.Reducers";

export default () =>
  combineReducers({
    home: HomeReducers,
    login: LoginReducers,
    Forgot: FotgotReducers,
    Redeem: RedeemReducers,
    form: FormReducer
  });

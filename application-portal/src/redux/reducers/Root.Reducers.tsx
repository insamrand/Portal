import { combineReducers } from "redux";
import HomeReducers from "./Home.Reducers";
import { reducer as FormReducer } from "redux-form";

export default () =>
  combineReducers({
    home: HomeReducers,
    form: FormReducer
  });

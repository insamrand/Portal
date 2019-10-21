import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import HomeReducers from "./Home.Reducers";

export default () =>
  combineReducers({
    home: HomeReducers,
    form: FormReducer
  });

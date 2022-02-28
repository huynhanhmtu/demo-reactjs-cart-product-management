import { combineReducers } from "redux";
import listMoviesReducer from "../containers/HomeTemplate/ListMoviesPage/modules/reducer";

export const rootReducer = combineReducers({
  listMoviesReducer,
});
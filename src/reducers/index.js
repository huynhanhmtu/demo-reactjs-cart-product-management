import { combineReducers } from "redux";
import listMoviesReducer from "../containers/HomeTemplate/ListMoviesPage/modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import userLoginReducer from "../containers/AdminTemplate/LoginPage/modules/reducer";
import addUserReducer from "../containers/AdminTemplate/AddUserPage/modules/reducer";

export const rootReducer = combineReducers({
  listMoviesReducer,
  detailMovieReducer,
  userLoginReducer,
  addUserReducer
});
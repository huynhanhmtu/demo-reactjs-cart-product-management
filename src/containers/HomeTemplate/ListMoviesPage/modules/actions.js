import * as ActionType from './constants';
import api from 'utils/apiUtils';

export const actFetchListMovies = () => {
  return (dispatch) => {
    dispatch(actListMoviesRequest());
    api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP02")
      .then(result => {
        dispatch(actListMoviesSuccess(result.data.content));
      })
      .catch(error => {
        dispatch(actListMoviesFailed(error));
      });
  }
}

const actListMoviesRequest = () => {
  return {
    type: ActionType.LIST_MOVIES_REQUEST,
  }
};
const actListMoviesSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIES_SUCCESS,
    payload: data
  }
};
const actListMoviesFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIES_FAILED,
    payload: error
  }
};
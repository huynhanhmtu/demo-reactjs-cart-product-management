import axios from 'axios';
import * as ActionType from './constants';

export const actFetchListMovies = () => {
  return (dispatch) => {
    dispatch(actListMoviesRequest());
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
      }
    })
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
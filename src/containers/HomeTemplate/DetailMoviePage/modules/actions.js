import axios from 'axios';
import * as ActionType from './constants';

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
      }
    })
      .then(result => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch(error => {
        dispatch(actDetailMovieFailed(error));
      });
  }
}

const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  }
};
const actDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data
  }
};
const actDetailMovieFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error
  }
};
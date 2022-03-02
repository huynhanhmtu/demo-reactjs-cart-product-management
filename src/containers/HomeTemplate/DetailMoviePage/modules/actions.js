import * as ActionType from './constants';
import api from 'utils/apiUtils';


export const actFetchDetailMovie = (id) => (dispatch) => {
  dispatch(actDetailMovieRequest());
  api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    .then(result => {
      dispatch(actDetailMovieSuccess(result.data.content));
    })
    .catch(error => {
      dispatch(actDetailMovieFailed(error));
    });
}


const actDetailMovieRequest = () => (
  {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  }
);

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
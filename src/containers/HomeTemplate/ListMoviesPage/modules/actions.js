import axios from 'axios';
import * as ActionType from './constants';

export const actFetchListMovies = () => {
  // Call API ngay tại Action creator để tăng performance (không phải đi qua trung gian là component trước khi dispatch lên store). Tuy nhiên việc gọi API từ server là bất đồng bộ => không chắc khi dispatch lên reducer thì response đã trả về hay chưa => sử dụng middleWare (dispatch action lên reducer phải qua middleWare để đảm bảo rằng khi tới được reducer thì response từ server đã được trả về - có nhiều loại middleWare, ở đây ta sử dụng redux-thunk => xem tại file index của project)
  return (dispatch) => {
    // Request
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
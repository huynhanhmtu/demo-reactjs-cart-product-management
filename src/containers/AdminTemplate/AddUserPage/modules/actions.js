import * as ActionTypes from './constants';
import axios from 'axios';

export const actAddUser = (user) => {
  const token = localStorage.getItem("UserInfo") ? JSON.parse(localStorage.getItem("UserInfo")).accessToken : "";

  return (dispatch) => {
    dispatch(actAddUserRequest());

    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
      },
      data: user
    })
      .then(result => {
        dispatch(actAddUserSuccess(result.data));
      })
      .catch(error => {
        dispatch(actAddUserFailed(error))
      })
  }
}

const actAddUserRequest = () => ({
  type: ActionTypes.ADD_USER_REQUEST
})

const actAddUserSuccess = data => ({
  type: ActionTypes.ADD_USER_SUCCESS,
  payload: data
})

const actAddUserFailed = error => ({
  type: ActionTypes.ADD_USER_FAILED,
  payload: error
})

export const actAddUserReset = () => ({ type: ActionTypes.ADD_USER_RESET })
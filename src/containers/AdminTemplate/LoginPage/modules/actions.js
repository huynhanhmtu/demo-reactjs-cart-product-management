import axios from 'axios';
import * as ActionType from './constants';

export const actLogin = (userInfo, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userInfo,
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
      }
    })
      .then(result => {
        if (result.data.content.maLoaiNguoiDung !== "QuanTri") {
          return Promise.reject({
            response: {
              data: {
                content: "Không có quyền truy cập vào trang quản trị"
              }
            }
          });
        }
        localStorage.setItem("UserInfo", JSON.stringify(result.data.content));
        // Redirect
        dispatch(actLoginSuccess(result.data.content));
        history.replace("/dashboard");
      })
      .catch(error => {
        dispatch(actLoginFailed(error));
      });
  }
}

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  }
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data
  }
};
const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error
  }
};

export const actLoginReset = () => {
  return {
    type: ActionType.LOGIN_RESET
  }
}
import api from 'utils/apiUtils';
import * as ActionType from './constants';

export const actLogin = (userInfo, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api.post("QuanLyNguoiDung/DangNhap", userInfo)
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
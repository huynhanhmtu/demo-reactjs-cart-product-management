import * as ActionTypes from './constants';
import api from 'utils/apiUtils';

export const actAddUser = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());

    api.post("QuanLyNguoiDung/ThemNguoiDung", user)
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
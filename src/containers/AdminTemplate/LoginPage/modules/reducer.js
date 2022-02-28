import * as ActionType from "./constants";

const initialState = {
  user: null,
  loading: false,
  error: null
}

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST: {
      state.user = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionType.LOGIN_SUCCESS: {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionType.LOGIN_FAILED: {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }
    case ActionType.LOGIN_RESET: {
      state.error = null;
      return { ...state };
    }
    default:
      return { ...state }
  }
}

export default userLoginReducer;
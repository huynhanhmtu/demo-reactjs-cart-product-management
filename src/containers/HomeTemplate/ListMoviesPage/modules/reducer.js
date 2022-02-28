import * as ActionType from './constants';

const initialState = {
  listMovie: null,
  loading: false,
  error: null
}

const listMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIES_REQUEST: {
      state.listMovie = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionType.LIST_MOVIES_SUCCESS: {
      state.listMovie = action.payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionType.LIST_MOVIES_FAILED: {
      state.listMovie = null;
      state.loading = false;
      state.error = action.payload.response.data.message;
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default listMoviesReducer;
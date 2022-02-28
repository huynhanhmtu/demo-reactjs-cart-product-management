import * as ActionType from "./constants"

const initialState = {
  movie: null,
  loading: false,
  error: null
}

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DETAIL_MOVIE_REQUEST: {
      state.movie = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionType.DETAIL_MOVIE_SUCCESS: {
      state.movie = action.payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionType.DETAIL_MOVIE_FAILED: {
      state.movie = null;
      state.loading = false;
      state.error = action.payload.response.data.message;
      return { ...state };
    }
    default:
      return { ...state }
  }
}

export default detailMovieReducer;
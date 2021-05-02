import {
  LOAD_COMMENTS,
  ADD_NEW_COMMENT,
  LOAD_COMMENTS_COUNT,
} from "../action/types";
const initialState = {
  commentCount: 0,
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS_COUNT:
      state = {
        ...state,
        comments: [...state.comments],
        commentCount: action.payload,
      };
      return state;

    case LOAD_COMMENTS:
      state = {
        ...state,
        comments: action.payload,
        commentCount: state.commentCount,
      };
      return state;

    case ADD_NEW_COMMENT:
      state = {
        ...state,
        comments: [...state.comments, action.payload],
        commentCount: parseInt(state.commentCount) + 1,
      };
      return state;
    default:
      return state;
  }
};

export default commentReducer;

import { ADD_NEW_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_COUNT } from "./types";

export const loadCommentCount = (commentCount) => (dispatch) => {
  dispatch({
    type: LOAD_COMMENTS_COUNT,
    payload: commentCount,
  });
};

export const commentLoader = (comments) => (dispatch) => {
  dispatch({
    type: LOAD_COMMENTS,
    payload: comments,
  });
};

export const addNewComment = (data) => (dispatch) => {
  dispatch({
    type: ADD_NEW_COMMENT,
    payload: data,
  });
};

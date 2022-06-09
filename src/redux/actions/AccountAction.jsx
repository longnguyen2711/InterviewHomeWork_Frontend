import { accountService } from "../../services/AccountService";
import { ACCOUNT, ALBUMS, LIST_ACCOUNT, LIST_POSTS, POST, POST_COMMENT } from "../types";
import { history } from "../../App";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const usersAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.users();
      if (result.status === 200) {
        dispatch({
          type: LIST_ACCOUNT,
          listAccount: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const userAction = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.user(userId);
      if (result.status === 200) {
        dispatch({
          type: ACCOUNT,
          account: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const postsAction = (postId="") => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.posts(postId);
      if (result.status === 200) {
        dispatch({
          type: LIST_POSTS,
          listPosts: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const postAction = (postId="") => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.post(postId);
      if (result.status === 200) {
        dispatch({
          type: POST,
          post: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const commentAction = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.comment(postId);
      if (result.status === 200) {
        dispatch({
          type: POST_COMMENT,
          postComment: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const albumstAction = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await accountService.albums(userId);
      if (result.status === 200) {
        dispatch({
          type: ALBUMS,
          albums: result.data,
        });
        dispatch(hideLoadingAction);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

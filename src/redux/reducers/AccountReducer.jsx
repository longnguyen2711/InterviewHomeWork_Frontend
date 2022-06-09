import {
  ACCOUNT,
  ALBUMS,
  LIST_ACCOUNT,
  LIST_POSTS,
  POST,
  POST_COMMENT,
} from "../types";

const stateDefault = {
  listAccount: [],
  account: [],
  listPosts: [],
  post: [],
  postComment: [],
  albums: [],
};

export const AccountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LIST_ACCOUNT: {
      state.listAccount = action.listAccount;
      return { ...state };
    }

    case ACCOUNT: {
      let account = [];
      account.push(action.account);
      state.account = account;
      return { ...state };
    }

    case LIST_POSTS: {
      let listPosts = [];
      if (action.listPosts.length === undefined) {
        listPosts.push(action.listPosts);
        state.listPosts = listPosts;
      } else {
        state.listPosts = action.listPosts;
      }
      return { ...state };
    }

    case POST: {
      let post = [];
      post.push(action.post);
      state.post = post;
      return { ...state };
    }

    case POST_COMMENT: {
      state.postComment = action.postComment;
      return { ...state };
    }

    case ALBUMS: {
      state.albums = action.albums;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

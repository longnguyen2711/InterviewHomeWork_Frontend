import { baseService } from "./baseServices";

export class AccountService extends baseService {
  constructor() {
    super();
  }

  // Api: 10 users
  users = () => {
    return this.get("users");
  };

  // Api: 1 users
  user = (userId) => {
    return this.get(`users/${userId}`);
  };

  // Api: 100 posts
  posts = (postId = "") => {
    if (postId.trim() !== "") {
      return this.get(`posts/${postId}`);
    }
    return this.get("posts");
  };

  // Api: 1 post
  post = (postId = "") => {
    return this.get(`posts/${postId}`);
  };

  // Api: comment
  comment = (postId) => {
    return this.get(`comments?postId=${postId}`);
  };

  // Api: albums
  albums = (userId) => {
    return this.get(`albums?userId=${userId}`);
  };
}

export const accountService = new AccountService();

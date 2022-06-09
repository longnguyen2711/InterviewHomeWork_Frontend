import axios from "axios";

const DOMAIN = "https://jsonplaceholder.typicode.com/";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
    });
  };
}

// Setup axios interceptor
export const http = axios.create({
  baseURL: DOMAIN, 
  timeout: 30000, 
});

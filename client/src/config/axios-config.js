import axios from "axios";

const initializeAxios = () => {
  const instance = axios.create();
  instance.defaults.headers.common = {};
  axios.defaults.baseURL = "http://localhost:8000/";
  axios.interceptors.request.use(
    config => {
      if (typeof localStorage.getItem("token") === "string") {
        config.headers.authorization =
          "Bearer " + localStorage.getItem("token");
      }
      return config;
    },
    error => {
      //return promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error) {
        if (axios.isCancel(error)) {
          return Promise.reject(error);
        }
        if (error && error.response && error.response.status === 401) {
          //  401 use refresh tokens
          localStorage.clear();
          window.location.href = "/";
          return;
          //return axios(error.config);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default initializeAxios;

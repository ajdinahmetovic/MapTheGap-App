import axios from "axios";

export default class AuthAPI {
  static registerUser = user => {
    console.log(user);
    return axios({
      method: "POST",
      url: `/user/register`,
      data: user
    });
  };

  static loginUser = user => {
    console.log(user);
    return axios({
      method: "POST",
      url: `/user/login`,
      data: user
    });
  };
}

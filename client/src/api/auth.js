import axios from "axios";

export default class AuthAPI {
  static registerUser = user => {
    console.log(user);
    return axios({
      method: "POST",
      url: `user/`,
      data: user
    });
  };
}

import axios from "axios";

export default class ProblemsAPI {
  static getProblems = () => {
    return axios({
      method: "GET",
      url: `issue/`
    });
  };

  static createProblem = problem => {
    return axios({
      method: "POST",
      url: `issue/`,
      data: problem
    });
  };
}

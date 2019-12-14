import axios from "axios";

export default class ProblemsAPI {
  static getProblems = () => {
    return axios({
      method: "GET",
      url: `/feed?sort_by=date:desc`
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

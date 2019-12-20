import axios from 'axios';

export default class CategoryAPI {
  static getCategories = () => {
    return axios({
      method: 'GET',
      url: `/category`
    });
  };
}

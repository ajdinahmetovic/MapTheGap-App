import axios from "axios";

export default class CloudinaryAPI {
  static uploadPhotos = photos => {
    return axios({
      method: "POST",
      url: `/image-upload`,
      data: photos
    });
  };
}

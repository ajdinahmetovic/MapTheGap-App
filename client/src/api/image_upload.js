import axios from "axios";

export default class ImageUploadAPI {
  static uploadImages = photos => {
    return axios({
      method: "POST",
      url: `/image-upload`,
      data: photos
    });
  };
}

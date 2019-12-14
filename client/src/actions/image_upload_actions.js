import { setActionLoading, setActionSuccess } from "./common";
import { ACTIONS } from "../constants/action_types";
import ImageUploadAPI from "../api/image_upload";

export const uploadPhotos = photos => async dispatch => {
  dispatch(setActionLoading(ACTIONS.UPLOADING_IMAGE_TRUE));
  ImageUploadAPI.uploadImages(photos)
    .then(res => {
      let images = [];

      res.data.data.map(item => {
        console.log(item.secure_url);
        images.push(item.secure_url);
      });
      console.log(res.data.data);
      dispatch(setActionSuccess(images, ACTIONS.UPLOADING_IMAGE_SUCCESS));
      dispatch(setActionLoading(ACTIONS.UPLOADING_IMAGE_FALSE));
    })
    .catch(err => {
      dispatch(
        setActionSuccess("Something went wrong.", ACTIONS.UPLOADING_IMAGE_FAIL)
      );
      dispatch(setActionLoading(ACTIONS.UPLOADING_IMAGE_FALSE));
    });
};

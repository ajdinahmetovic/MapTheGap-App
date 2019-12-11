import { ACTIONS } from "../constants/action_types";

const initialState = {
  images: [],
  isUploading: false,
  isUploaded: false,
  errMsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    //GET ACTIONS
    case ACTIONS.UPLOADING_IMAGE_FAIL:
      return {
        ...state,
        errMsg: action.payload
      };
    case ACTIONS.UPLOADING_IMAGE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        images: action.payload,
        isUploaded: true
      };
    case ACTIONS.UPLOADING_IMAGE_TRUE:
      return {
        ...state,
        isUploading: true
      };
    case ACTIONS.UPLOADING_IMAGE_FALSE:
      return {
        ...state,
        isUploading: false
      };

    default:
      return state;
  }
}

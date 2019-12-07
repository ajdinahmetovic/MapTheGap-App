import { ACTIONS } from "../constants/action_types";

const initialState = {
  isLoading: false,
  NGO_ERR: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REGISTER_NGO:
      return {
        ...state
      };
    case ACTIONS.REGISTER_NGO_FAIL:
      return {
        ...state,
        NGO_ERR: action.payload
      };
    case ACTIONS.LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
        NGO_ERR: null
      };
    case ACTIONS.LOADING_FALSE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}

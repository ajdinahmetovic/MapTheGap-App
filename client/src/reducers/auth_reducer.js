import { ACTIONS } from "../constants/action_types";

const initialState = {
  user: null,
  isLoading: false,
  NGO_ERR: null,
  //login
  loginErr: null,
  loginLoading: false
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
    case ACTIONS.LOGIN_FAIL:
      return {
        ...state,
        loginErr: action.payload
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.LOGIN_LOADING_TRUE:
      return {
        ...state,
        loginLoading: true
      };
    case ACTIONS.LOGIN_LOADING_FALSE:
      return {
        ...state,
        loginLoading: false
      };

    default:
      return state;
  }
}

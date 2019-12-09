import { ACTIONS } from "../constants/action_types";

const initialState = {
  problems: [],
  isLoading: false,
  isPosting: false,
  errMsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    //GET ACTIONS
    case ACTIONS.FETCHING_PROBLEMS_TRUE:
      return { ...state, isLoading: true };
    case ACTIONS.FETCHING_PROBLEMS_FALSE:
      return { ...state, isLoading: false };
    case ACTIONS.FETCHING_PROBLEMS_SUCCESS:
      return { ...state, problems: action.payload };
    case ACTIONS.FETCHING_PROBLEMS_ERROR:
      return { ...state, errMsg: action.payload };
    //POST ACTIONS
    case ACTIONS.CREATING_PROBLEMS_TRUE:
      return { ...state, isPosting: true };
    case ACTIONS.CREATING_PROBLEMS_FALSE:
      return { ...state, isPosting: false };
    case ACTIONS.FETCHING_PROBLEMS_SUCCESS:
      return { ...state, problems: [action.payload, state.problems] };
    case ACTIONS.FETCHING_PROBLEMS_ERROR:
      return { ...state, errMsg: action.payload };
    default:
      return state;
  }
}

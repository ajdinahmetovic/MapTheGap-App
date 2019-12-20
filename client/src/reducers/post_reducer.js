import { ACTIONS } from '../constants/action_types';

const initialState = {
  problems: [],
  isPostLoading: false,
  isPostFetching: false,
  errMsgPosting: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    //GET ACTIONS
    case ACTIONS.FETCHING_PROBLEMS_TRUE:
      return { ...state, isPostFetching: true };
    case ACTIONS.FETCHING_PROBLEMS_FALSE:
      return { ...state, isPostFetching: false };
    case ACTIONS.FETCHING_PROBLEMS_SUCCESS:
      return { ...state, problems: action.payload };
    case ACTIONS.FETCHING_PROBLEMS_ERROR:
      return { ...state, errMsg: action.payload };
    //POST ACTIONS
    case ACTIONS.CREATING_PROBLEMS_SUCCESS:
      console.log('AJDIN');
      return { ...state, problems: [action.payload, ...state.problems] };
    case ACTIONS.CREATING_PROBLEMS_TRUE:
      return { ...state, isPostLoading: true };
    case ACTIONS.CREATING_PROBLEMS_FALSE:
      return { ...state, isPostLoading: false };
    case ACTIONS.CREATING_PROBLEMS_ERROR:
      return { ...state, errMsg: action.payload };
    default:
      return state;
  }
}

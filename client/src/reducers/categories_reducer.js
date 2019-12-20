import { ACTIONS } from '../constants/action_types';

const initialState = {
  categories: [],
  errMsg: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    case ACTIONS.CATEGORY_FAIL:
      return {
        ...state,
        errMsg: action.payload
      };
    default:
      return state;
  }
}

import CategoryAPI from '../api/category';
import { setActionSuccess, setActionError, setActionLoading } from './common';
import { ACTIONS } from '../constants/action_types';

export const getCategories = () => async dispatch => {
  dispatch(setActionLoading(ACTIONS.LOGIN_LOADING_TRUE));
  CategoryAPI.getCategories()
    .then(res => {
      console.log(res.data.data);
      if (res.data.success) {
        dispatch(setActionSuccess(res.data.data, ACTIONS.CATEGORY_SUCCESS));
      } else {
        dispatch(setActionError('Something went wrong', ACTIONS.CATEGORY_FAIL));
      }
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response.data) {
        if (err.response.data.error.message === undefined) {
          dispatch(setActionError('Generic error', ACTIONS.CATEGORY_FAIL));
        } else {
          dispatch(
            setActionError(
              err.response.data.error.message,
              ACTIONS.CATEGORY_FAIL
            )
          );
        }
      }
    });
};

import { ACTIONS } from "../constants/action_types";
import AuthAPI from "../api/auth";
import { setActionSuccess, setActionError, setActionLoading } from "./common";

export const loginUser = user => async dispatch => {
  dispatch(setActionLoading(ACTIONS.LOADING_TRUE));

  return dispatch => {};
};

export const registerUser = user => async dispatch => {
  dispatch(setActionLoading(ACTIONS.LOADING_TRUE));
  user.address += " " + user.city + " " + user.country;
  AuthAPI.registerUser(user)
    .then(res => {
      console.log(res);
      if (res.success) {
        dispatch(setActionSuccess(res.data, ACTIONS.REGISTER_NGO));
      } else {
        dispatch(setActionError(res.error, ACTIONS.REGISTER_NGO_FAIL));
      }
      dispatch(setActionLoading(ACTIONS.LOADING_FALSE));
    })
    .catch(err => {
      console.log(err);
      dispatch(
        setActionError(
          "Something went wrong, please try again later",
          ACTIONS.REGISTER_NGO_FAIL
        )
      );
      dispatch(setActionLoading(ACTIONS.LOADING_FALSE));
    });
};

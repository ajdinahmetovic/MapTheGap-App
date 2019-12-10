import { ACTIONS } from "../constants/action_types";
import AuthAPI from "../api/auth";
import { setActionSuccess, setActionError, setActionLoading } from "./common";
import history from "../history";

export const loginUser = user => async dispatch => {
  dispatch(setActionLoading(ACTIONS.LOGIN_LOADING_TRUE));
  AuthAPI.loginUser(user)
    .then(res => {
      console.log(res.data.data);
      if (res.data.success) {
        dispatch(setActionSuccess(res.data.data, ACTIONS.LOGIN_SUCCESS));
        localStorage.setItem("token", res.data.data.token);
        history.push("/feed");

        dispatch(setActionLoading(ACTIONS.LOGIN_LOADING_FALSE));
      } else {
        dispatch(setActionError("Something went wrong", ACTIONS.LOGIN_FAIL));
      }
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response.data) {
        //Map messagess to i18n
        /*
        switch (err.response.data.error.message) {
          case "User does not exist":
            errMsg = "";
        }
        */
        if (err.response.data.error.message === undefined) {
          dispatch(setActionError("Generic error", ACTIONS.LOGIN_FAIL));
        } else {
          dispatch(
            setActionError(err.response.data.error.message, ACTIONS.LOGIN_FAIL)
          );
        }

        dispatch(setActionLoading(ACTIONS.LOGIN_LOADING_FALSE));
      }
    });
};

export const registerUser = user => async dispatch => {
  dispatch(setActionLoading(ACTIONS.LOADING_TRUE));
  user.address += " " + user.city + " " + user.country;
  let city = "city";
  let country = "country";
  delete user[city];
  delete user[country];
  AuthAPI.registerUser(user)
    .then(res => {
      console.log(res.data);
      if (res.data.success) {
        dispatch(setActionSuccess(res.data.data, ACTIONS.REGISTER_NGO));
        history.push("/feed");
      } else {
        dispatch(setActionError(res.data.error, ACTIONS.REGISTER_NGO_FAIL));
      }
      dispatch(setActionLoading(ACTIONS.LOADING_FALSE));
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(
        setActionError(
          "Something went wrong, please try again later",
          ACTIONS.REGISTER_NGO_FAIL
        )
      );
      dispatch(setActionLoading(ACTIONS.LOADING_FALSE));
    });
};

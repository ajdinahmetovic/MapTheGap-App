import { ACTIONS } from "../constants/action_types";

import ProblemAPI from "../api/problems";
import { setActionSuccess, setActionError, setActionLoading } from "./common";

export const getPosts = () => async dispatch => {
  dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_TRUE));
  ProblemAPI.getProblems()
    .then(res => {
      if (res.data.success) {
        dispatch(
          setActionSuccess(
            res.data.data.issue,
            ACTIONS.FETCHING_PROBLEMS_SUCCESS
          )
        );
        dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_TRUE));
      } else {
        dispatch(
          setActionError(
            "Something went wrong",
            ACTIONS.FETCHING_PROBLEMS_ERROR
          )
        );
        dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_FALSE));
      }
    })
    .catch(err => {
      console.log(err.response.data);

      dispatch(setActionError("Server error", ACTIONS.FETCHING_PROBLEMS_ERROR));
      dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_TRUE));
    });
};

export const createPost = problem => async dispatch => {
  let isPosting = "isPosting";
  delete problem[isPosting];
  dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_TRUE));
  ProblemAPI.createProblem(problem)
    .then(res => {
      console.log(res);
      if (res.success) {
        dispatch(setActionSuccess(res.data, ACTIONS.CREATING_PROBLEMS_SUCCESS));
        dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_FALSE));
      } else {
        dispatch(
          setActionError(
            "Something went wrong",
            ACTIONS.CREATING_PROBLEMS_ERROR
          )
        );
        dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_FALSE));
      }
    })
    .catch(err => {
      console.log(err.response);
      dispatch(setActionError("Server error", ACTIONS.CREATING_PROBLEMS_ERROR));
      dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_FALSE));
    });
};

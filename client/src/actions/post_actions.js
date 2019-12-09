import ProblemAPI from "../api/problems";
import { setActionSuccess, setActionError, setActionLoading } from "./common";

export const getPosts = () => async dispatch => {
  dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_TRUE));
  ProblemAPI.getProblems()
    .then(res => {
      if (res.success) {
        dispatch(setActionSuccess(res.data, ACTIONS.FETCHING_PROBLEMS_SUCCESS));
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
      dispatch(setActionError("Server error", ACTIONS.FETCHING_PROBLEMS_ERROR));
      dispatch(setActionLoading(ACTIONS.FETCHING_PROBLEMS_TRUE));
    });
};

export const createPost = problem => async dispatch => {
  dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_TRUE));
  ProblemAPI.createProblem(problem)
    .then(res => {
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
      dispatch(setActionError("Server error", ACTIONS.CREATING_PROBLEMS_ERROR));
      dispatch(setActionLoading(ACTIONS.CREATING_PROBLEMS_FALSE));
    });
};

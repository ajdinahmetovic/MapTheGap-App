export const setActionError = (errMsg, action) => {
  return {
    type: action,
    payload: errMsg
  };
};

export const setActionSuccess = (payload, action) => {
  return {
    type: action,
    payload: payload
  };
};

export const setActionLoading = action => {
  return {
    type: action
  };
};

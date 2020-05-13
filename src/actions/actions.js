export const SET_REDIRECT = "SET_REDIRECT";
export const setRedirect = (redirect) => {
  return { type: SET_REDIRECT, payload: redirect };
};

export const SET_PAGE = "SET_PAGE";
export const setPage = (direction) => {
  return { type: SET_PAGE, payload: direction };
};

import { SET_REDIRECT, SET_PAGE } from "../actions/actions";
import data from "../data/datav2";

const initialState = {
  data: data,
  page: 1,
  redirect: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT:
      return { ...state, redirect: action.payload };
    case SET_PAGE:
      return {
        ...state,
        redirect: true,
        page:
          action.payload === "PREV"
            ? state.page > 1
              ? state.page - 1
              : state.page
            : state.page < state.data.length
            ? state.page + 1
            : state.page
      };
    default:
      return state;
  }
};

export default reducer;

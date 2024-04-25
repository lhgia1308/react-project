import { CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./ActionType";

const initialState = {
  isLoading: false,
  categories: null,
  success: null,
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        categories: null,
        success: null,
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.data,
        success: "Get data success",
      };
    default:
      return state;
  }
};

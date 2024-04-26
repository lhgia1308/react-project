import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "./ActionType";

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
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        category: null,
        success: null,
      };
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        category: null,
        success: null,
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.data,
        success: "Get data success",
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories, action.payload.data],
        success: "Add a data success",
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: [
          ...state.categories.map((item) => {
            if (item.id === action.payload.data.id) {
              return action.payload.data;
            } else {
              return item;
            }
          }),
        ],
        success: "Update category store successful",
      };

    default:
      return state;
  }
};

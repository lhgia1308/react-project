import {
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  DELETE_MULTI_CATE_REQUEST,
  DELETE_MULTI_CATE_SUCCESS,
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
    case DELETE_MULTI_CATE_REQUEST:
      return {
        ...state,
        isLoading: true,
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
    case DELETE_MULTI_CATE_SUCCESS:
      return {
        isLoading: false,
        categories: state.categories.filter(
          (item) => !action.payload.ids.includes(item.id)
        ),
        message: action.payload.message,
      };

    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories],
        error: action.payload.error,
      };

    default:
      return state;
  }
};

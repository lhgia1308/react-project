import axios from "axios";
import { API_URL } from "../../component/Config/api";
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

export const getCategories =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: CATEGORY_REQUEST });
    try {
      const { data } = await axios.get(`${API_URL}/category/get`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CATEGORY_SUCCESS, payload: { data: data.data } });
    } catch (error) {
      console.log("getCategories error", error);
    }
  };

export const addCategory =
  ({ jwt, reqData }) =>
  async (dispatch) => {
    dispatch({ type: ADD_CATEGORY_REQUEST });
    try {
      const { data } = await axios.post(`${API_URL}/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: { data: data.data } });
    } catch (error) {
      dispatch({ type: ADD_CATEGORY_FAILURE, payload: { error: error } });
      console.log("addCategory error", error);
    }
  };

export const updateCategory =
  ({ jwt, id, reqData }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });
    try {
      const { data } = await axios.put(`${API_URL}/category/${id}`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: { data: data.data } });
    } catch (error) {
      dispatch({ type: ADD_CATEGORY_FAILURE, payload: { error: error } });
      console.log("updateCategory error", error);
    }
  };

export const deleteMultiCat =
  ({ jwt, ids }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_MULTI_CATE_REQUEST });
    try {
      var idStr = ids.reduce((acc, item) => {
        acc += `&ids=${item}`;
        return acc;
      }, "ids=-1");
      const { data } = await axios.delete(`${API_URL}/category?${idStr}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: DELETE_MULTI_CATE_SUCCESS,
        payload: { message: data.message, ids },
      });
    } catch (error) {
      console.log("deleteMultiCat error", error);
    }
  };

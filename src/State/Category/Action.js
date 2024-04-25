import axios from "axios";
import { API_URL } from "../../component/Config/api";
import { CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./ActionType";

export const getCategories =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: CATEGORY_REQUEST });
    try {
      const { data } = await axios.get(`${API_URL}/category/all`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CATEGORY_SUCCESS, payload: { data: data.data } });
    } catch (error) {
      console.log("getCategories error", error);
    }
  };

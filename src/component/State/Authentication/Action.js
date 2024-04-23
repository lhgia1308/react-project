import axios from "axios";
import { API_URL } from "../../config/api";
import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./ActionType";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/sign-up`,
      reqData.userData
    );
    if (data.data.jwt) {
      localStorage.setItem("jwt", data.data.jwt);
    }
    reqData.navigate("/");
    dispatch({ type: REGISTER_REQUEST, payload: data.data.jwt });
  } catch (error) {
    console.log("error", error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/sign-in`,
      reqData.userData
    );
    if (data.data.jwt) {
      localStorage.setItem("jwt", data.data.jwt);
    }
    reqData.navigate("/");
    dispatch({ type: LOGIN_REQUEST, payload: data.data.jwt });
  } catch (error) {
    console.log("error", error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: GET_USER_REQUEST, payload: data.data });
  } catch (error) {
    console.log("error", error);
  }
};

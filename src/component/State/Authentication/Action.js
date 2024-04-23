import axios from "axios";
import { API_URL } from "../../config/api";
import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT,
  REGISTER_REQUEST,
} from "./ActionType";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { resData } = await axios.post(
      `${API_URL}/auth/sign-up`,
      reqData.userData
    );
    if (resData.data.jwt) {
      localStorage.setItem("jwt", resData.data.jwt);
    }
    reqData.navigate("/");
    dispatch({ type: REGISTER_REQUEST, payload: resData.data.jwt });
  } catch (error) {
    console.log("error", error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    console.log("reqData loginUser", reqData);
    const { data } = await axios.post(
      `${API_URL}/auth/sign-in`,
      reqData.userData
    );
    console.log("resData loginUser", data);
    if (data.data.accessToken) {
      localStorage.setItem("jwt", data.data.accessToken);
    }
    data.navigate("/");
    dispatch({ type: LOGIN_REQUEST, payload: data.accessToken });
  } catch (error) {
    console.log("error loginUser", error);
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

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log("error", error);
  }
};

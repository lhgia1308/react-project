import axios from "axios";
import { API_URL } from "../../Config/api";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

export const registerUser =
  ({ reqData, setError, navigate }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      console.log("registerUser reqData", reqData);
      const { data } = await axios.post(`${API_URL}/auth/sign-up`, reqData);
      console.log("registerUser resData", data);
      if (data.data.accessToken) {
        localStorage.setItem("jwt", data.data.accessToken);
      }
      dispatch({ type: REGISTER_SUCCESS, payload: data.data.accessToken });
      console.log("registerUser success", data);
      navigate(-1);
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, payload: error });
      console.log("registerUser error", error);
    }
  };

export const loginUser =
  ({ reqData, setError, navigate }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      console.log("loginUser reqData", reqData);
      const { data } = await axios.post(`${API_URL}/auth/sign-in`, reqData);
      console.log("loginUser resData", data);
      if (data.data.accessToken) {
        localStorage.setItem("jwt", data.data.accessToken);
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          jwt: data.data.accessToken,
          userInfo: data.data.userResponse,
        },
      });
      console.log("loginUser success", data);
      if (data.data.userResponse.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/my-profile");
      }
    } catch (error) {
      setError("Username or password is not correct!");
      dispatch({ type: LOGIN_FAILURE, payload: error });
      console.log("loginUser error", error);
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
    // console.log("getUser resData", data);
    dispatch({ type: LOGIN_SUCCESS, payload: { userInfo: data.data } });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
    console.log("error getUser", error);
  }
};

export const logout =
  ({ jwt, navigate }) =>
  async (dispatch) => {
    dispatch({ type: LOGOUT });
    try {
      const { data } = await axios.get(`${API_URL}/auth/log-out`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      navigate("/");
      console.log("logout resData", data);
      localStorage.clear();
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.log("logout error", error);
    }
  };

import axios from "axios";
import { setAlert } from "../alert/AlertAction";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./AuthTypes";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/token/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Authenticated Successfully", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    console.log(err)
    dispatch(setAlert("Error Authenticating", "danger"));
  }
};

export const signup = ({ name, email, phone_number, password, password2 }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, phone_number, password, password2 });

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/accounts/signup/",
      body,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(login(email, password));
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });

    dispatch(setAlert("Error Authenticating", "error"));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAlert("Logout Successful", "success"));
  dispatch({ type: LOGOUT });
};

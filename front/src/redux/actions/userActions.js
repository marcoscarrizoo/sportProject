import axios from "axios";

import { url } from "../../App";
import { auth } from "../../firebase";

export const LOGIN_WITH_USER = "LOGIN_WiTH_USER";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_LOG_OUT = "USER_LOG_OUT";

export let doUserLogin = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN_SUCESS,
  });
  saveStorage(getState().user);
};

export let newUser = (form) => async (dispatch) => {
  try {
    const data = await axios.post(url + "/user/create", form);
    console.log("dataaaa", data);
  } catch (e) {
    console.log(e);
  }
};

export let doLogOut = () => (dispatch) => {
  auth.signOut();
  console.log(auth.signOut());
  dispatch({
    type: USER_LOG_OUT,
  });
  localStorage.removeItem("storage");
};

// action para recuperar la sesion iniciada
export let restoreSessionAction = () => (dispatch) => {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage);
  if (storage && storage.loggedIn === true) {
    dispatch({
      type: LOGIN_SUCESS,
      payload: storage,
    });
  }
};

//funcion auxiliar que nos ayuda a guardar cosas en el local storage
export function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage);
}

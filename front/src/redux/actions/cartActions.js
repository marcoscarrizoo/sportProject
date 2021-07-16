import axios from "axios";
//import { url } from "../../App";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const LOAD_CART = "LOAD_CART";

export const addToCart = (product) => async (dispatch) => {
  const { id, quantity } = product;
  console.log(product);
  try {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    if (!cart || !cart.length) {
      localStorage.setItem("cart", JSON.stringify([product]));
    } else {
      for (var item of cart) {
        if (item.id === id) {
          item.quantity += quantity;
        }
      }
    }
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    //sweetAlert("Agregado", "success", "OK", 1000);
  } catch (e) {
    console.log(e);
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  let cart = getState().cart.items;
  let newCart = cart.filter((e) => e.id !== id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
  //sweetAlert("Eliminado", "success", "OK", 1000);
};

export const cartReset = () => (dispatch) => {
  dispatch({
    type: CART_RESET,
    payload: [],
  });
  //sweetAlert("Vaciado", "success", "OK", 1000);
  localStorage.setItem("cart", "[]");
};

export const changeProductQuantity =
  (id, quantity) => async (dispatch, getState) => {
    let cart = getState().cart.items;
    for (var item of cart) {
      if (item.id === id) {
        item.quantity = quantity;
      }
    }
    dispatch({ type: CHANGE_PRODUCT_QTY, payload: cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

export const loadCart = () => {
  return async (dispatch) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch({
      type: LOAD_CART,
      payload: cart,
    });
  };
};

export const checkout = () => async (dispatch, getState) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  try {
    axios.post("/order/create", { cart });
  } catch (e) {
    console.log(e);
  }
};

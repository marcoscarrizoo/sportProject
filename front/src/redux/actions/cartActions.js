import axios from "axios";
import { newUser } from "./userActions";

import { url } from "../../App";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const LOAD_CART = "LOAD_CART";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const FUSION_CART = "FUSION_CART";

export const addToCart = (id, quantity, price, userId) => async (dispatch) => {
  let product = {
    id,
    quantity,
    price,
  };

  // userId = "d1687b07-058c-414a-bb5a-77a8d897be57";
  // // RUTA DE ACTUALIZACION AL BACK                                                --------
  // let info = {userId, productId: id, cantidad final}
  // if(userId) await axios.put( url + "/order/addOrder", info)     

  try {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart || !cart.length) {
      quantity = 1;
      localStorage.setItem("cart", JSON.stringify([{ ...product, quantity }]));
    } else {
      let ids = cart.map((e) => e.id);
      if (!ids.includes(id)) {
        quantity = 1;
        cart.push({ ...product, quantity });
      } else {
        for (var item of cart) {
          if (item.id === id) {
            item.quantity = quantity === "add" ? ++item.quantity : quantity;
            item.price = price;
            quantity = item.quantity;
          }
        }
      }
      let info = { userId, products:[{productId: id, quantity}]};
      if (userId) await axios.put(url + "/order/addOrder", info);

      localStorage.setItem("cart", JSON.stringify(cart));
    }



    dispatch({
      type: ADD_TO_CART,
      payload: JSON.parse(localStorage.getItem("cart")),
    });


    //localStorage.setItem("cart", JSON.stringify(cart));
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
    payload: newCart,
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
  (id, quantity, userId) => async (dispatch, getState) => {
    let cart = getState().cart.items;
    for (var item of cart) {
      if (item.id === id) {
        item.quantity = quantity;
      }
    }
    dispatch({ type: CHANGE_PRODUCT_QTY, payload: cart });
    localStorage.setItem("cart", JSON.stringify(cart));

    // RUTA DE ACTUALIZACION AL BACK                                                  ---------
    if (userId) await axios.put(url + "/order/addOrder", { userId, products: [{ productId: id, quantity }] })
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

export const updateTotal = () => async (dispatch) => {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var total = 0;
  if (cart?.length) {
    for (var i of cart) {
      total += parseFloat(i.price) * parseFloat(i.quantity);
    }
  }
  dispatch({ type: UPDATE_TOTAL, payload: total });
};

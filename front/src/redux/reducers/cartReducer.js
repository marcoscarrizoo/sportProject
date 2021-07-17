import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_RESET,
  CHANGE_PRODUCT_QTY,
  LOAD_CART,
} from "../actions/cartActions";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.payload,
      };
    case CART_RESET:
      return {
        ...state,
        items: action.payload,
      };
    case CHANGE_PRODUCT_QTY:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_CART:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}

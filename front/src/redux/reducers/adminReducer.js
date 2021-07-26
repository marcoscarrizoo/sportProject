import { ORDERS } from "../actions/adminActions";

const initialState = {
  orders: [],
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
}

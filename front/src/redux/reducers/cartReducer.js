import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_RESET,
  CHANGE_PRODUCT_QTY,
  LOAD_CART,
  UPDATE_TOTAL,
} from "../actions/cartActions";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  total: 0,
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
        total: action.payload.reduce( (t,s) => {
          return t + (s.price * s.quantity)
        },0)
      };
    case CART_RESET:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_CART:
      if(!action.regiter){
        return {
          ...state,
          items: action.payload,
          total: action.payload.reduce( (t,s) => {
            return t + (s.price * s.quantity)
          },0)
        };
      }
      else {


        return {
          ...state,
          items: action.payload,
          total: action.payload.reduce( (t,s) => {
            return t + (s.price * s.quantity)
          },0)
        }
      }

    default:
      return state;
  }
}


// import {
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   CART_RESET,
//   CHANGE_PRODUCT_QTY,
//   LOAD_CART,
//   UPDATE_TOTAL,
// } from "../actions/cartActions";

// const initialState = {
//   items: JSON.parse(localStorage.getItem("cart") || "[]"),
// };

// export default function cartReducers(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     case CART_RESET:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     case CHANGE_PRODUCT_QTY:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     case LOAD_CART:
//       if(!action.regiter){
//         return {
//           ...state,
//           items: action.payload,
//         };
//       }
//       else {
//         return {
//           ...state,
//           items: action.payload.map( e => { 
//             return { 
//               id: e.id,
//               name: e.name,
//               ...e.Order_Product
//             }
//           })
//         }
//       }

//     case UPDATE_TOTAL:
//       return {
//         ...state,
//         total: action.payload,
//       };

//     default:
//       return state;
//   }
// }
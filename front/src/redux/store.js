import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import { restoreSessionAction } from "./actions/userActions";
<<<<<<< HEAD
import admReducer from "./reducers/admReducer";
=======
import locationReducer from "./reducers/locationReducers";
import adminReducer from "./reducers/adminReducer";
import reviewsReducer from "./reducers/reviewsReducer";
>>>>>>> fixed

//aca van los reducers
let rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
<<<<<<< HEAD
  adm: admReducer,
=======
  location: locationReducer,
  admin: adminReducer,
  reviews: reviewsReducer,
>>>>>>> fixed
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generatorStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  restoreSessionAction()(store.dispatch);
  return store;
}

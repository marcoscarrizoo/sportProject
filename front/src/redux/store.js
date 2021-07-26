import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import { restoreSessionAction } from "./actions/userActions";
import locationReducer from "./reducers/locationReducers";
import adminReducer from "./reducers/adminReducer";

//aca van los reducers
let rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
  location: locationReducer,
  admin: adminReducer,
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

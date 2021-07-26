import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import { restoreSessionAction } from "./actions/userActions";
import admReducer from "./reducers/admReducer";

//aca van los reducers
let rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
  adm: admReducer,
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

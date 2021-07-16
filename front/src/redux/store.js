import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../redux/reducers/productReducer'
import userReducer from '../redux/reducers/userReducer'
import {restoreSessionAction} from '../redux/actions/userActions'
//aca van los reducers 

let rootReducer = combineReducers({
products : productReducer,
user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export default function generatorStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    restoreSessionAction()(store.dispatch)
    return store
}
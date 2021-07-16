//actions
import { LOGIN_WITH_USER, LOGIN_SUCESS, LOGIN_ERROR, USER_LOG_OUT } from "../actions/userActions"


//states 
const initialState = {
user: [],
loggedIn: false, 
fetching: false //el fetching es el que usamos cuando nos logueamos y esta cargando... cuando ingresa exitosamente, pasa el fetching a false y el loggedIn a true
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case USER_LOG_OUT: 
        return {
            ...state,
            loggedIn: false
        }
       case LOGIN_WITH_USER:
        return {
            ...state, 
            fetching: true
        } 
        case LOGIN_SUCESS: 
        return {
            ...state,
            fetching: false,
            ...action.payload,
            loggedIn: true
           
        }
        case LOGIN_ERROR:
            return {
                fetching: false,
                error: action.payload
            }
        default:
            return state 
    }
}
//actions
import { LOGIN_WITH_USER, LOGIN_SUCESS, LOGIN_ERROR, USER_LOG_OUT, LOGIN, LOGIN_SUCESS_GOOGLE } from "../actions/userActions"


//states 
const initialState = {
    loggedIn: false,
    fetching: false //el fetching es el que usamos cuando nos logueamos y esta cargando... cuando ingresa exitosamente, pasa el fetching a false y el loggedIn a true
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_OUT:
            return {
                loggedIn: false,
                fetching: false
            }
        case LOGIN_WITH_USER:
            return {
                ...state,
                fetching: true
            }
        case LOGIN:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCESS:
            return {
                ...state,
                fetching: false,
                loggedIn: true,
                ...action.payload
            }
        case LOGIN_SUCESS_GOOGLE:
            return {
                ...state,
                fetching: false,
                loggedIn: true,
                googleUser: action.payload
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
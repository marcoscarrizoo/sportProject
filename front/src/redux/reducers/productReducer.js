//actions
import { GET_PRODUCT_DETAIL, GET_PRODUCTS } from "../actions/productsActions"

//states 
const initialState = {
    productDetail: [],
    products: [],
    sorts:{},
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload 
            }
        default:
            return state
    }
}
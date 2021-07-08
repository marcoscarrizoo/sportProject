//actions
import { GET_PRODUCT_DETAIL } from "../actions/productsActions"

//states 
const initialState = {
productDetail: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                productDetail : action.payload
            }
        
        default:
            return state 
    }
}
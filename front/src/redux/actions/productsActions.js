export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_PRODUCTS = 'GET_PRODUCTS';


//marcos 
export function getProductDetail(id) {
    return function(dispatch) {
        fetch('http://localhost:3001/product/' + id)
        .then(res => res.json())
        .then(detail => dispatch({
            type: GET_PRODUCT_DETAIL,
            payload : detail 
        }))
    }
}


export function getProducts(id) {
    return function(dispatch) {
        fetch('http://localhost:3001/product')
        .then(res => res.json())
        .then(products => dispatch({
            type: GET_PRODUCTS,
            payload : products 
        }))
    }
}